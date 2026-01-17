"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Building2, Users, ShieldAlert, CheckCircle2 } from "lucide-react";

interface SaasOverview {
  kpis: {
    totalClients: number;
    activeClients: number;
    blockedClients: number;
    totalEmployees: number;
  };
  companies: {
    id: string;
    name: string;
    status: string;
    plan: string;
    employees: number;
    overdueInvoices: number;
  }[];
}

export default function VisaoSaasPage() {
  const [data, setData] = useState<SaasOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/reports/saas-overview");
        setData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Carregando visão do SaaS...</div>;
  }

  if (!data) {
    return <div className="p-8 text-center text-red-500">Erro ao carregar dados.</div>;
  }

  const employeesChartData = data.companies.map((company) => ({
    name: company.name,
    employees: company.employees,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Visão do SaaS</h1>
        <p className="text-muted-foreground">
          Painel do dono: saúde das empresas clientes, colaboradores ativos e bloqueios por inadimplência.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Empresas</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.kpis.totalClients}</div>
            <p className="text-xs text-muted-foreground">Clientes cadastrados no SaaS</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Empresas Ativas</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.kpis.activeClients}</div>
            <p className="text-xs text-muted-foreground">Com acesso liberado ao sistema</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-600">Empresas Bloqueadas</CardTitle>
            <ShieldAlert className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{data.kpis.blockedClients}</div>
            <p className="text-xs text-red-600/80">Por suspensão ou inadimplência</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Colaboradores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.kpis.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">Vidas cadastradas na base</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Colaboradores por Empresa</CardTitle>
          <CardDescription>Distribuição de colaboradores alocados por empresa cliente.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={employeesChartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "#f1f5f9" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="employees" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Empresas e Status de Uso</CardTitle>
          <CardDescription>Visão consolidada de plano, colaboradores e pendências financeiras.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empresa</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Colaboradores</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pendências</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.companies.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    Nenhuma empresa encontrada.
                  </TableCell>
                </TableRow>
              ) : (
                data.companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.plan}</TableCell>
                    <TableCell>{company.employees}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          company.status === "ATIVO" ? "default" : "destructive"
                        }
                      >
                        {company.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {company.overdueInvoices > 0 ? (
                        <Badge variant="destructive">
                          {company.overdueInvoices} faturas vencidas
                        </Badge>
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

