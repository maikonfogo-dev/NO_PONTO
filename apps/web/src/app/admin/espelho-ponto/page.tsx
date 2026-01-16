"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
    Calendar, 
    User, 
    Clock, 
    AlertTriangle, 
    CheckCircle2, 
    Download, 
    Search,
    FileText
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Employee {
    id: string;
    name: string;
    cpf: string;
}

interface Punch {
    id: string;
    timestamp: string;
    type: string;
}

interface DailyReport {
    date: string;
    punches: Punch[];
    workedHours: string;
    expectedHours: string;
    balance: string;
    status: string;
}

interface MirrorData {
    employee: {
        name: string;
        cpf: string;
    };
    period: {
        month: number;
        year: number;
    };
    days: DailyReport[];
}

export default function EspelhoPontoPage() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("");
    const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1));
    const [year, setYear] = useState<string>(String(new Date().getFullYear()));
    const [mirrorData, setMirrorData] = useState<MirrorData | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const res = await fetch("http://localhost:4000/colaboradores");
            if (res.ok) {
                const data = await res.json();
                setEmployees(data);
            }
        } catch (error) {
            console.error("Failed to fetch employees", error);
        }
    };

    const fetchMirror = async () => {
        if (!selectedEmployeeId) return;
        
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:4000/ponto/espelho?employeeId=${selectedEmployeeId}&month=${month}&year=${year}`);
            if (res.ok) {
                const data = await res.json();
                setMirrorData(data);
            } else {
                console.error("Failed to fetch mirror");
                setMirrorData(null);
            }
        } catch (error) {
            console.error("Failed to fetch mirror", error);
            setMirrorData(null);
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (dateString: string) => {
        return format(new Date(dateString), "HH:mm");
    };

    const formatDate = (dateString: string) => {
        return format(new Date(dateString), "dd/MM/yyyy (EEEE)", { locale: ptBR });
    };

    const getStatusBadge = (status: string) => {
        if (status === 'OK') return <Badge className="bg-green-600">OK</Badge>;
        if (status === 'INCONSISTENTE') return <Badge variant="destructive">Inconsistente</Badge>;
        if (status === 'FALTA') return <Badge variant="destructive">Falta</Badge>;
        return <Badge variant="secondary">{status}</Badge>;
    };

    const months = [
        { value: "1", label: "Janeiro" },
        { value: "2", label: "Fevereiro" },
        { value: "3", label: "Março" },
        { value: "4", label: "Abril" },
        { value: "5", label: "Maio" },
        { value: "6", label: "Junho" },
        { value: "7", label: "Julho" },
        { value: "8", label: "Agosto" },
        { value: "9", label: "Setembro" },
        { value: "10", label: "Outubro" },
        { value: "11", label: "Novembro" },
        { value: "12", label: "Dezembro" },
    ];

    const years = ["2024", "2025", "2026"];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Espelho de Ponto</h1>
                    <p className="text-muted-foreground">Consulte e gerencie a jornada de trabalho dos colaboradores.</p>
                </div>
            </div>

            {/* Filters */}
            <Card>
                <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Colaborador</label>
                            <Select value={selectedEmployeeId} onValueChange={setSelectedEmployeeId}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione um colaborador" />
                                </SelectTrigger>
                                <SelectContent>
                                    {employees.map((emp) => (
                                        <SelectItem key={emp.id} value={emp.id}>
                                            {emp.name}
                                        </SelectItem>
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
                                    {months.map((m) => (
                                        <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
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
                                    {years.map((y) => (
                                        <SelectItem key={y} value={y}>{y}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button onClick={fetchMirror} disabled={!selectedEmployeeId || loading}>
                            {loading ? <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" /> : <Search className="mr-2 h-4 w-4" />}
                            Buscar Espelho
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Results */}
            {mirrorData && (
                <div className="space-y-6">
                    {/* Summary Cards */}
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Colaborador</CardTitle>
                                <User className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{mirrorData.employee.name}</div>
                                <p className="text-xs text-muted-foreground">CPF: {mirrorData.employee.cpf}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Período</CardTitle>
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{months.find(m => m.value === String(mirrorData.period.month))?.label} / {mirrorData.period.year}</div>
                                <p className="text-xs text-muted-foreground">Ciclo mensal padrão</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Saldo do Mês</CardTitle>
                                <Clock className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                {/* Calculating total balance on client side for now */}
                                <div className={`text-2xl font-bold ${mirrorData.days.reduce((acc, day) => acc + parseFloat(day.balance), 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {mirrorData.days.reduce((acc, day) => acc + parseFloat(day.balance), 0).toFixed(2)}h
                                </div>
                                <p className="text-xs text-muted-foreground">Horas excedentes/faltantes</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Detailed Table */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Detalhamento Diário</CardTitle>
                            <Button variant="outline" size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Exportar PDF
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Data</TableHead>
                                        <TableHead>Entrada 1</TableHead>
                                        <TableHead>Saída 1</TableHead>
                                        <TableHead>Entrada 2</TableHead>
                                        <TableHead>Saída 2</TableHead>
                                        <TableHead>Trabalhadas</TableHead>
                                        <TableHead>Previstas</TableHead>
                                        <TableHead>Saldo</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mirrorData.days.map((day, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium capitalize">{formatDate(day.date)}</TableCell>
                                            {/* Mapping up to 4 punches (2 pairs) for simplicity in this view */}
                                            <TableCell>{day.punches[0] ? formatTime(day.punches[0].timestamp) : '-'}</TableCell>
                                            <TableCell>{day.punches[1] ? formatTime(day.punches[1].timestamp) : '-'}</TableCell>
                                            <TableCell>{day.punches[2] ? formatTime(day.punches[2].timestamp) : '-'}</TableCell>
                                            <TableCell>{day.punches[3] ? formatTime(day.punches[3].timestamp) : '-'}</TableCell>
                                            
                                            <TableCell>{day.workedHours}</TableCell>
                                            <TableCell>{day.expectedHours}</TableCell>
                                            <TableCell className={parseFloat(day.balance) < 0 ? "text-red-600" : "text-green-600"}>
                                                {parseFloat(day.balance) > 0 ? '+' : ''}{day.balance}
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
