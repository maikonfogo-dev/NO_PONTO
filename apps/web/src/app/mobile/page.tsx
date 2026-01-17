"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { MapPin, Camera, LogOut, Clock, FileText, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { api } from "@/lib/api";
import { authService } from "@/lib/auth";

const MobileMirror = dynamic(
  () => import("./MobileMirror"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full py-8 flex items-center justify-center text-xs text-slate-500">
        Carregando espelho...
      </div>
    ),
  }
);

const MobileGeofenceMap = dynamic(
  () => import("./MobileGeofenceMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-64 flex items-center justify-center text-xs text-slate-500">
        Carregando mapa...
      </div>
    ),
  }
);
interface HistoryItem {
  type: string;
  time: string;
  status: string;
  variant: "success" | "warning" | "destructive";
  location?: string;
  geofence?: boolean;
  distanceFromLocationMeters?: number;
}

export default function MobilePontoPage() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [location, setLocation] = useState("Localizando...");
  const [coords, setCoords] = useState<{lat: number, long: number, acc: number} | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeTab, setActiveTab] = useState('ponto');
  const [dailySummary, setDailySummary] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  
  // Shared State
  const [employeeId, setEmployeeId] = useState<string>('');
  const [showHistorySheet, setShowHistorySheet] = useState(false);
  const [showMapSheet, setShowMapSheet] = useState(false);
  const [historySheetFilter, setHistorySheetFilter] = useState<'all' | 'violations'>('all');

  // Camera State
  const [cameraOpen, setCameraOpen] = useState(false);
  const [pendingType, setPendingType] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fetchDailyStatus = useCallback(async () => {
      if (!employeeId) return;
      try {
          const res = await api.get('/ponto/hoje', {
              params: { employeeId }
          });
          const data = res.data;
          setDailySummary(data);
          
          // Update history from backend data
          if (data.punches) {
              setHistory(data.punches.map((p: any) => {
                  const timeLabel = new Date(p.timestamp).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

                  const locationParts: string[] = [];
                  if (p.address) {
                    locationParts.push(p.address);
                  }
                  if (typeof p.latitude === 'number' && typeof p.longitude === 'number') {
                    locationParts.push(`${p.latitude.toFixed(5)}, ${p.longitude.toFixed(5)}`);
                  }
                  const locationLabel = locationParts.join(" • ");

                  const geofence = !!p.isGeofenceViolation;
                  let variant: HistoryItem["variant"] = 'success';
                  let statusLabel = 'Aprovado';

                  if (p.status === 'PENDENTE') {
                    variant = 'warning';
                    statusLabel = 'Pendente';
                  }

                  if (geofence) {
                    variant = 'warning';
                    statusLabel = 'Fora do posto';
                  }

                  if (p.status === 'REJEITADO') {
                    variant = 'destructive';
                    statusLabel = 'Rejeitado';
                  }

                  return {
                    type: p.type,
                    time: timeLabel,
                    status: statusLabel,
                    variant,
                    location: locationLabel || undefined,
                    geofence,
                    distanceFromLocationMeters: typeof p.distanceFromLocationMeters === 'number' ? p.distanceFromLocationMeters : undefined,
                  } as HistoryItem;
              }));
          }
      } catch (e) { console.error(e); }
  }, [employeeId]);


  const getLocation = (onSuccess: (pos: GeolocationPosition) => void, onError: (err: GeolocationPositionError) => void) => {
    const handleFallback = async (originalError: GeolocationPositionError) => {
      try {
        const supportsAbortController = typeof AbortController !== "undefined";
        const controller = supportsAbortController ? new AbortController() : null;
        const timeoutId = supportsAbortController
          ? setTimeout(() => controller?.abort(), 7000)
          : null;

        const response = await fetch("https://ipapi.co/json/", {
          signal: controller ? controller.signal : undefined,
        });

        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        if (!response.ok) {
          throw new Error("IP geolocation error");
        }

        const data = await response.json();
        if (data && typeof data.latitude === "number" && typeof data.longitude === "number") {
          const fakePos = {
            coords: {
              latitude: data.latitude,
              longitude: data.longitude,
              accuracy: typeof data.accuracy === "number" ? data.accuracy : 1000,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null,
            },
            timestamp: Date.now(),
          } as unknown as GeolocationPosition;
          onSuccess(fakePos);
          return;
        }
        throw new Error("Invalid IP geolocation data");
      } catch {
        onError(originalError);
      }
    };

    if (!navigator.geolocation) {
      const fallbackError = {
        code: 0,
        message: "Geolocalização não suportada",
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
      } as GeolocationPositionError;
      handleFallback(fallbackError);
      return;
    }

    const optionsHigh = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
    const optionsLow = { enableHighAccuracy: false, timeout: 12000, maximumAge: 0 };

    navigator.geolocation.getCurrentPosition(
      onSuccess,
      (errorHigh) => {
        navigator.geolocation.getCurrentPosition(
          onSuccess,
          (errorLow) => {
            handleFallback(errorLow);
          },
          optionsLow
        );
      },
      optionsHigh
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("auth_token");
    const userRaw = localStorage.getItem("user_data");

    if (!token || !userRaw) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const user = JSON.parse(userRaw);
      if (user.role !== "EMPLOYEE" && user.role !== "COLABORADOR") {
        setIsAuthenticated(false);
        return;
      }
      if (typeof user.name === "string" && user.name.trim().length > 0) {
        setUserName(user.name);
      } else {
        setUserName(null);
      }
      if (typeof user.employeeId === "string" && user.employeeId.trim().length > 0) {
        setEmployeeId(user.employeeId);
      }
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated || activeTab !== 'ponto') return;

    setCurrentTime(new Date());

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Tenta obter localização real ao iniciar (silencioso)
    getLocation(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const acc = position.coords.accuracy;
        setCoords({ lat, long, acc });
        setLocation(`${lat.toFixed(5)}, ${long.toFixed(5)}`);
      },
      (error) => {
        console.warn("Erro ao obter localização inicial:", error.message);
        setLocation("Localização indisponível");
      }
    );

    return () => clearInterval(timer);
  }, [isAuthenticated, activeTab]);

  useEffect(() => {
      if (employeeId) {
          fetchDailyStatus();
      }
  }, [employeeId, fetchDailyStatus]);



  const handleRegister = async (type: string, photoBlob: Blob) => {
    if (!currentTime || !employeeId) return;
    
    const formData = new FormData();
    formData.append('employeeId', employeeId);
    formData.append('type', type);
    formData.append('latitude', String(coords?.lat || 0));
    formData.append('longitude', String(coords?.long || 0));
    formData.append('accuracy', String(coords?.acc || 0));
    formData.append('file', photoBlob, 'selfie.jpg');

    try {
        const res = await api.post('/ponto/registrar', formData);
        
        if (res.status === 201 || res.status === 200) {
            alert(`${type} registrada com sucesso!`);
            fetchDailyStatus(); // Refresh status
        } else {
            alert('Erro ao registrar ponto.');
        }
    } catch (e) {
        console.error(e);
        alert('Erro de conexão.');
    }
  };

  const startRegisterFlow = async (type: string) => {
    // 1. Request Location
    setLocation("Obtendo GPS...");
    
    getLocation(
        (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const acc = position.coords.accuracy;
            
            setCoords({ lat, long, acc });
            setLocation(`${lat.toFixed(5)}, ${long.toFixed(5)} (±${Math.round(acc)}m)`);
            
            setPendingType(type);
            setCameraOpen(true);
            startCamera();
        },
        (error) => {
            alert("Erro ao obter localização: " + error.message + "\nVerifique se o GPS está ativado.");
            setLocation("Localização indisponível");
        }
    );
  };

  const startCamera = async () => {
    try {
        // Verifica se existe suporte a mediaDevices
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("API de câmera não suportada neste navegador");
        }

        // Tenta primeiro com preferência para câmera frontal (celular)
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    } catch (err: any) {
        console.warn("Erro ao acessar câmera frontal, tentando câmera padrão...", err);
        
        // Verifica erro específico de dispositivo não encontrado
        if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
             // Fallback para Upload de Arquivo se não houver câmera
             setCameraOpen(false); // Fecha modal da câmera
             // Dispara input de arquivo invisível
             document.getElementById('file-upload-fallback')?.click();
             return;
        }

        try {
            // Fallback para qualquer câmera disponível (PC/Webcam)
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err2: any) {
            console.error("Erro ao acessar câmera (fallback):", err2);
            
            // Se falhar também, oferece upload
            setCameraOpen(false);
            const confirmUpload = window.confirm("Câmera não encontrada. Deseja enviar uma foto do arquivo?");
            if (confirmUpload) {
                document.getElementById('file-upload-fallback')?.click();
            }
        }
    }
  };

  const stopCamera = () => {
      if (videoRef.current && videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject as MediaStream;
          stream.getTracks().forEach(track => track.stop());
          videoRef.current.srcObject = null;
      }
  };

  const handleCancelCamera = () => {
      stopCamera();
      setCameraOpen(false);
      setPendingType(null);
  };

  const handleCaptureAndRegister = () => {
      if (!videoRef.current || !canvasRef.current || !pendingType) return;

      const context = canvasRef.current.getContext('2d');
      if (context) {
          canvasRef.current.width = videoRef.current.videoWidth;
          canvasRef.current.height = videoRef.current.videoHeight;
          context.drawImage(videoRef.current, 0, 0);
          
          canvasRef.current.toBlob((blob) => {
              if (blob) {
                  handleRegister(pendingType!, blob);
              }
          }, 'image/jpeg', 0.8);
          
          stopCamera();
          setCameraOpen(false);
          setPendingType(null);
      }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
  };


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && pendingType) {
        handleRegister(pendingType, e.target.files[0]);
        setPendingType(null);
    }
  };

  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center">App Mobile - Colaborador</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center text-sm text-muted-foreground">
            <p>Faça login para acessar o seu espelho de ponto pelo app mobile.</p>
            <Button className="w-full" onClick={() => router.push("/login")}>
              Ir para tela de login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentTime) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      <input 
        type="file" 
        id="file-upload-fallback" 
        accept="image/*" 
        capture="environment"
        className="hidden" 
        onChange={handleFileUpload}
      />
      
      {/* Header Mobile - Only show on Ponto Tab */}
      {(activeTab !== 'espelho') && (
        <header className="bg-[#1E40AF] text-white p-6 rounded-b-[2rem] shadow-lg relative overflow-hidden transition-all duration-300">
            <div className="relative z-10 flex justify-between items-start">
            <div>
                <p className="text-primary-foreground/80 text-sm">
                  {userName ? `Olá, ${userName}` : "Olá"}
                </p>
                <h1 className="text-2xl font-bold mt-1">
                    {activeTab === 'ponto' ? 'Bom trabalho! 👋' : 'Meus Espelhos'}
                </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary/20"
              onClick={() => {
                authService.logout();
                router.push("/login");
              }}
            >
                <LogOut className="h-5 w-5" />
            </Button>
            </div>
            
            {activeTab === 'ponto' && (
                <>
                    <div className="mt-8 text-center mb-4">
                        <p className="text-primary-foreground/80 text-sm capitalize">{formatDate(currentTime)}</p>
                        <div className="text-5xl font-bold tracking-wider font-mono mt-2">
                            {formatTime(currentTime)}
                        </div>
                    </div>
                    <div className="flex justify-center mb-4">
                        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white">
                            <MapPin className="h-3 w-3" />
                            {location}
                        </div>
                    </div>
                </>
            )}
        </header>
      )}

      <main className={`px-4 relative z-20 space-y-4 ${activeTab === 'ponto' ? '-mt-6' : 'mt-4'} pb-24`}>
        {activeTab === 'ponto' && (
            <>
                <Card className="shadow-xl border-none">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setShowMapSheet(true)}
                      className="w-full h-32 bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden group border-2 border-dashed border-slate-300 hover:border-primary transition-colors"
                    >
                      <div className="absolute inset-0 bg-slate-200/50 flex flex-col items-center justify-center gap-1">
                        <span className="text-xs text-slate-500 font-medium">Mapa / Geofence</span>
                        <span className="text-[10px] text-slate-400">Toque para visualizar</span>
                      </div>
                      <div className="absolute inset-0 opacity-20 bg-slate-300" />
                      {dailySummary?.lastPunch?.isGeofenceViolation && (
                        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-red-600 text-white text-[10px] px-2 py-0.5 shadow">
                          <AlertTriangle className="h-3 w-3" />
                          <span>Fora do posto</span>
                        </div>
                      )}
                    </button>
                    
                    <div className="w-full grid grid-cols-2 gap-3">
                    <Button size="lg" className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 shadow-green-200 shadow-lg" onClick={() => startRegisterFlow('Entrada')}>
                        Entrada
                    </Button>
                    <Button size="lg" variant="destructive" className="w-full h-14 text-lg shadow-red-200 shadow-lg" onClick={() => startRegisterFlow('Saída')}>
                        Saída
                    </Button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                    <Camera className="h-3 w-3" />
                    <span>Selfie obrigatória neste posto</span>
                    </div>
                </CardContent>
                </Card>

                {/* Camera Modal */}
                {cameraOpen && (
                    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
                        <div className="relative w-full h-full flex flex-col">
                            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                            <canvas ref={canvasRef} className="hidden" />
                            
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                                <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    Registrando: {pendingType}
                                </span>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={handleCancelCamera}>
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-4 p-4">
                                <Button 
                                    size="lg" 
                                    className="h-20 w-20 rounded-full bg-white border-4 border-gray-300 hover:bg-gray-100 flex items-center justify-center shadow-2xl"
                                    onClick={handleCaptureAndRegister}
                                >
                                    <div className="h-16 w-16 rounded-full bg-red-600" />
                                </Button>
                            </div>
                            
                            <div className="absolute bottom-32 left-0 right-0 text-center text-white/80 text-sm">
                                Toque para capturar e confirmar
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-xs text-muted-foreground mb-1">Jornada</span>
                    <span className="font-bold text-lg">08:45h</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-xs text-muted-foreground mb-1">Saldo</span>
                    <Badge variant="success" className="bg-green-100 text-green-700 hover:bg-green-200">+00:15h</Badge>
                    </CardContent>
                </Card>
                </div>

                <div className="flex items-center justify-between mt-4 mb-2">
                    <h2 className="font-bold text-lg text-gray-800">Histórico de Hoje</h2>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-[#1E40AF]"
                      onClick={() => setShowHistorySheet(true)}
                    >
                      Ver completo
                    </Button>
                </div>
                
                <div className="space-y-3">
                    {history.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-600 shadow-sm">
                        <CardContent className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${item.type === 'Entrada' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                            <Clock className="h-4 w-4" />
                            </div>
                            <div>
                            <p className="font-bold text-gray-800">{item.type}</p>
                            <p className="text-xs text-gray-500">{item.time}</p>
                            {item.location && (
                              <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                                <MapPin className="h-3 w-3" />
                                <span className="truncate max-w-[180px]">{item.location}</span>
                              </p>
                            )}
                            {typeof item.distanceFromLocationMeters === 'number' && (
                              <p
                                className={`text-[11px] mt-1 ${
                                  item.distanceFromLocationMeters < 10
                                    ? 'text-green-600'
                                    : item.distanceFromLocationMeters <= 50
                                    ? 'text-yellow-600'
                                    : 'text-red-600'
                                }`}
                              >
                                {item.distanceFromLocationMeters} m do posto
                              </p>
                            )}
                            </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            item.variant === 'success'
                              ? 'bg-green-100 text-green-700 border-green-200'
                              : item.variant === 'warning'
                              ? 'bg-yellow-100 text-yellow-700 border-yellow-200'
                              : 'bg-red-100 text-red-700 border-red-200'
                          }
                        >
                          {item.status}
                        </Badge>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </>
        )}

        {activeTab === 'espelho' && (
          <MobileMirror employeeId={employeeId} />
        )}


      </main>

      {/* Histórico do Dia - Sheet */}
      {showHistorySheet && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center sm:items-center p-4">
          <div className="bg-white w-full max-w-sm rounded-t-xl sm:rounded-xl p-6 space-y-4 animate-in slide-in-from-bottom-10 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Pontos de hoje</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowHistorySheet(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2 mt-2">
              <Button
                size="sm"
                variant={historySheetFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setHistorySheetFilter('all')}
              >
                Todas
              </Button>
              <Button
                size="sm"
                variant={historySheetFilter === 'violations' ? 'default' : 'outline'}
                onClick={() => setHistorySheetFilter('violations')}
              >
                Só violações
              </Button>
            </div>
            {(() => {
              const filteredHistory =
                historySheetFilter === 'violations'
                  ? history.filter((item) => item.geofence)
                  : history;

              if (filteredHistory.length === 0) {
                return (
                  <div className="text-center text-sm text-muted-foreground py-8">
                    Nenhum ponto
                    {historySheetFilter === 'violations' ? ' com violação' : ''} registrado hoje.
                  </div>
                );
              }

              return (
                <div className="space-y-3">
                  {filteredHistory.map((item, index) => (
                    <Card key={index} className="shadow-sm">
                      <CardContent className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-full ${
                              item.type === 'Entrada'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-orange-100 text-orange-600'
                            }`}
                          >
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">{item.type}</p>
                            <p className="text-xs text-gray-500">{item.time}</p>
                            {item.location && (
                              <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                                <MapPin className="h-3 w-3" />
                                <span className="truncate max-w-[190px]">{item.location}</span>
                              </p>
                            )}
                            {typeof item.distanceFromLocationMeters === 'number' && (
                              <p
                                className={`text-[11px] mt-1 ${
                                  item.geofence
                                    ? 'text-red-600'
                                    : item.distanceFromLocationMeters < 10
                                    ? 'text-green-600'
                                    : item.distanceFromLocationMeters <= 50
                                    ? 'text-yellow-600'
                                    : 'text-red-600'
                                }`}
                              >
                                {item.distanceFromLocationMeters} m do posto
                              </p>
                            )}
                            {item.geofence && (
                              <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                                <AlertTriangle className="h-3 w-3" />
                                Fora do posto
                              </p>
                            )}
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            item.variant === 'success'
                              ? 'bg-green-100 text-green-700 border-green-200'
                              : item.variant === 'warning'
                              ? 'bg-yellow-100 text-yellow-700 border-yellow-200'
                              : 'bg-red-100 text-red-700 border-red-200'
                          }
                        >
                          {item.status}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {showMapSheet && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center sm:items-center p-4">
          <div className="bg-white w-full max-w-sm rounded-t-xl sm:rounded-xl p-4 space-y-3 animate-in slide-in-from-bottom-10 max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Mapa do posto</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowMapSheet(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <MobileGeofenceMap
                employeeCoords={coords}
                workLocation={dailySummary?.workLocation}
              />
            </div>
            <p className="text-[11px] text-muted-foreground">
              Círculo indica a área configurada do posto. Marcadores mostram posto e sua posição aproximada.
            </p>
          </div>
        </div>
      )}



      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-6 flex justify-around items-center z-40 pb-6">
        <button 
          onClick={() => setActiveTab('ponto')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'ponto' ? 'text-[#1E40AF]' : 'text-gray-400'}`}
        >
          <div className={`p-1.5 rounded-full ${activeTab === 'ponto' ? 'bg-blue-50' : ''}`}>
            <Clock className="h-6 w-6" />
          </div>
          <span className="text-xs font-medium">Bater Ponto</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('espelho')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'espelho' ? 'text-[#1E40AF]' : 'text-gray-400'}`}
        >
          <div className={`p-1.5 rounded-full ${activeTab === 'espelho' ? 'bg-blue-50' : ''}`}>
            <FileText className="h-6 w-6" />
          </div>
          <span className="text-xs font-medium">Espelho</span>
        </button>
      </div>
    </div>
  );
}
