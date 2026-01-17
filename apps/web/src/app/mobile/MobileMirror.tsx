"use client";

import React, { useState, useCallback, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  Calendar, 
  Clock, 
  Eye, 
  Download, 
  FileText, 
  ChevronLeft, 
  CheckCircle, 
  FileSpreadsheet, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { api } from "@/lib/api";

interface MobileMirrorProps {
  employeeId: string;
}

export default function MobileMirror({ employeeId }: MobileMirrorProps) {
  const [mirrorView, setMirrorView] = useState<'list' | 'detail'>('list');
  const [mirrorsList, setMirrorsList] = useState<any[]>([]);
  const [selectedMirror, setSelectedMirror] = useState<any>(null);
  const [loadingMirror, setLoadingMirror] = useState(false);
  const [showDownloadSheet, setShowDownloadSheet] = useState(false);
  const [downloadType, setDownloadType] = useState<'pdf' | 'excel'>('pdf');
  const [monthFilter, setMonthFilter] = useState<string>(new Date().toISOString().slice(0, 7));
  const [lastFetchedMonth, setLastFetchedMonth] = useState<string | null>(null);

  const fetchMirrorForMonth = useCallback(async (monthStr: string) => {
    if (!employeeId) return;
    setLoadingMirror(true);
    try {
      const [year, month] = monthStr.split('-');
      const res = await api.get('/ponto/espelho', {
          params: { employeeId, month, year }
      });
      const data = res.data;
      
      const totalWorked = data.days.reduce((acc: number, day: any) => acc + parseFloat(day.workedHours || 0), 0);
      const totalBalance = data.days.reduce((acc: number, day: any) => acc + parseFloat(day.balance || 0), 0);
      
      const mirrorObj = {
          id: `${year}-${month}`,
          startDate: `${year}-${month}-01`,
          endDate: `${year}-${month}-${new Date(Number(year), Number(month), 0).getDate()}`,
          status: 'EM_CONFERENCIA',
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
      setLastFetchedMonth(monthStr);
    } catch (error) {
      console.error('Failed to fetch mirrors list', error);
      setMirrorsList([]);
    } finally {
      setLoadingMirror(false);
    }
  }, [employeeId]);

  useEffect(() => {
    if (employeeId && monthFilter !== lastFetchedMonth) {
        fetchMirrorForMonth(monthFilter);
    }
  }, [employeeId, monthFilter, fetchMirrorForMonth, lastFetchedMonth]);

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

  return (
    <>
        {mirrorView === 'list' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Header Mobile - Mirror List View */}
                <header className="bg-[#1E40AF] text-white p-6 rounded-b-[2rem] shadow-lg relative overflow-hidden transition-all duration-300 -mx-4 -mt-4 mb-4">
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-primary-foreground/80 text-sm">
                                Área do Colaborador
                            </p>
                            <h1 className="text-2xl font-bold mt-1">
                                Meus Espelhos
                            </h1>
                        </div>
                    </div>
                </header>

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

        {mirrorView === 'detail' && selectedMirror && (
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
    </>
  );
}
