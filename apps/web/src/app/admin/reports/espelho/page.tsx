"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, FileDown, FileText, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { api } from "@/lib/api";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Employee {
  id: string;
  name: string;
  cpf: string;
}

interface DayRecord {
  date: string;
  punches: any[];
  workedHours: string;
  expectedHours: string;
  balance: string;
  status: string;
}

interface MirrorData {
  employee: any;
  period: { month: number; year: number };
  days: DayRecord[];
}

export default function EspelhoPontoPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1));
  const [year, setYear] = useState<string>(String(new Date().getFullYear()));
  const [data, setData] = useState<MirrorData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await api.get("/reports/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error loading employees", error);
    }
  };

  const fetchReport = async () => {
    if (!selectedEmployee) return;
    setLoading(true);
    try {
      const response = await api.get("/reports/espelho", {
        params: {
          employeeId: selectedEmployee,
          month,
          year
        }
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching report", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportPdf = async () => {
    if (!selectedEmployee) return;
    try {
        const response = await api.get("/reports/espelho/pdf", {
            params: {
                employeeId: selectedEmployee,
                month,
                year
            },
            responseType: 'blob'
        });
        
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `espelho_${selectedEmployee}_${month}_${year}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (error) {
        console.error("Error exporting PDF", error);
        alert("Erro ao gerar PDF. Verifique se o backend suporta esta funcionalidade.");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "OK":
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1"/> OK</span>;
      case "FALTA":
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1"/> Falta</span>;
      case "INCONSISTENTE":
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><AlertTriangle className="w-3 h-3 mr-1"/> Inconsistente</span>;
      default:
        return <span className="text-gray-500">{status}</span>;
    }
  };

  const formatPunches = (punches: any[]) => {
      if (!punches || punches.length === 0) return "-";
      return punches.map(p => format(new Date(p.timestamp), "HH:mm")).join(" • ");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Espelho de Ponto</h2>
          <p className="text-muted-foreground">
            Relatório oficial de jornada (CLT) com cálculo de horas e status.
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" onClick={handleExportPdf} disabled={!data}>
                <FileText className="mr-2 h-4 w-4" />
                Exportar PDF
            </Button>
            <Button variant="outline" disabled>
                <FileDown className="mr-2 h-4 w-4" />
                Exportar Excel
            </Button>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <Label>Colaborador</Label>
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
              <Label>Mês</Label>
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <SelectItem key={m} value={String(m)}>{m.toString().padStart(2, '0')}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Ano</Label>
              <Input 
                type="number" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
              />
            </div>

            <Button onClick={fetchReport} disabled={loading || !selectedEmployee}>
              {loading ? "Gerando..." : "Gerar Espelho"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {data && (
        <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Horas Trabalhadas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {data.days.reduce((acc, curr) => acc + parseFloat(curr.workedHours), 0).toFixed(2)}h
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Horas Esperadas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {data.days.reduce((acc, curr) => acc + parseFloat(curr.expectedHours), 0).toFixed(2)}h
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Saldo (Banco)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${
                            data.days.reduce((acc, curr) => acc + parseFloat(curr.balance), 0) >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {data.days.reduce((acc, curr) => acc + parseFloat(curr.balance), 0).toFixed(2)}h
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Inconsistências</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-600">
                            {data.days.filter(d => d.status === 'INCONSISTENTE').length}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Detalhamento Diário</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Data</TableHead>
                                <TableHead>Dia da Semana</TableHead>
                                <TableHead>Registros</TableHead>
                                <TableHead>Trabalhado</TableHead>
                                <TableHead>Previsto</TableHead>
                                <TableHead>Saldo</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.days.map((day) => (
                                <TableRow key={day.date}>
                                    <TableCell>{format(new Date(day.date), "dd/MM/yyyy")}</TableCell>
                                    <TableCell className="capitalize">{format(new Date(day.date), "EEEE", { locale: ptBR })}</TableCell>
                                    <TableCell>{formatPunches(day.punches)}</TableCell>
                                    <TableCell>{day.workedHours}h</TableCell>
                                    <TableCell>{day.expectedHours}h</TableCell>
                                    <TableCell className={parseFloat(day.balance) >= 0 ? "text-green-600" : "text-red-600"}>
                                        {day.balance}h
                                    </TableCell>
                                    <TableCell>{getStatusBadge(day.status)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
