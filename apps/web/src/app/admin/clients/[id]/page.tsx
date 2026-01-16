"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Building2, 
  FileText, 
  Users, 
  MapPin, 
  Activity, 
  Shield, 
  File, 
  ArrowLeft,
  Edit,
  Download,
  Upload,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ExternalLink,
  Copy
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";

export default function ClientProfilePage() {
    const params = useParams();
    const id = params.id as string;
    
    const [client, setClient] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("company");
    const [usageData, setUsageData] = useState<any>(null);
    const [auditLogs, setAuditLogs] = useState<any[]>([]);
    const [invoices, setInvoices] = useState<any[]>([]);
    const [documents, setDocuments] = useState<any[]>([]);
    const [createdInvoice, setCreatedInvoice] = useState<any>(null);
    const [newInvoiceAmount, setNewInvoiceAmount] = useState("");
    const [newInvoiceRef, setNewInvoiceRef] = useState("");
    const [uploading, setUploading] = useState(false);

    const fetchClient = useCallback(async () => {
        try {
            const res = await api.get(`/clientes/${id}`);
            setClient(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    const fetchUsage = useCallback(async () => {
        try {
            const res = await api.get(`/clientes/${id}/uso`);
            setUsageData(res.data);
        } catch (error) {
            console.error("Failed to fetch usage", error);
        }
    }, [id]);

    const fetchAuditLogs = useCallback(async () => {
        try {
            const res = await api.get(`/clientes/${id}/auditoria`);
            setAuditLogs(res.data);
        } catch (error) {
            console.error("Failed to fetch audit logs", error);
        }
    }, [id]);

    const fetchInvoices = useCallback(async () => {
        try {
            const res = await api.get(`/clientes/${id}/faturas`);
            setInvoices(res.data);
        } catch (error) {
            console.error("Failed to fetch invoices", error);
        }
    }, [id]);

    const fetchDocuments = useCallback(async () => {
        try {
            const res = await api.get(`/clientes/${id}/documentos`);
            setDocuments(res.data);
        } catch (error) {
            console.error("Failed to fetch documents", error);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchClient();
        }
    }, [id, fetchClient]);

    useEffect(() => {
        if (activeTab === 'usage' && !usageData) {
            fetchUsage();
        }
        if (activeTab === 'audit' && auditLogs.length === 0) {
            fetchAuditLogs();
        }
        if (activeTab === 'contract' && invoices.length === 0) {
            fetchInvoices();
        }
        if (activeTab === 'documents' && documents.length === 0) {
            fetchDocuments();
        }
    }, [activeTab, usageData, auditLogs.length, invoices.length, documents.length, fetchUsage, fetchAuditLogs, fetchInvoices, fetchDocuments]);

    const handleCreateInvoice = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newInvoiceAmount || !newInvoiceRef) return;
        
        try {
            const res = await api.post(`/clientes/${id}/cobranca`, {
                amount: parseFloat(newInvoiceAmount),
                method: 'PIX', // Default to PIX for now
                reference: newInvoiceRef
            });
            
            setCreatedInvoice(res.data);
            setNewInvoiceAmount("");
            setNewInvoiceRef("");
            fetchInvoices(); // Refresh list
        } catch (error) {
            console.error("Failed to create invoice", error);
        }
    };

    const handleUploadDocument = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'Contrato'); // Default type
        
        setUploading(true);
        try {
            await api.post(`/clientes/${id}/documentos`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            fetchDocuments(); // Refresh list
        } catch (error) {
            console.error("Failed to upload document", error);
        } finally {
            setUploading(false);
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-muted-foreground">Carregando perfil do cliente...</div>;
    }

    if (!client) {
        return <div className="p-8 text-center text-muted-foreground">Cliente não encontrado.</div>;
    }

    const tabs = [
        { id: "company", label: "Dados da Empresa", icon: Building2 },
        { id: "contract", label: "Contrato & Plano", icon: FileText },
        { id: "usage", label: "Uso do Sistema", icon: Activity },
        { id: "units", label: "Unidades / Postos", icon: MapPin },
        { id: "users", label: "Usuários do Cliente", icon: Users },
        { id: "documents", label: "Documentos", icon: File },
        { id: "audit", label: "Auditoria", icon: Shield },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/admin/clients">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div className="h-16 w-16 bg-slate-100 rounded-lg flex items-center justify-center border">
                        <Building2 className="h-8 w-8 text-slate-400" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold tracking-tight">{client.name}</h1>
                            <Badge className={client.status === 'ATIVO' ? "bg-green-600" : ""}>
                                {client.status}
                            </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>CNPJ: {client.cnpj}</span>
                            <span>•</span>
                            <span>Plano: {client.subscription?.plan || "N/A"}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Edit className="h-4 w-4" />
                        Editar
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Ver Cobrança
                    </Button>
                    <Button className="gap-2">
                        <Users className="h-4 w-4" />
                        Acessar como Gestor
                    </Button>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b overflow-x-auto">
                <div className="flex gap-6 min-w-max px-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === tab.id 
                                ? "border-slate-900 text-slate-900" 
                                : "border-transparent text-slate-500 hover:text-slate-700"
                            }`}
                        >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
                
                {/* 1. Dados da Empresa */}
                {activeTab === "company" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Dados Cadastrais</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <Label className="text-muted-foreground">Razão Social</Label>
                                <div className="font-medium">{client.name}</div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-muted-foreground">Nome Fantasia</Label>
                                <div className="font-medium">{client.tradeName || "-"}</div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-muted-foreground">CNPJ</Label>
                                <div className="font-medium">{client.cnpj}</div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-muted-foreground">Inscrição Estadual</Label>
                                <div className="font-medium">{client.stateRegistration || "Isento"}</div>
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <Label className="text-muted-foreground">Endereço</Label>
                                <div className="font-medium">{client.address || "-"}</div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-muted-foreground">Contato Financeiro</Label>
                                <div className="font-medium">{client.financialContact || "-"}</div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-muted-foreground">Contato Operacional</Label>
                                <div className="font-medium">{client.operationalContact || "-"}</div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* 2. Contrato & Plano */}
                {activeTab === "contract" && (
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Plano SaaS e Faturamento</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {client.subscription ? (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-4 bg-slate-50 rounded-lg border">
                                            <div className="text-sm text-muted-foreground mb-1">Plano Atual</div>
                                            <div className="text-2xl font-bold">{client.subscription.plan}</div>
                                            <div className="text-sm text-green-600 mt-1 flex items-center gap-1">
                                                <CheckCircle2 className="h-3 w-3" /> Ativo
                                            </div>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-lg border">
                                            <div className="text-sm text-muted-foreground mb-1">Valor Mensal</div>
                                            <div className="text-2xl font-bold">
                                                R$ {(client.subscription.price * client.subscription.quantity).toFixed(2)}
                                            </div>
                                            <div className="text-xs text-muted-foreground mt-1">
                                                {client.subscription.quantity} vidas x R$ {client.subscription.price}
                                            </div>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-lg border">
                                            <div className="text-sm text-muted-foreground mb-1">Ciclo de Cobrança</div>
                                            <div className="text-2xl font-bold">{client.subscription.billingCycle}</div>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                Próximo vencto: {new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground">
                                        Nenhuma assinatura ativa encontrada.
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Histórico de Faturas</CardTitle>
                                <div className="flex gap-2">
                                    <Input 
                                        placeholder="Valor (R$)" 
                                        className="w-32" 
                                        value={newInvoiceAmount}
                                        onChange={(e) => setNewInvoiceAmount(e.target.value)}
                                        type="number"
                                    />
                                    <Input 
                                        placeholder="Referência (ex: Taxa Setup)" 
                                        className="w-48"
                                        value={newInvoiceRef}
                                        onChange={(e) => setNewInvoiceRef(e.target.value)}
                                    />
                                    <Button size="sm" onClick={handleCreateInvoice} disabled={!newInvoiceAmount || !newInvoiceRef}>
                                        <Plus className="h-4 w-4 mr-2" /> Gerar Cobrança
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {createdInvoice && (
                                    <Card className="border-green-200 bg-green-50 mb-6">
                                        <CardHeader>
                                            <CardTitle className="text-green-800 flex items-center gap-2 text-lg">
                                                <CheckCircle2 className="h-5 w-5" />
                                                Cobrança Gerada com Sucesso
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <Label>Valor</Label>
                                                        <div className="font-bold text-lg">R$ {Number(createdInvoice.amount).toFixed(2)}</div>
                                                    </div>
                                                    <div>
                                                        <Label>Status</Label>
                                                        <div><Badge>{createdInvoice.status}</Badge></div>
                                                    </div>
                                                </div>

                                                {createdInvoice.paymentInfo?.qrCodeBase64 && (
                                                    <div className="flex flex-col items-center p-4 bg-white rounded-lg border shadow-sm">
                                                        <div className="text-sm font-medium mb-2">Escaneie para pagar com PIX</div>
                                                        <Image 
                                                            src={`data:image/png;base64,${createdInvoice.paymentInfo.qrCodeBase64}`} 
                                                            alt="QR Code PIX" 
                                                            width={192}
                                                            height={192}
                                                            className="h-48 w-48"
                                                        />
                                                        <div className="mt-4 w-full">
                                                            <Label>Copia e Cola</Label>
                                                            <div className="flex gap-2 mt-1">
                                                                <Input value={createdInvoice.paymentInfo.qrCode} readOnly className="font-mono text-xs" />
                                                                <Button size="icon" variant="outline" onClick={() => navigator.clipboard.writeText(createdInvoice.paymentInfo.qrCode)}>
                                                                    <Copy className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                {createdInvoice.paymentInfo?.url && (
                                                    <div className="mt-2 p-4 bg-blue-50 rounded border border-blue-100">
                                                        <a href={createdInvoice.paymentInfo.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline flex items-center gap-2">
                                                            <ExternalLink className="h-4 w-4" />
                                                            Abrir Link de Pagamento (Mercado Pago)
                                                        </a>
                                                    </div>
                                                )}
                                                
                                                <Button variant="outline" onClick={() => setCreatedInvoice(null)} className="w-full mt-4">
                                                    Fechar
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Referência</TableHead>
                                            <TableHead>Vencimento</TableHead>
                                            <TableHead>Valor</TableHead>
                                            <TableHead>Método</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {invoices.map((inv: any) => (
                                            <TableRow key={inv.id}>
                                                <TableCell>{inv.reference || "Mensalidade"}</TableCell>
                                                <TableCell>{new Date(inv.dueDate).toLocaleDateString()}</TableCell>
                                                <TableCell>R$ {Number(inv.amount).toFixed(2)}</TableCell>
                                                <TableCell>{inv.method}</TableCell>
                                                <TableCell>
                                                    <Badge className={
                                                        inv.status === 'PAGO' ? "bg-green-600" : 
                                                        inv.status === 'PENDENTE' ? "bg-yellow-600" : "bg-red-600"
                                                    }>
                                                        {inv.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="ghost" size="sm">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        {invoices.length === 0 && (
                                            <TableRow>
                                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                                    Nenhuma fatura encontrada.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* 3. Uso do Sistema */}
                {activeTab === "usage" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="text-sm text-muted-foreground mb-2">Colaboradores Ativos</div>
                                <div className="text-3xl font-bold">{usageData?.activeEmployees || 0}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    de {usageData?.limitEmployees || 0} contratados
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                                    <div 
                                        className="bg-blue-600 h-full transition-all duration-500" 
                                        style={{ width: `${Math.min(usageData?.usagePercent || 0, 100)}%` }}
                                    ></div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="text-sm text-muted-foreground mb-2">Unidades Cadastradas</div>
                                <div className="text-3xl font-bold">{usageData?.units || 0}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Postos de trabalho ativos
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="text-sm text-muted-foreground mb-2">Usuários Gestores</div>
                                <div className="text-3xl font-bold">{usageData?.users || 0}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Acesso ao painel
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="text-sm text-muted-foreground mb-2">Registros (Mês)</div>
                                <div className="text-3xl font-bold">{usageData?.totalRecords || 0}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Batidas de ponto
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* 4. Unidades / Postos */}
                {activeTab === "units" && (
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Unidades e Locais de Trabalho</CardTitle>
                            <Button size="sm" className="gap-2">
                                <Plus className="h-4 w-4" /> Nova Unidade
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Endereço</TableHead>
                                        <TableHead>Geofence</TableHead>
                                        <TableHead>Colaboradores</TableHead>
                                        <TableHead className="text-right">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {client.workLocations?.map((unit: any) => (
                                        <TableRow key={unit.id}>
                                            <TableCell className="font-medium">{unit.name}</TableCell>
                                            <TableCell>{unit.address}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="gap-1">
                                                    <MapPin className="h-3 w-3" />
                                                    {unit.radius}m
                                                </Badge>
                                            </TableCell>
                                            <TableCell>0</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="icon">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {(!client.workLocations || client.workLocations.length === 0) && (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                                Nenhuma unidade cadastrada.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                )}

                {/* 5. Usuários do Cliente */}
                {activeTab === "users" && (
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Usuários Administrativos</CardTitle>
                            <Button size="sm" className="gap-2">
                                <Plus className="h-4 w-4" /> Novo Usuário
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>E-mail</TableHead>
                                        <TableHead>Perfil</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {client.users?.map((user: any) => (
                                        <TableRow key={user.id}>
                                            <TableCell className="font-medium">{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary">{user.role}</Badge>
                                            </TableCell>
                                            <TableCell><Badge className="bg-green-600">Ativo</Badge></TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="icon">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {(!client.users || client.users.length === 0) && (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                                Nenhum usuário cadastrado.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                )}

                {/* 6. Documentos */}
                {activeTab === "documents" && (
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Documentos e Contratos</CardTitle>
                            <div className="flex items-center gap-2">
                                <Input 
                                    type="file" 
                                    id="file-upload" 
                                    className="hidden" 
                                    onChange={handleUploadDocument}
                                    disabled={uploading}
                                />
                                <Label htmlFor="file-upload" className="cursor-pointer">
                                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                                        {uploading ? <Clock className="h-4 w-4 animate-spin mr-2" /> : <Upload className="h-4 w-4 mr-2" />}
                                        Upload
                                    </div>
                                </Label>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome do Arquivo</TableHead>
                                        <TableHead>Tipo</TableHead>
                                        <TableHead>Data Upload</TableHead>
                                        <TableHead className="text-right">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {documents.map((doc: any) => (
                                        <TableRow key={doc.id}>
                                            <TableCell className="font-medium flex items-center gap-2">
                                                <FileText className="h-4 w-4 text-blue-500" />
                                                {doc.name}
                                            </TableCell>
                                            <TableCell><Badge variant="outline">{doc.type}</Badge></TableCell>
                                            <TableCell>{new Date(doc.createdAt).toLocaleDateString()}</TableCell>
                                            <TableCell className="text-right">
                                                <a href={doc.url} target="_blank" rel="noreferrer">
                                                    <Button variant="ghost" size="sm">
                                                        <Download className="h-4 w-4" />
                                                    </Button>
                                                </a>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {documents.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                                Nenhum documento encontrado.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                )}

                {/* 7. Auditoria */}
                {activeTab === "audit" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Log de Auditoria</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {auditLogs.length === 0 ? (
                                    <div className="text-center py-8 text-muted-foreground">
                                        Nenhum registro de auditoria encontrado.
                                    </div>
                                ) : (
                                    auditLogs.map((log: any) => (
                                        <div key={log.id} className="flex gap-4 items-start pb-4 border-b last:border-0">
                                            <div className="mt-1 bg-slate-100 p-2 rounded-full">
                                                <Clock className="h-4 w-4 text-slate-500" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">{log.action} - {log.entity}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {log.details || "Sem detalhes"}
                                                </div>
                                                <div className="text-xs text-muted-foreground mt-1">
                                                    {new Date(log.createdAt).toLocaleString('pt-BR')} • IP: {log.ip || "N/A"} • User: {log.userId || "Sistema"}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

            </div>
        </div>
    );
}
