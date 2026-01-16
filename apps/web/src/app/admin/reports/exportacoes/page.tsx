'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileSpreadsheet, FileText, Calendar } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/api";

export default function ExportacoesPage() {
    const [reportType, setReportType] = useState('espelho');
    const [format, setFormat] = useState('pdf');
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [loading, setLoading] = useState(false);
    const [employeeId, setEmployeeId] = useState('');

    const handleExport = async () => {
        setLoading(true);
        try {
            if (reportType === 'espelho') {
                if (!employeeId) {
                    toast.error("Por favor, informe o ID do colaborador para o Espelho de Ponto.");
                    setLoading(false);
                    return;
                }
                
                // Trigger PDF download
                // We use window.open or fetch blob for download
                // Using fetch to handle errors better
                const response = await api.get(`/reports/espelho/pdf`, {
                    params: {
                        employeeId,
                        month,
                        year
                    },
                    responseType: 'blob'
                });
                
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `espelho-${employeeId}-${month}-${year}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();
                
                toast.success("Download iniciado com sucesso!");
            } else {
                toast.info("Exportação para este relatório será implementada em breve.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao exportar relatório.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Exportações & Automação</h2>
                    <p className="text-muted-foreground">
                        Central de extração de dados e agendamento de relatórios.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Nova Exportação</CardTitle>
                        <CardDescription>Configure e baixe relatórios sob demanda.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Tipo de Relatório</Label>
                            <Select value={reportType} onValueChange={setReportType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="espelho">Espelho de Ponto (Oficial)</SelectItem>
                                    <SelectItem value="jornada">Jornada & Horas</SelectItem>
                                    <SelectItem value="financeiro">Financeiro (SaaS)</SelectItem>
                                    <SelectItem value="auditoria">Logs de Auditoria</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Mês</Label>
                                <Select value={month.toString()} onValueChange={(v) => setMonth(parseInt(v))}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                                                {new Date(0, i).toLocaleString('pt-BR', { month: 'long' })}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Ano</Label>
                                <Input 
                                    type="number" 
                                    value={year} 
                                    onChange={(e) => setYear(parseInt(e.target.value))} 
                                />
                            </div>
                        </div>

                        {reportType === 'espelho' && (
                            <div className="space-y-2">
                                <Label>ID do Colaborador</Label>
                                <Input 
                                    placeholder="Ex: cm..." 
                                    value={employeeId}
                                    onChange={(e) => setEmployeeId(e.target.value)}
                                />
                                <p className="text-xs text-muted-foreground">Obrigatório para Espelho de Ponto Individual.</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label>Formato</Label>
                            <div className="flex gap-2">
                                <Button 
                                    variant={format === 'pdf' ? 'default' : 'outline'} 
                                    onClick={() => setFormat('pdf')}
                                    className="flex-1"
                                >
                                    <FileText className="mr-2 h-4 w-4" /> PDF
                                </Button>
                                <Button 
                                    variant={format === 'excel' ? 'default' : 'outline'} 
                                    onClick={() => setFormat('excel')}
                                    className="flex-1"
                                >
                                    <FileSpreadsheet className="mr-2 h-4 w-4" /> Excel
                                </Button>
                            </div>
                        </div>

                        <Button className="w-full mt-4" onClick={handleExport} disabled={loading}>
                            {loading ? "Gerando..." : (
                                <>
                                    <Download className="mr-2 h-4 w-4" /> Exportar Arquivo
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Exportações Recentes</CardTitle>
                        <CardDescription>Histórico dos últimos arquivos gerados.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center py-10 text-muted-foreground">
                            <Calendar className="h-10 w-10 mx-auto mb-3 opacity-20" />
                            <p>Nenhum histórico disponível.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
