"use client";

import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Clock, MapPin, FileWarning } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

interface DashboardData {
  kpis: {
    activeEmployees: number;
    totalEmployees: number;
    totalWorkedHours: number;
    inconsistencies: number;
    geofenceViolations: number;
    absences: number;
  };
  charts: {
    hoursPerDay: { date: string; hours: number }[];
    extrasByUnit: { name: string; value: number }[];
    absencesByUnit: { name: string; value: number }[];
  };
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

interface ClientOption {
  id: string;
  name: string;
}

export default function ReportsDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1));
  const [year, setYear] = useState<string>(String(new Date().getFullYear()));
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

  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = { month, year };
      if (isSuperAdmin && selectedClient !== "GLOBAL") {
        params.clientId = selectedClient;
      }

      const res = await api.get('/reports/dashboard', { params });
      setData(res.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    } finally {
      setLoading(false);
    }
  }, [month, year, isSuperAdmin, selectedClient]);

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
    fetchDashboardData();
  }, [fetchDashboardData]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  if (loading && !data) {
    return <div className="p-8 text-center text-slate-500">Carregando dados do dashboard...</div>;
  }

  if (!data) return <div className="p-8 text-center text-red-500">Erro ao carregar dados.</div>;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Filtros */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-slate-600">Período de Análise:</span>
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-[180px]">
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

          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isSuperAdmin && (
          <div className="flex items-center gap-2">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard 
          title="Colaboradores Ativos" 
          value={`${data.kpis.activeEmployees}/${data.kpis.totalEmployees}`} 
          icon={<Users className="h-4 w-4 text-blue-600" />}
          description="Total cadastrado na plataforma"
        />
        <KpiCard 
          title="Horas Trabalhadas" 
          value={data.kpis.totalWorkedHours.toFixed(1)} 
          icon={<Clock className="h-4 w-4 text-green-600" />}
          description="Total de horas no mês"
        />
        <KpiCard 
          title="Inconsistências" 
          value={data.kpis.inconsistencies} 
          icon={<FileWarning className="h-4 w-4 text-orange-600" />}
          description="Batidas ímpares ou erros"
          highlight={data.kpis.inconsistencies > 0}
        />
        <KpiCard 
          title="Fora da Cerca (Geo)" 
          value={data.kpis.geofenceViolations} 
          icon={<MapPin className="h-4 w-4 text-red-600" />}
          description="Registros fora do local permitido"
          highlight={data.kpis.geofenceViolations > 0}
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Evolução de Horas Trabalhadas (Diário)</CardTitle>
            <CardDescription>Total de horas computadas por dia no período selecionado.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.charts.hoursPerDay}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(value) => value.split('-')[2]} 
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: '#64748b' }}
                  />
                  <YAxis 
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: '#64748b' }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#2563eb" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Extras por Unidade</CardTitle>
            <CardDescription>Total de horas extras acumuladas por unidade/setor.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.charts.extrasByUnit}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="value" fill="#16a34a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Faltas por Unidade</CardTitle>
            <CardDescription>Distribuição de faltas por unidade.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.charts.absencesByUnit}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.charts.absencesByUnit.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KpiCard({ title, value, icon, description, highlight = false }: any) {
  return (
    <Card className={highlight ? "border-red-200 bg-red-50" : ""}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
