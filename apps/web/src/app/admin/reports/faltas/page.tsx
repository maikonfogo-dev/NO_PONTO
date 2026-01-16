"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, CalendarX, FileWarning } from "lucide-react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Employee {
  id: string;
  name: string;
  position: string;
}

interface MirrorDay {
  date: string;
  workedHours: string;
  expectedHours: string;
  balance: string;
  status: string;
  punches: any[];
}

interface MirrorReport {
  employee: Employee;
  period: { month: number; year: number };
  days: MirrorDay[];
}

export default function AtrasosFaltasPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1));
  const [year, setYear] = useState<string>(String(new Date().getFullYear()));
  const [reportData, setReportData] = useState<MirrorReport | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = useCallback(async () => {
    try {
      const res = await api.get('/reports/employees');
      const data = res.data;
      setEmployees(data);
      if (data.length > 0) setSelectedEmployee(data[0].id);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  }, []);

  const fetchReport = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get('/reports/espelho', {
          params: { employeeId: selectedEmployee, month, year }
      });
      const data = res.data;
      setReportData(data);
    } catch (error) {
      console.error("Failed to fetch report", error);
    } finally {
      setLoading(false);
    }
  }, [selectedEmployee, month, year]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  useEffect(() => {
    if (selectedEmployee) {
      fetchReport();
    }
  }, [selectedEmployee, month, year, fetchReport]);

  const summary = useMemo(() => {
    if (!reportData) return { absences: 0, delays: 0, delayMinutes: 0 };

    let absences = 0;
    let delays = 0;
    let delayMinutes = 0;

    reportData.days.forEach(day => {
        if (day.status === 'FALTA') {
            absences++;
        }
        
        const balance = parseFloat(day.balance);
        if (balance < 0 && day.status !== 'FALTA') {
            delays++;
            delayMinutes += Math.abs(balance * 60);
        }
    });

    return {
        absences,
        delays,
        delayMinutes: Math.round(delayMinutes)
    };
  }, [reportData]);

  const formatHours = (hours: number) => {
    const h = Math.floor(Math.abs(hours));
    const m = Math.round((Math.abs(hours) - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Filtros de Pesquisa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Colaborador</label>
              <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((emp) => (
                    <SelectItem key={emp.id} value={emp.id}>{emp.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Mês</label>
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger>
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {new Date(0, i).toLocaleString('pt-BR', { month: 'long' })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ano</label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={fetchReport} disabled={loading}>
                {loading ? "Carregando..." : "Atualizar Relatório"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {reportData && (
        <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Faltas</CardTitle>
                        <CalendarX className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">{summary.absences}</div>
                        <p className="text-xs text-muted-foreground">Dias de ausência integral</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ocorrências de Atraso</CardTitle>
                        <Clock className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-orange-600">{summary.delays}</div>
                        <p className="text-xs text-muted-foreground">Dias com registro de atraso</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-yellow-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Minutos de Atraso (Total)</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-600">{summary.delayMinutes} min</div>
                        <p className="text-xs text-muted-foreground">Tempo total perdido</p>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Detalhamento de Ocorrências</CardTitle>
                    <CardDescription>Lista de dias com faltas ou atrasos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Data</TableHead>
                                <TableHead>Dia da Semana</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Detalhes</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {reportData.days.filter(d => d.status === 'FALTA' || parseFloat(d.balance) < 0).map((day, index) => {
                                const balance = parseFloat(day.balance);
                                const date = parseISO(day.date);
                                
                                let type = "";
                                let details = "";
                                let badgeVariant: "destructive" | "warning" | "default" | "secondary" | "outline" | null = null;

                                if (day.status === 'FALTA') {
                                    type = "FALTA INTEGRAL";
                                    details = "Não houve registro de ponto";
                                    badgeVariant = "destructive";
                                } else {
                                    type = "ATRASO / SAÍDA ANTECIPADA";
                                    details = `Saldo negativo de ${formatHours(balance)}`;
                                    badgeVariant = "secondary"; // Changed from warning to secondary as warning is not standard in shadcn/ui badge
                                }

                                return (
                                    <TableRow key={index}>
                                        <TableCell>{format(date, 'dd/MM/yyyy')}</TableCell>
                                        <TableCell className="capitalize">{format(date, 'EEEE', { locale: ptBR })}</TableCell>
                                        <TableCell className="font-medium">{type}</TableCell>
                                        <TableCell>{details}</TableCell>
                                        <TableCell>
                                            <Badge variant={badgeVariant as any}>
                                                {day.status === 'FALTA' ? 'Injustificada' : 'A descontar'}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {reportData.days.filter(d => d.status === 'FALTA' || parseFloat(d.balance) < 0).length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-muted-foreground h-24">
                                        Nenhuma falta ou atraso registrado neste período.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
      )}
    </div>
  );
}
