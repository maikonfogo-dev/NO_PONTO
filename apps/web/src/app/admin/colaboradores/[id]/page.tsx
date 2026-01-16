"use client";

import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Save, FileText, MapPin, Clock, ShieldCheck, History, ImageIcon, Upload, FileDown, AlertTriangle, CheckCircle, Scale, User, Activity, Edit, UserX } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EmployeeProfilePage() {
    const params = useParams();
    const id = params.id as string;
    
    const [employee, setEmployee] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("personal");
    
    // States for Point tab
    const [timeRecords, setTimeRecords] = useState<any[]>([]);
    const [loadingRecords, setLoadingRecords] = useState(false);

    // States for Audit tab
    const [auditLogs, setAuditLogs] = useState<any[]>([]);
    const [loadingAudit, setLoadingAudit] = useState(false);

    // States for Legal tab
    const [cltSummary, setCltSummary] = useState<any>(null);

    const fetchEmployee = useCallback(async () => {
        try {
            const res = await api.get(`/colaboradores/${id}`);
            setEmployee(res.data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, [id]);

    const fetchCltSummary = useCallback(async () => {
        try {
            const res = await api.get(`/colaboradores/${id}/clt/resumo`);
            setCltSummary(res.data);
        } catch (e) {
            console.error("Failed to fetch CLT summary", e);
        }
    }, [id]);

    const fetchTimeRecords = useCallback(async () => {
        setLoadingRecords(true);
        try {
            const res = await api.get(`/colaboradores/${id}/pontos`);
            setTimeRecords(res.data);
        } catch (e) {
            console.error("Failed to fetch time records", e);
        } finally {
            setLoadingRecords(false);
        }
    }, [id]);

    const fetchAuditLogs = useCallback(async () => {
        setLoadingAudit(true);
        try {
            const res = await api.get(`/colaboradores/${id}/auditoria`);
            setAuditLogs(res.data);
        } catch (e) {
            console.error("Failed to fetch audit logs", e);
        } finally {
            setLoadingAudit(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchEmployee();
            fetchCltSummary();
        }
    }, [id, fetchEmployee, fetchCltSummary]);

    useEffect(() => {
        if (activeTab === 'point') {
            fetchTimeRecords();
        } else if (activeTab === 'audit') {
            fetchAuditLogs();
        }
    }, [activeTab, fetchTimeRecords, fetchAuditLogs]);

    const handleInactivate = async () => {
        if (!confirm("Tem certeza que deseja inativar este colaborador?")) return;
        try {
            await api.patch(`/colaboradores/${id}/status`, { status: 'INATIVO' });
            alert("Colaborador inativado com sucesso");
            fetchEmployee(); // Refresh data
        } catch (e) {
            console.error(e);
            alert("Erro ao inativar colaborador");
        }
    };

    if (loading) return <div className="p-8 text-center">Carregando...</div>;
    if (!employee) return <div className="p-8 text-center">Colaborador não encontrado</div>;

    return (
        <div className="space-y-6 relative">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-4 border-b mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/colaboradores">
                        <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">{employee.name}</h1>
                        <div className="flex gap-2 text-sm text-muted-foreground items-center">
                            <Badge variant={employee.status === 'ATIVO' ? 'default' : 'secondary'} className={employee.status === 'ATIVO' ? 'bg-green-600' : ''}>
                                {employee.status || 'ATIVO'}
                            </Badge>
                            <span>•</span>
                            <span>{employee.position}</span>
                            <span>•</span>
                            <span>Matrícula: {employee.matricula || '-'}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2" title="Ver Espelho de Ponto" onClick={() => setActiveTab('point')}>
                        <FileText className="h-4 w-4"/> 
                        <span className="hidden sm:inline">Espelho</span>
                    </Button>
                    <Button variant="outline" className="gap-2" title="Histórico de Alterações" onClick={() => setActiveTab('audit')}>
                        <History className="h-4 w-4"/> 
                        <span className="hidden sm:inline">Histórico</span>
                    </Button>
                    <Button className="gap-2" title="Editar Dados" onClick={() => alert('Funcionalidade de edição em breve')}>
                        <Edit className="h-4 w-4"/> 
                        <span className="hidden sm:inline">Editar</span>
                    </Button>
                    {employee.status !== 'INATIVO' && (
                         <Button variant="destructive" size="icon" title="Inativar Colaborador" onClick={handleInactivate}>
                            <UserX className="h-4 w-4"/>
                        </Button>
                    )}
                </div>
            </div>

            {/* Custom Tabs Implementation */}
            <div className="space-y-4">
                <div className="flex gap-1 border-b overflow-x-auto pb-0">
                    {['personal', 'professional', 'schedule', 'point', 'documents', 'legal', 'audit'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-colors border-b-2 ${
                                activeTab === tab 
                                ? 'bg-white border-blue-600 text-blue-600' 
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            {tab === 'personal' && 'Dados Pessoais'}
                            {tab === 'professional' && 'Dados Profissionais'}
                            {tab === 'schedule' && 'Jornada'}
                            {tab === 'point' && 'Ponto'}
                            {tab === 'documents' && 'Documentos'}
                            {tab === 'legal' && 'Resumo Legal'}
                            {tab === 'audit' && 'Auditoria'}
                        </button>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-b-lg rounded-tr-lg border shadow-sm min-h-[400px]">
                    {activeTab === 'personal' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Nome Completo</Label>
                                <Input value={employee.name} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>CPF</Label>
                                <Input value={employee.cpf} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>RG</Label>
                                <Input value={employee.rg || '-'} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>Data de Nascimento</Label>
                                <Input value={employee.birthDate ? new Date(employee.birthDate).toLocaleDateString() : '-'} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>Telefone</Label>
                                <Input value={employee.phone || '-'} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>E-mail Pessoal</Label>
                                <Input value={employee.email || '-'} readOnly />
                            </div>
                            <div className="col-span-2 space-y-2">
                                <Label>Endereço</Label>
                                <Input value={employee.address || '-'} readOnly />
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'professional' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <Label>Empresa / Cliente</Label>
                                <Input value={employee.contract?.client?.name || '-'} readOnly />
                            </div>
                             <div className="space-y-2">
                                <Label>Contrato</Label>
                                <Input value={employee.contract?.name || '-'} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>Cargo</Label>
                                <Input value={employee.position} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>Função</Label>
                                <Input value={employee.function || '-'} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>Departamento</Label>
                                <Input value={employee.department || '-'} readOnly />
                            </div>
                            <div className="space-y-2">
                                <Label>Data de Admissão</Label>
                                <Input value={new Date(employee.admissionDate).toLocaleDateString()} readOnly />
                            </div>
                        </div>
                    )}

                    {activeTab === 'schedule' && (
                         <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Nome da Escala</Label>
                                    <Input value={employee.schedule?.name || 'Padrão'} readOnly />
                                </div>
                                <div className="space-y-2">
                                    <Label>Tipo</Label>
                                    <Input value={employee.schedule?.type || '-'} readOnly />
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg border">
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase font-bold">Entrada</span>
                                    <p className="font-mono text-lg">{employee.schedule?.startTime || '08:00'}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase font-bold">Saída Almoço</span>
                                    <p className="font-mono text-lg">{employee.schedule?.lunchStart || '12:00'}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase font-bold">Volta Almoço</span>
                                    <p className="font-mono text-lg">{employee.schedule?.lunchEnd || '13:00'}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase font-bold">Saída</span>
                                    <p className="font-mono text-lg">{employee.schedule?.endTime || '17:00'}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded border">
                                    <ShieldCheck className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">Exigir Foto: {employee.requirePhoto ? 'Sim' : 'Não'}</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded border">
                                    <MapPin className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">Exigir GPS: {employee.requireGPS ? 'Sim' : 'Não'}</span>
                                </div>
                            </div>
                         </div>
                    )}

                    {activeTab === 'point' && (
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">Histórico de Registros</h3>
                                <Button variant="outline" size="sm">Exportar Relatório</Button>
                            </div>
                            
                            <div className="border rounded-lg overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Data/Hora</TableHead>
                                            <TableHead>Tipo</TableHead>
                                            <TableHead>Localização</TableHead>
                                            <TableHead>Precisão</TableHead>
                                            <TableHead>Evidência</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {loadingRecords ? (
                                            <TableRow><TableCell colSpan={6} className="text-center py-8">Carregando registros...</TableCell></TableRow>
                                        ) : timeRecords.length === 0 ? (
                                            <TableRow><TableCell colSpan={6} className="text-center py-8">Nenhum registro encontrado.</TableCell></TableRow>
                                        ) : (
                                            timeRecords.map((record: any) => (
                                                <TableRow key={record.id}>
                                                    <TableCell className="font-mono">
                                                        {new Date(record.timestamp).toLocaleString()}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">{record.type}</Badge>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-col text-xs">
                                                            <span className="truncate max-w-[200px]" title={record.address}>{record.address || 'Sem endereço'}</span>
                                                            <span className="text-muted-foreground">{record.latitude?.toFixed(5)}, {record.longitude?.toFixed(5)}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        {record.accuracy ? `${Math.round(record.accuracy)}m` : '-'}
                                                    </TableCell>
                                                    <TableCell>
                                                        {record.photoUrl ? (
                                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                <ImageIcon className="h-4 w-4 text-blue-600" />
                                                            </Button>
                                                        ) : '-'}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge className={
                                                            record.status === 'APROVADO' ? 'bg-green-600' : 
                                                            record.status === 'PENDENTE' ? 'bg-yellow-600' : 
                                                            record.status === 'FORA_DA_AREA' ? 'bg-red-600' : 'bg-slate-600'
                                                        }>
                                                            {record.status}
                                                        </Badge>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'documents' && (
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">Documentos Digitais</h3>
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Upload className="h-4 w-4" /> Upload de Documento
                                </Button>
                            </div>

                            {employee.documents && employee.documents.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {employee.documents.map((doc: any) => (
                                        <div key={doc.id} className="p-4 border rounded-lg flex items-start gap-4 hover:bg-slate-50 transition-colors">
                                            <div className="p-2 bg-blue-100 rounded text-blue-600">
                                                <FileText className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="font-medium truncate" title={doc.name}>{doc.name}</p>
                                                <p className="text-xs text-muted-foreground">{doc.type}</p>
                                                <p className="text-xs text-slate-400 mt-1">{new Date(doc.createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <Button variant="ghost" size="icon" title="Baixar">
                                                <FileDown className="h-4 w-4 text-slate-500" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 text-slate-400 border-2 border-dashed rounded-lg">
                                    <FileText className="h-12 w-12 mb-4 opacity-20" />
                                    <p>Nenhum documento anexado.</p>
                                    <Button variant="outline" className="mt-4">Upload de Documento</Button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'legal' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium mb-4">Resumo Legal & Inconsistências</h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                <div className="p-4 bg-slate-50 border rounded-lg">
                                    <p className="text-sm text-muted-foreground">Horas Trabalhadas</p>
                                    <p className="text-2xl font-bold">{cltSummary?.horas_trabalhadas || 0}h</p>
                                    <p className="text-xs text-green-600">No período atual</p>
                                </div>
                                <div className="p-4 bg-slate-50 border rounded-lg">
                                    <p className="text-sm text-muted-foreground">Horas Extras</p>
                                    <p className="text-2xl font-bold text-orange-600">{cltSummary?.horas_extras || 0}h</p>
                                    <p className="text-xs text-muted-foreground">50% e 100%</p>
                                </div>
                                <div className="p-4 bg-slate-50 border rounded-lg">
                                    <p className="text-sm text-muted-foreground">Atrasos / Faltas</p>
                                    <p className="text-2xl font-bold text-red-600">{cltSummary ? (cltSummary.faltas + cltSummary.atrasos) : 0}h</p>
                                    <p className="text-xs text-green-600">Regular</p>
                                </div>
                                <div className="p-4 bg-slate-50 border rounded-lg">
                                    <p className="text-sm text-muted-foreground">Banco de Horas</p>
                                    <p className="text-2xl font-bold text-blue-600">{cltSummary?.banco_horas_saldo > 0 ? '+' : ''}{cltSummary?.banco_horas_saldo || 0}h</p>
                                    <p className="text-xs text-muted-foreground">Saldo</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="font-medium text-sm text-muted-foreground uppercase">Status de Compliance</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50 border-green-200">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Documentação Obrigatória</span>
                                        </div>
                                        <Badge className="bg-green-600">Em dia</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50 border-green-200">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span>Jornada de Trabalho</span>
                                        </div>
                                        <Badge className="bg-green-600">Regular</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                                        <div className="flex items-center gap-3">
                                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                                            <span>Intervalo Interjornada</span>
                                        </div>
                                        <Badge className="bg-yellow-600">Atenção</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'audit' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium mb-4">Logs de Auditoria</h3>
                            <div className="border rounded-lg overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Data/Hora</TableHead>
                                            <TableHead>Usuário</TableHead>
                                            <TableHead>Ação</TableHead>
                                            <TableHead>Detalhes</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {loadingAudit ? (
                                            <TableRow><TableCell colSpan={4} className="text-center py-8">Carregando logs...</TableCell></TableRow>
                                        ) : auditLogs.length === 0 ? (
                                            <TableRow><TableCell colSpan={4} className="text-center py-8 text-muted-foreground">Nenhum registro encontrado</TableCell></TableRow>
                                        ) : (
                                            auditLogs.map((log) => (
                                                <TableRow key={log.id}>
                                                    <TableCell className="font-mono text-sm">
                                                        {new Date(log.createdAt || log.timestamp).toLocaleString()}
                                                    </TableCell>
                                                    <TableCell className="font-medium">
                                                        <div className="flex items-center gap-2">
                                                            <User className="h-4 w-4 text-muted-foreground" />
                                                            {log.user?.name || 'Sistema'}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">{log.action}</Badge>
                                                    </TableCell>
                                                    <TableCell className="text-muted-foreground">
                                                        {log.details}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
