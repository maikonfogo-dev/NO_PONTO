"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Clock, Calendar as CalendarIcon, Download, Search } from "lucide-react";
import { api } from "@/lib/api";
import { format, parseISO, getWeek, startOfWeek, endOfWeek, isSameDay, getMonth, getYear } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
  Cell
} from "recharts";

interface Employee {
  id: string;
  name: string;
  cpf: string;
  position: string;
}

interface DayReport {
  date: string; // ISO string
  entry: string;
  lunchOut: string;
  lunchIn: string;
  exit: string;
  total: string; // HH:mm
  status: string;
  statusColor: string;
}

interface MirrorReport {
  id: string;
  employee: Employee;
  startDate: string;
  endDate: string;
  expectedHours: number;
  workedHours: number;
  overtimeHours: number;
  lateHours: number;
  absenceHours: number;
  status: string;
  dailyDetails: DayReport[];
}

export default function JornadaHorasPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1));
  const [year, setYear] = useState<string>(String(new Date().getFullYear()));
  const [reportData, setReportData] = useState<MirrorReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'charts'>('daily');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/colaboradores");
      setEmployees(res.data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  };

  const fetchReport = async () => {
    if (!selectedEmployee) return;
    setLoading(true);
    try {
      // 1. Generate/Find Mirror
      const dateStr = `${year}-${month.padStart(2, '0')}-15`; // Use mid-month to be safe
      const generateRes = await api.post("/reports/generate", {
        employeeId: selectedEmployee,
        date: dateStr
      });

      const mirrorId = generateRes.data.id;

      // 2. Get Details
      const detailsRes = await api.get(`/reports/${mirrorId}`);
      setReportData(detailsRes.data);

    } catch (error) {
      console.error("Failed to fetch report", error);
      setReportData(null);
    } finally {
      setLoading(false);
    }
  };

  const timeToDecimal = (timeStr: string) => {
    if (!timeStr || timeStr === '-') return 0;
    const [h, m] = timeStr.split(':').map(Number);
    return h + (m / 60);
  };

  const weeklyData = useMemo(() => {
    if (!reportData) return [];

    const weeks: Record<number, { 
        weekNum: number; 
        startDate: Date; 
        endDate: Date; 
        worked: number; 
        expected: number; 
        overtime: number;
        balance: number;
    }> = {};

    reportData.dailyDetails.forEach(day => {
        const date = parseISO(day.date as unknown as string);
        const weekNum = getWeek(date, { locale: ptBR });
        
        if (!weeks[weekNum]) {
            weeks[weekNum] = {
                weekNum,
                startDate: startOfWeek(date, { locale: ptBR }),
                endDate: endOfWeek(date, { locale: ptBR }),
                worked: 0,
                expected: 0, // Need daily expected logic or approximate
                overtime: 0,
                balance: 0
            };
        }

        const workedDec = timeToDecimal(day.total);
        // Assuming 8h expected for weekdays, 0 for weekends (simplified)
        // Ideally backend should provide expected per day
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const expectedDec = isWeekend ? 0 : 8; 

        weeks[weekNum].worked += workedDec;
        weeks[weekNum].expected += expectedDec;
        
        if (workedDec > expectedDec) {
            weeks[weekNum].overtime += (workedDec - expectedDec);
        }
        weeks[weekNum].balance += (workedDec - expectedDec);
    });

    return Object.values(weeks).sort((a, b) => a.weekNum - b.weekNum);
  }, [reportData]);

  const chartData = useMemo(() => {
      if (!reportData) return [];
      return reportData.dailyDetails.map(d => ({
          date: format(parseISO(d.date as unknown as string), 'dd/MM'),
          worked: timeToDecimal(d.total),
          expected: 8, // Simplified
      }));
  }, [reportData]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Jornada & Horas</h2>
          <p className="text-muted-foreground">
            Análise detalhada da jornada de trabalho, horas extras e banco de horas.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Colaborador</label>
                    <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                            {employees.map(emp => (
                                <SelectItem key={emp.id} value={emp.id}>{emp.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Mês</label>
                    <Select value={month} onValueChange={setMonth}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                <SelectItem key={m} value={String(m)}>{format(new Date(2024, m-1, 1), 'MMMM', { locale: ptBR })}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Ano</label>
                    <Select value={year} onValueChange={setYear}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button onClick={fetchReport} disabled={loading || !selectedEmployee}>
                    {loading ? "Carregando..." : "Gerar Relatório"}
                </Button>
            </div>
        </CardContent>
      </Card>

      {reportData && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Horas Trabalhadas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{reportData.workedHours.toFixed(2)}h</div>
                        <p className="text-xs text-muted-foreground">de {reportData.expectedHours.toFixed(2)}h previstas</p>
                        <Progress value={(reportData.workedHours / reportData.expectedHours) * 100} className="mt-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Horas Extras</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">{reportData.overtimeHours.toFixed(2)}h</div>
                        <p className="text-xs text-muted-foreground">Acumuladas no período</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Atrasos / Saídas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-600">{reportData.lateHours.toFixed(2)}h</div>
                        <p className="text-xs text-muted-foreground">Tolerância não incluída</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Faltas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">{reportData.absenceHours.toFixed(2)}h</div>
                        <p className="text-xs text-muted-foreground">Horas não trabalhadas</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs value={activeTab} onValueChange={(v: any) => setActiveTab(v)} className="space-y-4">
                <TabsList>
                    <TabsTrigger value="daily">Visão Diária</TabsTrigger>
                    <TabsTrigger value="weekly">Visão Semanal</TabsTrigger>
                    <TabsTrigger value="charts">Gráficos e Análises</TabsTrigger>
                </TabsList>

                <TabsContent value="daily">
                    <Card>
                        <CardHeader>
                            <CardTitle>Detalhamento Diário</CardTitle>
                            <CardDescription>Entradas, saídas e totalização por dia.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Data</TableHead>
                                        <TableHead>Entrada</TableHead>
                                        <TableHead>Almoço (S)</TableHead>
                                        <TableHead>Almoço (V)</TableHead>
                                        <TableHead>Saída</TableHead>
                                        <TableHead>Total</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {reportData.dailyDetails.map((day, i) => (
                                        <TableRow key={i}>
                                            <TableCell className="font-medium">{format(parseISO(day.date as unknown as string), 'dd/MM/yyyy (EEE)', { locale: ptBR })}</TableCell>
                                            <TableCell>{day.entry}</TableCell>
                                            <TableCell>{day.lunchOut}</TableCell>
                                            <TableCell>{day.lunchIn}</TableCell>
                                            <TableCell>{day.exit}</TableCell>
                                            <TableCell className="font-bold">{day.total}</TableCell>
                                            <TableCell>
                                                <Badge variant={day.statusColor === 'red' ? 'destructive' : day.statusColor === 'yellow' ? 'secondary' : 'default'} className={day.statusColor === 'green' ? 'bg-green-600' : ''}>
                                                    {day.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="weekly">
                    <Card>
                        <CardHeader>
                            <CardTitle>Consolidado Semanal</CardTitle>
                            <CardDescription>Acompanhamento de horas por semana (Limite 44h).</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Semana</TableHead>
                                        <TableHead>Período</TableHead>
                                        <TableHead>Trabalhado</TableHead>
                                        <TableHead>Previsto</TableHead>
                                        <TableHead>Saldo</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {weeklyData.map((week, i) => (
                                        <TableRow key={i}>
                                            <TableCell>Semana {week.weekNum}</TableCell>
                                            <TableCell>{format(week.startDate, 'dd/MM')} - {format(week.endDate, 'dd/MM')}</TableCell>
                                            <TableCell>{week.worked.toFixed(2)}h</TableCell>
                                            <TableCell>{week.expected.toFixed(2)}h</TableCell>
                                            <TableCell className={week.balance >= 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                                                {week.balance > 0 ? '+' : ''}{week.balance.toFixed(2)}h
                                            </TableCell>
                                            <TableCell>
                                                {week.worked > 44 ? (
                                                    <Badge variant="destructive">Estouro (&gt;44h)</Badge>
                                                ) : (
                                                    <Badge variant="outline">Normal</Badge>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="charts">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Evolução Diária</CardTitle>
                                <CardDescription>Horas trabalhadas por dia no mês.</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="worked" name="Trabalhado" fill="#16a34a" />
                                        <ReferenceLine y={8} stroke="red" strokeDasharray="3 3" label="Meta (8h)" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Saldo Acumulado</CardTitle>
                                <CardDescription>Variação do banco de horas.</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="worked" stroke="#1e40af" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
          </>
      )}
    </div>
  );
}

function Progress({ value, className }: { value: number, className?: string }) {
    return (
        <div className={`h-2 w-full bg-secondary rounded-full overflow-hidden ${className}`}>
            <div className="h-full bg-primary transition-all" style={{ width: `${Math.min(value, 100)}%` }} />
        </div>
    )
}
