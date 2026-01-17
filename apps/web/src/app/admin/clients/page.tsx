"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Eye, 
  Edit, 
  FileText, 
  Ban, 
  Download, 
  Plus, 
  Search,
  Building2
} from "lucide-react";
import Link from "next/link";
import { api } from "@/lib/api";

interface Client {
  id: string;
  name: string;
  tradeName: string | null;
  cnpj: string;
  status: string;
  subscription: {
    plan: string;
    status: string;
    endDate: string | null;
  } | null;
  activeEmployees?: number;
  createdAt: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("TODOS");
  const [planFilter, setPlanFilter] = useState("TODOS");

  const fetchClients = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = {};
      if (search) params.search = search;
      if (statusFilter !== "TODOS") params.status = statusFilter;
      if (planFilter !== "TODOS") params.plan = planFilter;

      const res = await api.get("/clientes", { params });
      setClients(res.data);
    } catch (error) {
      console.error("Failed to fetch clients", error);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, planFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
        fetchClients();
    }, 500);
    return () => clearTimeout(timer);
  }, [fetchClients]);

  const handleExport = () => {
    alert("Funcionalidade de exportação em desenvolvimento.");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ATIVO":
        return <Badge className="bg-green-600 hover:bg-green-700">Ativo</Badge>;
      case "TRIAL":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">Trial</Badge>;
      case "SUSPENSO":
        return <Badge variant="destructive">Suspenso</Badge>;
      case "INADIMPLENTE":
        return <Badge className="bg-red-600 hover:bg-red-700">Inadimplente</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatCNPJ = (cnpj: string) => {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  };

  const formatDate = (dateString: string | null) => {
      if (!dateString) return "-";
      return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">Gerencie as empresas contratantes e seus planos.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={handleExport}>
                <Download className="h-4 w-4" />
                Exportar
            </Button>
            <Button variant="outline" className="gap-2">
                 <Search className="h-4 w-4" />
                 Filtros Avançados
            </Button>
            <Link href="/admin/clients/new">
                <Button className="gap-2 bg-blue-800 hover:bg-blue-900">
                    <Plus className="h-4 w-4" />
                    Novo Cliente
                </Button>
            </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-white p-4 rounded-lg shadow-sm border">
        <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Buscar por Razão Social ou CNPJ..." 
                className="pl-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className="w-[180px]">
             <Select value={planFilter} onValueChange={setPlanFilter}>
                <SelectTrigger>
                    <SelectValue placeholder="Plano" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="TODOS">Todos os Planos</SelectItem>
                    <SelectItem value="BASIC">Basic</SelectItem>
                    <SelectItem value="PRO">Pro</SelectItem>
                    <SelectItem value="ENTERPRISE">Enterprise</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex gap-2">
             <Button 
                variant={statusFilter === "TODOS" ? "default" : "outline"}
                onClick={() => setStatusFilter("TODOS")}
                size="sm"
            >
                Todos
            </Button>
            <Button 
                variant={statusFilter === "ATIVO" ? "default" : "outline"}
                onClick={() => setStatusFilter("ATIVO")}
                size="sm"
                className={statusFilter === "ATIVO" ? "bg-green-600 hover:bg-green-700" : ""}
            >
                Ativos
            </Button>
            <Button 
                variant={statusFilter === "INADIMPLENTE" ? "default" : "outline"}
                onClick={() => setStatusFilter("INADIMPLENTE")}
                size="sm"
                className={statusFilter === "INADIMPLENTE" ? "bg-red-600 hover:bg-red-700" : ""}
            >
                Inadimplentes
            </Button>
        </div>
      </div>

      <div className="border rounded-lg bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Logo</TableHead>
              <TableHead>Razão Social</TableHead>
              <TableHead>CNPJ</TableHead>
              <TableHead>Plano</TableHead>
              <TableHead className="text-center">Colab.</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
                <TableRow>
                    <TableCell colSpan={8} className="text-center py-10 text-muted-foreground">
                        Carregando clientes...
                    </TableCell>
                </TableRow>
            ) : clients.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={8} className="text-center py-10 text-muted-foreground">
                        Nenhum cliente encontrado.
                    </TableCell>
                </TableRow>
            ) : (
                clients.map((client) => (
                <TableRow key={client.id}>
                    <TableCell>
                        <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center">
                            <Building2 className="h-4 w-4 text-slate-500" />
                        </div>
                    </TableCell>
                    <TableCell className="font-medium">
                        <div className="flex flex-col">
                            <span>{client.name}</span>
                            <span className="text-xs text-muted-foreground">{client.tradeName}</span>
                        </div>
                    </TableCell>
                    <TableCell>{formatCNPJ(client.cnpj)}</TableCell>
                    <TableCell>
                        {client.subscription ? (
                            <Badge variant="outline" className="font-normal">
                                {client.subscription.plan}
                            </Badge>
                        ) : (
                            <span className="text-muted-foreground text-sm">-</span>
                        )}
                    </TableCell>
                    <TableCell className="text-center">
                        <span className="font-mono text-sm">{client.activeEmployees || 0}</span> 
                    </TableCell>
                    <TableCell>
                        {getStatusBadge(client.status)}
                    </TableCell>
                    <TableCell className="text-sm">
                        {formatDate(client.subscription?.endDate || null)}
                    </TableCell>
                    <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                             <Link href={`/admin/clients/${client.id}`}>
                                <Button variant="ghost" size="icon" title="Ver Perfil">
                                    <Eye className="h-4 w-4 text-slate-500" />
                                </Button>
                             </Link>
                             <Button variant="ghost" size="icon" title="Editar">
                                <Edit className="h-4 w-4 text-slate-500" />
                             </Button>
                             <Button variant="ghost" size="icon" title="Cobrança">
                                <FileText className="h-4 w-4 text-slate-500" />
                             </Button>
                             <Button variant="ghost" size="icon" title="Bloquear" className="text-red-500 hover:text-red-600">
                                <Ban className="h-4 w-4" />
                             </Button>
                        </div>
                    </TableCell>
                </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
