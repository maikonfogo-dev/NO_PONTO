"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, AlertCircle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { pontoStorage } from "@/lib/storage";

interface DashboardRecord {
  name: string;
  client: string;
  time: string;
  type: string;
  status: string;
}

export default function AdminDashboard() {
  const [recentRecords, setRecentRecords] = useState<DashboardRecord[]>([]);

  useEffect(() => {
    // Carrega registros e inicializa se vazio
    let records = pontoStorage.getAll();
    if (records.length === 0) {
      pontoStorage.seed();
      records = pontoStorage.getAll();
    }

    // Formata para a tabela
    const formatted = records.map(r => ({
      name: r.userName,
      client: r.client,
      time: new Date(r.timestamp).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' }),
      type: r.type,
      status: r.status
    }));

    setRecentRecords(formatted);

    // Polling para atualizar a cada 2s
    const interval = setInterval(() => {
      const updated = pontoStorage.getAll().map(r => ({
        name: r.userName,
        client: r.client,
        time: new Date(r.timestamp).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' }),
        type: r.type,
        status: r.status
      }));
      setRecentRecords(updated);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Visão geral da operação em tempo real.</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium">Sistema Operacional</span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Total Colaboradores" 
          value="1,248" 
          change="+12% este mês" 
          icon={Users}
          trend="up"
        />
        <KPICard 
          title="Pontos Hoje" 
          value="856" 
          change="98% esperados" 
          icon={Clock}
          trend="neutral"
        />
        <KPICard 
          title="Pendências" 
          value="23" 
          change="Ação necessária" 
          icon={AlertCircle}
          trend="down"
          alert
        />
        <KPICard 
          title="Horas Extras" 
          value="142h" 
          change="-5% vs mês anterior" 
          icon={TrendingUp}
          trend="up"
          positive
        />
      </div>

      {/* Tabela de Pontos Recentes */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Registros Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Colaborador</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Cliente / Posto</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Horário</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Tipo</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {recentRecords.map((row, i) => (
                  <tr key={i} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">{row.name}</td>
                    <td className="p-4 align-middle">{row.client}</td>
                    <td className="p-4 align-middle font-mono">{row.time}</td>
                    <td className="p-4 align-middle">{row.type}</td>
                    <td className="p-4 align-middle">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function KPICard({ title, value, change, icon: Icon, trend, alert, positive }: any) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <Icon className={`h-4 w-4 ${alert ? "text-red-500" : "text-muted-foreground"}`} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold">{value}</div>
          <p className={`text-xs ${
            alert ? "text-red-500 font-bold" : 
            positive ? "text-green-600" : 
            "text-muted-foreground"
          }`}>
            {change}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "ok") return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">No Prazo</Badge>;
  if (status === "late") return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Atraso</Badge>;
  if (status === "review") return <Badge variant="destructive">Revisão</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
}
