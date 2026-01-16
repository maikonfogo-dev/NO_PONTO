'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Moon, AlertTriangle } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface SchedulesData {
    kpis: {
        totalSchedules: number;
        employeesWithSchedule: number;
        employeesWithoutSchedule: number;
        employeesOnNightShift: number;
    };
    schedules: {
        id: string;
        name: string;
        time: string;
        employeesCount: number;
        isNightShift: boolean;
    }[];
    employeesWithoutScheduleList: {
        id: string;
        name: string;
        position: string;
    }[];
}

export default function EscalasPage() {
    const [data, setData] = useState<SchedulesData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:4000/reports/schedules');
                if (!res.ok) throw new Error('Failed to fetch schedules data');
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="p-8 text-center">Carregando dados de escalas...</div>;
    }

    if (!data) {
        return <div className="p-8 text-center text-red-500">Erro ao carregar dados.</div>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Escalas & Turnos</h1>
            <p className="text-muted-foreground">Monitoramento de cumprimento de escalas e distribuição de turnos.</p>

            {/* KPIs */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Escalas</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{data.kpis.totalSchedules}</div>
                        <p className="text-xs text-muted-foreground">Tipos de horário configurados</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Colaboradores com Escala</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{data.kpis.employeesWithSchedule}</div>
                        <p className="text-xs text-muted-foreground">Alocados em horários</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-amber-600">Sem Escala Definida</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-amber-600">{data.kpis.employeesWithoutSchedule}</div>
                        <p className="text-xs text-amber-600/80">Necessitam configuração</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-indigo-600">Turno Noturno</CardTitle>
                        <Moon className="h-4 w-4 text-indigo-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-indigo-600">{data.kpis.employeesOnNightShift}</div>
                        <p className="text-xs text-indigo-600/80">Colaboradores em horário noturno</p>
                    </CardContent>
                </Card>
            </div>

            {/* Schedules Table */}
            <div className="grid gap-6 md:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Escalas Configuradas</CardTitle>
                        <CardDescription>Distribuição de colaboradores por horário.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nome da Escala</TableHead>
                                    <TableHead>Horário</TableHead>
                                    <TableHead>Colaboradores</TableHead>
                                    <TableHead>Tipo</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.schedules.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center">Nenhuma escala cadastrada.</TableCell>
                                    </TableRow>
                                ) : (
                                    data.schedules.map((schedule) => (
                                        <TableRow key={schedule.id}>
                                            <TableCell className="font-medium">{schedule.name}</TableCell>
                                            <TableCell>{schedule.time}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary">{schedule.employeesCount}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                {schedule.isNightShift ? (
                                                    <Badge className="bg-indigo-600 hover:bg-indigo-700">Noturno</Badge>
                                                ) : (
                                                    <Badge variant="outline">Diurno</Badge>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Employees Without Schedule Warning */}
                {data.employeesWithoutScheduleList.length > 0 && (
                    <Card className="border-amber-200 bg-amber-50">
                        <CardHeader>
                            <CardTitle className="text-amber-800">Colaboradores sem Escala ({data.employeesWithoutScheduleList.length})</CardTitle>
                            <CardDescription className="text-amber-700">
                                Estes colaboradores não terão cálculo de horas extras ou atrasos correto.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Cargo</TableHead>
                                        <TableHead className="text-right">Ação</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.employeesWithoutScheduleList.map((employee) => (
                                        <TableRow key={employee.id}>
                                            <TableCell className="font-medium">{employee.name}</TableCell>
                                            <TableCell>{employee.position}</TableCell>
                                            <TableCell className="text-right">
                                                <Link href={`/admin/colaboradores/${employee.id}`}>
                                                    <Button variant="outline" size="sm" className="border-amber-300 hover:bg-amber-100">
                                                        Configurar
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
