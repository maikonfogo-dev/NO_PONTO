'use client';

import { useState, useEffect, useCallback } from 'react';
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Search, Filter, Download } from "lucide-react";

interface AuditLog {
    id: string;
    timestamp: string;
    user: string;
    action: string;
    entity: string;
    details: string;
    ip: string;
    type: string;
}

export default function AuditoriaPage() {
    const [logs, setLogs] = useState<AuditLog[]>([]);
    const [loading, setLoading] = useState(false);
    
    // Filters
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [userFilter, setUserFilter] = useState('');
    const [actionFilter, setActionFilter] = useState('');

    const fetchLogs = useCallback(async () => {
        setLoading(true);
        try {
            const params: any = {};
            if (startDate) params.startDate = startDate;
            if (endDate) params.endDate = endDate;
            if (userFilter) params.userId = userFilter;
            if (actionFilter) params.action = actionFilter;

            const res = await api.get('/reports/audit-logs', { params });
            
            setLogs(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [startDate, endDate, userFilter, actionFilter]);

    useEffect(() => {
        fetchLogs();
    }, [fetchLogs]);

    const getActionColor = (action: string) => {
        if (action.includes('CRIACAO') || action.includes('INCLUSAO')) return 'text-green-600';
        if (action.includes('EXCLUSAO')) return 'text-red-600';
        if (action.includes('EDICAO') || action.includes('ATUALIZACAO')) return 'text-amber-600';
        return 'text-slate-600';
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Auditoria & Compliance</CardTitle>
                    <CardDescription>
                        Rastreamento completo de ações, alterações e acessos no sistema.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1">
                            <label className="text-sm font-medium mb-1 block">Período</label>
                            <div className="flex gap-2">
                                <Input 
                                    type="date" 
                                    value={startDate} 
                                    onChange={(e) => setStartDate(e.target.value)} 
                                />
                                <Input 
                                    type="date" 
                                    value={endDate} 
                                    onChange={(e) => setEndDate(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium mb-1 block">Usuário</label>
                            <Input 
                                placeholder="ID do usuário..." 
                                value={userFilter}
                                onChange={(e) => setUserFilter(e.target.value)}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium mb-1 block">Ação</label>
                            <Input 
                                placeholder="Ex: CRIACAO, EXCLUSAO..." 
                                value={actionFilter}
                                onChange={(e) => setActionFilter(e.target.value)}
                            />
                        </div>
                        <div className="flex items-end">
                            <Button onClick={fetchLogs} disabled={loading}>
                                <Search className="mr-2 h-4 w-4" />
                                Filtrar
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Data/Hora</TableHead>
                                    <TableHead>Usuário</TableHead>
                                    <TableHead>Ação</TableHead>
                                    <TableHead>Entidade</TableHead>
                                    <TableHead>Detalhes</TableHead>
                                    <TableHead>IP</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center h-24">
                                            Carregando logs...
                                        </TableCell>
                                    </TableRow>
                                ) : logs.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                                            Nenhum registro encontrado.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    logs.map((log) => (
                                        <TableRow key={log.id}>
                                            <TableCell className="whitespace-nowrap">
                                                {format(new Date(log.timestamp), "dd/MM/yyyy HH:mm:ss", { locale: ptBR })}
                                            </TableCell>
                                            <TableCell>{log.user}</TableCell>
                                            <TableCell className={`font-medium ${getActionColor(log.action)}`}>
                                                {log.action}
                                            </TableCell>
                                            <TableCell>{log.entity}</TableCell>
                                            <TableCell className="max-w-[300px] truncate" title={log.details}>
                                                {log.details}
                                            </TableCell>
                                            <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
