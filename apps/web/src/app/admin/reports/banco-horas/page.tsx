"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Calculator, Clock, Calendar as CalendarIcon, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { format, parseISO, isSunday } from "date-fns";
import { ptBR } from "date-fns/locale";
import { api } from "@/lib/api";

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
  punches: { timestamp: string }[];
}

interface MirrorReport {
  employee: Employee;
  period: { month: number; year: number };
  days: MirrorDay[];
}

export default function BancoHorasPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1));
  const [year, setYear] = useState<string>(String(new Date().getFullYear()));
  const [reportData, setReportData] = useState<MirrorReport | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = useCallback(async () => {
    try {
      const res = await api.get('/reports/employees');
      setEmployees(res.data);
      if (res.data.length > 0) setSelectedEmployee(res.data[0].id);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  }, []);

  const fetchReport = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get(`/reports/espelho`, {
        params: { employeeId: selectedEmployee, month, year }
      });
      setReportData(res.data);
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

  const bankSummary = useMemo(() => {
    if (!reportData) return { credits: 0, debits: 0, balance: 0, extras50: 0, extras100: 0 };

    let credits = 0;
    let debits = 0;
    let extras50 = 0;
    let extras100 = 0;

    reportData.days.forEach(day => {
        const balance = parseFloat(day.balance);
        const date = parseISO(day.date);
        const isSun = isSunday(date);

        if (balance > 0) {
            credits += balance;
            if (isSun) {
                extras100 += balance;
            } else {
                extras50 += balance;
            }
        } else if (balance < 0) {
            debits += Math.abs(balance);
        }
    });

    return {
        credits: parseFloat(credits.toFixed(2)),
        debits: parseFloat(debits.toFixed(2)),
        balance: parseFloat((credits - debits).toFixed(2)),
        extras50: parseFloat(extras50.toFixed(2)),
        extras100: parseFloat(extras100.toFixed(2))
    };
  }, [reportData]);

  const formatHours = (hours: number) => {
    const h = Math.floor(Math.abs(hours));
    const m = Math.round((Math.abs(hours) - h) * 60);
    const sign = hours < 0 ? "-" : "";
    return `${sign}${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Saldo Atual</CardTitle>
                        <Calculator className={`h-4 w-4 ${bankSummary.balance >= 0 ? 'text-green-600' : 'text-red-600'}`} />
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${bankSummary.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatHours(bankSummary.balance)}
                        </div>
                        <p className="text-xs text-muted-foreground">Saldo acumulado do período</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Créditos (Extras)</CardTitle>
                        <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">
                            {formatHours(bankSummary.credits)}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            50%: {formatHours(bankSummary.extras50)} | 100%: {formatHours(bankSummary.extras100)}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Débitos (Faltas/Atrasos)</CardTitle>
                        <ArrowDownCircle className="h-4 w-4 text-orange-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-orange-600">
                            {formatHours(bankSummary.debits)}
                        </div>
                        <p className="text-xs text-muted-foreground">Horas devidas no período</p>
                    </CardContent>
                </Card>
                <Card className="bg-slate-50 border-dashed">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ações</CardTitle>
                        <Download className="h-4 w-4 text-slate-600" />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                       <Button variant="outline" size="sm" className="w-full justify-start">
                           <Download className="mr-2 h-4 w-4" /> Exportar Folha
                       </Button>
                       <Button variant="outline" size="sm" className="w-full justify-start">
                           <Download className="mr-2 h-4 w-4" /> Exportar Excel
                       </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Extrato de Banco de Horas</CardTitle>
                    <CardDescription>Detalhamento diário de créditos e débitos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Data</TableHead>
                                <TableHead>Dia da Semana</TableHead>
                                <TableHead>Entrada/Saída</TableHead>
                                <TableHead>Saldo do Dia</TableHead>
                                <TableHead>Tipo</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {reportData.days.filter(d => parseFloat(d.balance) !== 0).map((day, index) => {
                                const balance = parseFloat(day.balance);
                                const date = parseISO(day.date);
                                const isSun = isSunday(date);
                                
                                let type = "Normal";
                                if (balance > 0) {
                                    type = isSun ? "Extra 100%" : "Extra 50%";
                                } else {
                                    type = "Débito";
                                }

                                return (
                                    <TableRow key={index}>
                                        <TableCell>{format(date, 'dd/MM/yyyy')}</TableCell>
                                        <TableCell className="capitalize">{format(date, 'EEEE', { locale: ptBR })}</TableCell>
                                        <TableCell>
                                            {day.punches.map(p => format(parseISO(String(p.timestamp)), 'HH:mm')).join(' - ')}
                                        </TableCell>
                                        <TableCell className={balance > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                                            {formatHours(balance)}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={balance > 0 ? "default" : "destructive"}>
                                                {type}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {reportData.days.filter(d => parseFloat(d.balance) !== 0).length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-muted-foreground h-24">
                                        Nenhum registro de crédito ou débito neste período.
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
