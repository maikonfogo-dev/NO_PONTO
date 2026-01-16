"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { MapPin, Camera, LogOut, Clock, FileText, Download, X, Calendar, Eye, ChevronLeft, CheckCircle, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { api } from "@/lib/api";

interface HistoryItem {
  type: string;
  time: string;
  status: string;
  variant: "success" | "warning" | "destructive";
}

export default function MobilePontoPage() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [location, setLocation] = useState("Localizando...");
  const [coords, setCoords] = useState<{lat: number, long: number, acc: number} | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeTab, setActiveTab] = useState('ponto');
  const [dailySummary, setDailySummary] = useState<any>(null);
  
  // Mirror State
  const [employeeId, setEmployeeId] = useState<string>('');
  const [mirrorView, setMirrorView] = useState<'list' | 'detail'>('list');
  const [mirrorsList, setMirrorsList] = useState<any[]>([]);
  const [selectedMirror, setSelectedMirror] = useState<any>(null);
  const [loadingMirror, setLoadingMirror] = useState(false);
  const [showDownloadSheet, setShowDownloadSheet] = useState(false);
  const [downloadType, setDownloadType] = useState<'pdf' | 'excel'>('pdf');
  const [monthFilter, setMonthFilter] = useState<string>(new Date().toISOString().slice(0, 7));

  // Camera State
  const [cameraOpen, setCameraOpen] = useState(false);
  const [pendingType, setPendingType] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fetchEmployee = useCallback(async () => {
    try {
      const res = await api.get('/colaboradores');
      const data = res.data;
      if (data.length > 0) {
          setEmployeeId(data[0].id);
      }
    } catch (e) { console.error(e); }
  }, []);

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
              setHistory(data.punches.map((p: any) => ({
                  type: p.type,
                  time: new Date(p.timestamp).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' }),
                  status: 'Aprovado', // Assuming immediate approval for MVP or logic check
                  variant: 'success'
              })));
          }
      } catch (e) { console.error(e); }
  }, [employeeId]);

  const fetchMirrorForMonth = useCallback(async (monthStr: string) => {
    if (!employeeId) return;
    setLoadingMirror(true);
    try {
      const [year, month] = monthStr.split('-');
      const res = await api.get('/ponto/espelho', {
          params: { employeeId, month, year }
      });
      const data = res.data;
      
      // Adapt backend response to UI structure
      // Backend returns: { employee, period: {month, year}, days: [] }
      // UI expects a list of mirrors. We'll create a single item list.
      
      const totalWorked = data.days.reduce((acc: number, day: any) => acc + parseFloat(day.workedHours || 0), 0);
      const totalBalance = data.days.reduce((acc: number, day: any) => acc + parseFloat(day.balance || 0), 0);
      
      const mirrorObj = {
          id: `${year}-${month}`,
          startDate: `${year}-${month}-01`,
          endDate: `${year}-${month}-${new Date(Number(year), Number(month), 0).getDate()}`,
          status: 'EM_CONFERENCIA', // Mock status for now
          workedHours: totalWorked,
          balance: totalBalance,
          employee: data.employee,
          dailyDetails: data.days.map((d: any) => ({
              date: d.date,
              entry: d.punches[0] ? new Date(d.punches[0].timestamp).toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'}) : '-',
              exit: d.punches.length > 1 ? new Date(d.punches[d.punches.length-1].timestamp).toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'}) : '-',
              total: d.workedHours + 'h',
              status: d.status,
              statusColor: d.status === 'OK' ? 'green' : 'red'
          }))
      };

      setMirrorsList([mirrorObj]);
    } catch (error) {
      console.error('Failed to fetch mirrors list', error);
      setMirrorsList([]);
    } finally {
      setLoadingMirror(false);
    }
  }, [employeeId]);

  const getLocation = (onSuccess: (pos: GeolocationPosition) => void, onError: (err: GeolocationPositionError) => void) => {
    const handleFallback = async (originalError: GeolocationPositionError) => {
      try {
        const response = await fetch("https://ipapi.co/json/");
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
    const optionsLow = { enableHighAccuracy: false, timeout: 15000, maximumAge: 0 };

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
    // Evitar erro de hidratação setando a data apenas no cliente
    setCurrentTime(new Date());
    
    // Simula login pegando primeiro colaborador
    fetchEmployee();

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
  }, [fetchEmployee]);

  useEffect(() => {
      if (employeeId) {
          fetchDailyStatus();
      }
  }, [employeeId, fetchDailyStatus]);

  useEffect(() => {
      if (activeTab === 'espelho' && employeeId) {
          fetchMirrorForMonth(monthFilter);
      }
  }, [activeTab, employeeId, monthFilter, fetchMirrorForMonth]);

  const fetchMirrorDetails = (id: string) => {
      const mirror = mirrorsList.find(m => m.id === id);
      if (mirror) {
          setSelectedMirror(mirror);
          setMirrorView('detail');
      }
  };

  const handleConfirmMirror = async () => {
      if (!selectedMirror) return;
      alert('Funcionalidade de confirmação será implementada em breve.');
  };
  
  const handleDownloadPdf = () => {
      alert('Download PDF em breve');
  };

  const handleDownloadExcel = () => {
      alert('Download Excel em breve');
  };

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
      
      {/* Header Mobile - Only show on Ponto Tab or Mirror List View */}
      {(activeTab !== 'espelho' || mirrorView === 'list') && (
        <header className="bg-[#1E40AF] text-white p-6 rounded-b-[2rem] shadow-lg relative overflow-hidden transition-all duration-300">
            <div className="relative z-10 flex justify-between items-start">
            <div>
                <p className="text-primary-foreground/80 text-sm">Olá, João Silva</p>
                <h1 className="text-2xl font-bold mt-1">
                    {activeTab === 'ponto' ? 'Bom trabalho! 👋' : 'Meus Espelhos'}
                </h1>
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20">
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
                    <div className="w-full h-32 bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer border-2 border-dashed border-slate-300 hover:border-primary transition-colors">
                    <div className="absolute inset-0 bg-slate-200/50 flex items-center justify-center">
                        <span className="text-xs text-slate-500 font-medium">Mapa / Geofence</span>
                    </div>
                    <div className="absolute inset-0 opacity-20 bg-slate-300" />
                    </div>
                    
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
                    <Button variant="link" size="sm" className="text-[#1E40AF]">Ver completo</Button>
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
                            </div>
                        </div>
                        <Badge variant={item.variant === 'success' ? 'default' : 'secondary'} className={item.variant === 'success' ? 'bg-green-100 text-green-700' : ''}>
                            {item.status}
                        </Badge>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </>
        )}

        {activeTab === 'espelho' && mirrorView === 'list' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Filter */}
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <input 
                        type="month" 
                        className="flex-1 bg-transparent text-sm outline-none"
                        value={monthFilter}
                        onChange={(e) => setMonthFilter(e.target.value)}
                    />
                </div>

                {loadingMirror ? (
                    <div className="text-center py-8">Carregando espelhos...</div>
                ) : mirrorsList.length > 0 ? (
                    mirrorsList.filter(m => m.startDate.startsWith(monthFilter)).map((mirror) => (
                        <Card key={mirror.id} className="overflow-hidden hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg capitalize">
                                            {format(new Date(mirror.startDate), 'MMMM / yyyy', { locale: ptBR })}
                                        </h3>
                                        <p className="text-xs text-muted-foreground">Período de {format(new Date(mirror.startDate), 'dd')} a {format(new Date(mirror.endDate), 'dd')}</p>
                                    </div>
                                    <Badge className={mirror.status === 'APROVADO' ? 'bg-[#16A34A]' : mirror.status === 'REPROVADO' ? 'bg-red-600' : 'bg-yellow-600'}>
                                        {mirror.status === 'EM_CONFERENCIA' ? 'Em Conferência' : mirror.status}
                                    </Badge>
                                </div>
                                
                                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                                    <Clock className="h-4 w-4" />
                                    <span>Total horas: <strong>{Number(mirror.workedHours).toFixed(2)}h</strong></span>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <Button variant="outline" size="sm" className="w-full text-[#1E40AF] border-[#1E40AF] hover:bg-blue-50" onClick={() => fetchMirrorDetails(mirror.id)}>
                                        <Eye className="mr-2 h-4 w-4" /> Visualizar
                                    </Button>
                                    {mirror.status === 'APROVADO' ? (
                                        <Button size="sm" className="w-full bg-[#1E40AF] hover:bg-blue-900" onClick={() => { setSelectedMirror(mirror); setShowDownloadSheet(true); }}>
                                            <Download className="mr-2 h-4 w-4" /> Baixar PDF
                                        </Button>
                                    ) : (
                                        <Button size="sm" disabled className="w-full opacity-50 cursor-not-allowed">
                                            <Download className="mr-2 h-4 w-4" /> Baixar PDF
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="text-center py-12 text-muted-foreground">
                        <FileText className="h-12 w-12 mx-auto mb-2 opacity-20" />
                        <p>Nenhum espelho encontrado.</p>
                    </div>
                )}
            </div>
        )}

        {activeTab === 'espelho' && mirrorView === 'detail' && selectedMirror && (
            <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                {/* Fixed Header Detail */}
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm sticky top-0 z-30 border-b">
                    <Button variant="ghost" size="icon" onClick={() => setMirrorView('list')}>
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <span className="font-bold">Espelho de Ponto</span>
                    <Button variant="ghost" size="icon" onClick={() => setShowDownloadSheet(true)} disabled={selectedMirror.status !== 'APROVADO'}>
                        <Download className="h-5 w-5" />
                    </Button>
                </div>

                {/* Employee Card */}
                <Card>
                    <CardContent className="p-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Colaborador</span>
                            <span className="font-medium">{selectedMirror.employee.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Matrícula</span>
                            <span className="font-medium">{selectedMirror.employee.matricula || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Cargo</span>
                            <span className="font-medium">{selectedMirror.employee.position}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Escala</span>
                            <span className="font-medium">{selectedMirror.employee.schedule?.name || 'Padrão'}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-3">
                     <div className="bg-white p-3 rounded-lg border shadow-sm text-center">
                        <p className="text-xs text-muted-foreground uppercase">Trabalhadas</p>
                        <p className="text-xl font-bold text-green-700">{Number(selectedMirror.workedHours).toFixed(2)}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm text-center">
                        <p className="text-xs text-muted-foreground uppercase">Extras</p>
                        <p className="text-xl font-bold text-orange-700">{Number(selectedMirror.overtimeHours).toFixed(2)}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm text-center">
                        <p className="text-xs text-muted-foreground uppercase">Faltas</p>
                        <p className="text-xl font-bold text-red-700">{Number(selectedMirror.absenceHours).toFixed(2)}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm text-center">
                        <p className="text-xs text-muted-foreground uppercase">Atrasos</p>
                        <p className="text-xl font-bold text-yellow-700">{Number(selectedMirror.lateHours).toFixed(2)}</p>
                    </div>
                </div>

                {/* Horizontal Scroll Table */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Jornada Detalhada</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">Data</TableHead>
                                    <TableHead>Ent</TableHead>
                                    <TableHead>Sai</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {selectedMirror.dailyDetails && selectedMirror.dailyDetails.map((day: any, i: number) => (
                                    <TableRow key={i}>
                                        <TableCell className="text-xs">{format(new Date(day.date), 'dd/MM')}</TableCell>
                                        <TableCell className="text-xs">{day.entry}</TableCell>
                                        <TableCell className="text-xs">{day.exit}</TableCell>
                                        <TableCell className="text-xs font-bold">{day.total}</TableCell>
                                        <TableCell className="text-xs">
                                            <Badge variant="outline" className={`text-[10px] px-1 ${day.statusColor === 'red' ? 'text-red-600 border-red-200' : 'text-gray-600'}`}>
                                                {day.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                    {selectedMirror.status === 'EM_CONFERENCIA' ? (
                        <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg shadow-lg" onClick={handleConfirmMirror}>
                            <CheckCircle className="mr-2 h-5 w-5" /> Confirmar Espelho
                        </Button>
                    ) : (
                        <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center justify-center gap-2 border border-green-200">
                            <CheckCircle className="h-5 w-5" />
                            <span className="font-bold">Espelho Aprovado</span>
                        </div>
                    )}
                </div>
            </div>
        )}
      </main>

      {/* Download Modal / Sheet Replacement */}
      {showDownloadSheet && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center sm:items-center p-4">
              <div className="bg-white w-full max-w-sm rounded-t-xl sm:rounded-xl p-6 space-y-4 animate-in slide-in-from-bottom-10">
                  <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg">Baixar Espelho</h3>
                      <Button variant="ghost" size="sm" onClick={() => setShowDownloadSheet(false)}><X className="h-4 w-4" /></Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div 
                          className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center gap-2 hover:bg-slate-50 ${downloadType === 'pdf' ? 'border-blue-600 bg-blue-50' : ''}`}
                          onClick={() => setDownloadType('pdf')}
                      >
                          <FileText className="h-8 w-8 text-red-500" />
                          <span className="text-sm font-medium">PDF (Assinatura)</span>
                      </div>
                      <div 
                          className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center gap-2 hover:bg-slate-50 ${downloadType === 'excel' ? 'border-blue-600 bg-blue-50' : ''}`}
                          onClick={() => setDownloadType('excel')}
                      >
                          <FileSpreadsheet className="h-8 w-8 text-green-600" />
                          <span className="text-sm font-medium">Excel (Conferência)</span>
                      </div>
                  </div>
                  <Button className="w-full h-12" onClick={() => {
                      if (downloadType === 'pdf') handleDownloadPdf();
                      else handleDownloadExcel();
                      setShowDownloadSheet(false);
                  }}>
                      Baixar Arquivo
                  </Button>
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
