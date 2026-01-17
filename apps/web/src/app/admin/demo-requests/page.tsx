"use client"

import { useCallback, useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { api } from "@/lib/api"
import { toast } from "sonner"
import { Download, Users, Clock, MessageSquare, CheckCircle } from "lucide-react"

type DemoStatus = "PENDENTE" | "CONTATADO" | "CONVERTIDO"

type StatusFilter = "ALL" | DemoStatus

interface DemoRequest {
  id: string
  name: string
  email: string
  phone: string
  companyName: string
  employees: string
  status: DemoStatus
  createdAt: string
}

export default function DemoRequestsPage() {
  const [requests, setRequests] = useState<DemoRequest[]>([])
  const [filteredRequests, setFilteredRequests] = useState<DemoRequest[]>([])
  const [loading, setLoading] = useState(false)
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL")
  const [search, setSearch] = useState("")

  const fetchRequests = useCallback(async () => {
    try {
      setLoading(true)
      const res = await api.get<DemoRequest[]>("/demo-requests")
      setRequests(res.data)
    } catch (error) {
      console.error(error)
      toast.error("Erro ao carregar solicitações de demonstração")
    } finally {
      setLoading(false)
    }
  }, [])

  const applyFilters = (data: DemoRequest[], searchTerm: string, status: StatusFilter) => {
    let result = data
    if (status !== "ALL") {
      result = result.filter((r) => r.status === status)
    }
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(term) ||
          r.companyName.toLowerCase().includes(term) ||
          r.email.toLowerCase().includes(term)
      )
    }
    return result
  }

  useEffect(() => {
    fetchRequests()
  }, [fetchRequests])

  useEffect(() => {
    setFilteredRequests(applyFilters(requests, search, statusFilter))
  }, [search, requests, statusFilter])

  const getStatusBadge = (status: DemoStatus) => {
    if (status === "PENDENTE") {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">Pendente</Badge>
    }
    if (status === "CONTATADO") {
      return <Badge className="bg-blue-600 hover:bg-blue-700">Contatado</Badge>
    }
    return <Badge className="bg-green-600 hover:bg-green-700">Convertido</Badge>
  }

  const handleChangeStatus = async (id: string, status: DemoStatus) => {
    try {
      await api.patch(`/demo-requests/${id}/status`, { status })
      toast.success("Status atualizado com sucesso")
      const updated = requests.map((r) => (r.id === id ? { ...r, status } : r))
      setRequests(updated)
      // Note: filteredRequests update is handled by the useEffect dependent on 'requests'
    } catch (error) {
      console.error(error)
      toast.error("Erro ao atualizar status")
    }
  }

  const exportToCSV = () => {
    if (filteredRequests.length === 0) {
      toast.error("Não há dados para exportar")
      return
    }

    const headers = ["ID", "Nome", "Email", "Telefone", "Empresa", "Colaboradores", "Status", "Data Criação"]
    const rows = filteredRequests.map(req => [
      req.id,
      req.name,
      req.email,
      req.phone,
      req.companyName,
      req.employees,
      req.status,
      new Date(req.createdAt).toLocaleString("pt-BR")
    ])

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `demonstracoes_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success("Exportação iniciada")
  }

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'PENDENTE').length,
    contacted: requests.filter(r => r.status === 'CONTATADO').length,
    converted: requests.filter(r => r.status === 'CONVERTIDO').length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Solicitações de Demonstração</h1>
          <p className="text-muted-foreground">
            Acompanhe os leads gerados pela landing page e controle o funil de vendas.
          </p>
        </div>
        <Button variant="outline" className="gap-2" onClick={exportToCSV}>
          <Download className="h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Solicitações recebidas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
            <p className="text-xs text-muted-foreground">Aguardando contato</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contatados</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.contacted}</div>
            <p className="text-xs text-muted-foreground">Em negociação</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Convertidos</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.converted}</div>
            <p className="text-xs text-muted-foreground">Vendas realizadas</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Leads de Demonstração</CardTitle>
          <CardDescription>Filtre, veja detalhes e atualize o status das solicitações recebidas.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <Input
              placeholder="Buscar por nome, empresa ou email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-md"
            />
            <div className="flex gap-3 items-center">
              <Select
                value={statusFilter}
                onValueChange={(val) => setStatusFilter(val as StatusFilter)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">Todos</SelectItem>
                  <SelectItem value="PENDENTE">Pendente</SelectItem>
                  <SelectItem value="CONTATADO">Contatado</SelectItem>
                  <SelectItem value="CONVERTIDO">Convertido</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="secondary" onClick={fetchRequests} disabled={loading}>
                Atualizar
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Colaboradores</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-6">
                      Carregando...
                    </TableCell>
                  </TableRow>
                )}
                {!loading && filteredRequests.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                      Nenhuma solicitação encontrada.
                    </TableCell>
                  </TableRow>
                )}
                {!loading &&
                  filteredRequests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell>
                        {new Date(req.createdAt).toLocaleString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                      <TableCell className="font-medium">{req.name}</TableCell>
                      <TableCell>{req.companyName}</TableCell>
                      <TableCell>{req.email}</TableCell>
                      <TableCell>{req.phone}</TableCell>
                      <TableCell>{req.employees}</TableCell>
                      <TableCell>{getStatusBadge(req.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            size="sm"
                            variant={req.status === "PENDENTE" ? "default" : "outline"}
                            onClick={() => handleChangeStatus(req.id, "PENDENTE")}
                          >
                            Pendente
                          </Button>
                          <Button
                            size="sm"
                            variant={req.status === "CONTATADO" ? "default" : "outline"}
                            onClick={() => handleChangeStatus(req.id, "CONTATADO")}
                          >
                            Contatado
                          </Button>
                          <Button
                            size="sm"
                            variant={req.status === "CONVERTIDO" ? "default" : "outline"}
                            onClick={() => handleChangeStatus(req.id, "CONVERTIDO")}
                          >
                            Convertido
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
