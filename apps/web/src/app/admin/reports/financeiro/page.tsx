'use client';

import { useState, useEffect, useCallback } from 'react';
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Users, Briefcase, AlertTriangle } from "lucide-react";

interface FinancialData {
    kpis: {
        activeClients: number;
        billableEmployees: number;
        mrr: number;
        overdueAmount: number;
        overdueCount: number;
    };
    clients: {
        id: string;
        name: string;
        plan: string;
        value: number;
        status: string;
        overdueInvoices: number;
    }[];
}

interface ClientOption {
    id: string;
    name: string;
}

export default function FinanceiroPage() {
    const [data, setData] = useState<FinancialData | null>(null);
    const [loading, setLoading] = useState(true);
    const [clients, setClients] = useState<ClientOption[]>([]);
    const [selectedClient, setSelectedClient] = useState<string>("GLOBAL");
    const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
          try {
            const raw = localStorage.getItem("user_data");
            if (raw) {
              const user = JSON.parse(raw);
              setIsSuperAdmin(user.role === "SUPER_ADMIN");
            }
          } catch (err) {
            console.error("Failed to parse user_data", err);
          }
        }
    }, []);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const params: any = {};
            if (isSuperAdmin && selectedClient !== "GLOBAL") {
                params.clientId = selectedClient;
            }
            const res = await api.get('/reports/financial', { params });
            setData(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [isSuperAdmin, selectedClient]);

    const fetchClients = useCallback(async () => {
        if (!isSuperAdmin) return;
        try {
          const res = await api.get('/clientes', {
            params: {
              status: 'ATIVO',
            },
          });
          const list = Array.isArray(res.data)
            ? res.data.map((c: any) => ({ id: c.id, name: c.name }))
            : [];
          setClients(list);
        } catch (error) {
          console.error("Failed to fetch clients for selector", error);
        }
    }, [isSuperAdmin]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        fetchClients();
    }, [fetchClients]);

    if (loading) {
        return <div className="p-8 text-center">Carregando dados financeiros...</div>;
    }

    if (!data) {
        return <div className="p-8 text-center text-red-500">Erro ao carregar dados.</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Financeiro (SaaS)</h1>
                    <p className="text-muted-foreground">Visão geral de faturamento, receita recorrente e inadimplência.</p>
                </div>

                {isSuperAdmin && (
                    <div className="flex items-center gap-2 bg-white p-3 rounded-lg border shadow-sm">
                        <span className="text-sm font-medium text-slate-600">Empresa:</span>
                        <Select value={selectedClient} onValueChange={setSelectedClient}>
                            <SelectTrigger className="w-[260px]">
                                <SelectValue placeholder="Todas as empresas" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="GLOBAL">Todas as empresas</SelectItem>
                                {clients.map((client) => (
                                    <SelectItem key={client.id} value={client.id}>
                                        {client.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>

            {/* KPIs */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">MRR (Receita Recorrente)</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.kpis.mrr)}
                        </div>
                        <p className="text-xs text-muted-foreground">Mensal Estimado</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{data.kpis.activeClients}</div>
                        <p className="text-xs text-muted-foreground">Empresas contratantes</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Colaboradores Faturáveis</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{data.kpis.billableEmployees}</div>
                        <p className="text-xs text-muted-foreground">Vidas ativas na plataforma</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-red-600">Inadimplência</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.kpis.overdueAmount)}
                        </div>
                        <p className="text-xs text-red-600/80">{data.kpis.overdueCount} faturas vencidas</p>
                    </CardContent>
                </Card>
            </div>

            {/* Clients Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Detalhamento por Cliente</CardTitle>
                    <CardDescription>Lista de clientes com status do plano e faturas em aberto.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Cliente</TableHead>
                                <TableHead>Plano</TableHead>
                                <TableHead>Valor Mensal</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Pendências</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.clients.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">Nenhum cliente encontrado.</TableCell>
                                </TableRow>
                            ) : (
                                data.clients.map((client) => (
                                    <TableRow key={client.id}>
                                        <TableCell className="font-medium">{client.name}</TableCell>
                                        <TableCell>{client.plan}</TableCell>
                                        <TableCell>
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(client.value)}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={client.status === 'ATIVO' ? 'default' : 'destructive'}>
                                                {client.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {client.overdueInvoices > 0 ? (
                                                <Badge variant="destructive">{client.overdueInvoices} Vencidas</Badge>
                                            ) : (
                                                <span className="text-green-600 text-sm">Em dia</span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
