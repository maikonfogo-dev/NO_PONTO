"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, MoreHorizontal, UserX, FileDown, Ban, Plus, Upload, Download, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

// Types based on API response
interface Employee {
  id: string;
  name: string;
  cpf: string;
  matricula: string;
  position: string;
  status: string;
  schedule: { name: string } | null;
  workLocation: { name: string } | null;
  photoUrl?: string;
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("TODOS");
  const [missingPointFilter, setMissingPointFilter] = useState(false);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (statusFilter !== "TODOS") params.append("status", statusFilter);
      if (missingPointFilter) params.append("missingPoint", "true");
      
      // Use environment variable in real app
      const res = await fetch(`http://localhost:4000/colaboradores?${params.toString()}`);
      if (!res.ok) throw new Error("Falha ao buscar colaboradores");
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, missingPointFilter]);

  useEffect(() => {
    // Debounce search
    const timer = setTimeout(() => {
        fetchEmployees();
    }, 500);
    return () => clearTimeout(timer);
  }, [fetchEmployees]);

  const handleExport = () => {
    // Implement export logic (e.g., download CSV)
    console.log("Exporting data...");
    // Mock export
    alert("Exportação iniciada! O arquivo será baixado em breve.");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Colaboradores</h1>
          <p className="text-muted-foreground">Gerencie todos os colaboradores da empresa.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={handleExport}>
                <Download className="h-4 w-4" />
                Exportar
            </Button>
            <Link href="/admin/colaboradores/importar">
                <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Importar em Lote
                </Button>
            </Link>
            <Link href="/admin/colaboradores/novo">
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Novo Colaborador
                </Button>
            </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-white p-4 rounded-lg shadow-sm border">
        <Input 
            placeholder="Buscar por Nome, CPF ou Matrícula..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
        />
        
        <div className="flex flex-wrap gap-2 items-center flex-1">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="TODOS">Todos Status</SelectItem>
                    <SelectItem value="ATIVO">Ativo</SelectItem>
                    <SelectItem value="INATIVO">Inativo</SelectItem>
                    <SelectItem value="FERIAS">Férias</SelectItem>
                    <SelectItem value="AFASTADO">Afastado</SelectItem>
                </SelectContent>
            </Select>

            <Button 
                variant={missingPointFilter ? "destructive" : "outline"} 
                className="gap-2 border-dashed"
                onClick={() => setMissingPointFilter(!missingPointFilter)}
            >
                <Ban className="h-4 w-4" />
                Sem Ponto Hoje
            </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>CPF</TableHead>
                    <TableHead>Matrícula</TableHead>
                    <TableHead>Cargo</TableHead>
                    <TableHead>Escala</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading ? (
                    <TableRow><TableCell colSpan={7} className="text-center h-24">Carregando...</TableCell></TableRow>
                ) : employees.length === 0 ? (
                    <TableRow><TableCell colSpan={7} className="text-center h-24">Nenhum colaborador encontrado.</TableCell></TableRow>
                ) : (
                    employees.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border relative">
                                        {employee.photoUrl ? (
                                            <Image src={employee.photoUrl} alt={employee.name} fill className="object-cover" />
                                        ) : (
                                            <span className="text-xs font-bold text-slate-500">{employee.name.substring(0,2).toUpperCase()}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-slate-700">{employee.name}</span>
                                        <span className="text-xs text-muted-foreground">{employee.workLocation?.name || 'Sem Unidade'}</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{employee.cpf}</TableCell>
                            <TableCell>{employee.matricula || '-'}</TableCell>
                            <TableCell>{employee.position}</TableCell>
                            <TableCell>{employee.schedule?.name || '-'}</TableCell>
                            <TableCell>
                                <Badge variant={employee.status === 'ATIVO' ? 'default' : 'secondary'} className={employee.status === 'ATIVO' ? 'bg-green-600 hover:bg-green-700' : ''}>
                                    {employee.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                    <Button size="icon" variant="ghost" title="Ver Espelho">
                                        <FileDown className="h-4 w-4 text-slate-500" />
                                    </Button>
                                    <Link href={`/admin/colaboradores/${employee.id}`}>
                                        <Button size="icon" variant="ghost" title="Ver Perfil">
                                            <Eye className="h-4 w-4 text-blue-600" />
                                        </Button>
                                    </Link>
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
