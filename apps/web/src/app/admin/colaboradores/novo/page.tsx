"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, ArrowRight, Check, Upload, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Form State Interface
interface EmployeeFormData {
  // Step 1: Personal
  name: string;
  cpf: string;
  rg: string;
  birthDate: string;
  phone: string;
  email: string; // Personal
  address: string;

  // Step 2: Professional
  position: string;
  department: string;
  function: string;
  admissionDate: string;
  contractType: string;
  matricula: string;
  contractId: string; // Should be selected from list

  // Step 3: Schedule
  scheduleId: string; // Should be selected from list
  workLocationId: string; // Should be selected

  // Step 4: Rules
  requirePhoto: boolean;
  requireGPS: boolean;
  allowManualEntry: boolean;
  
  // Step 5: Docs (Placeholder)
}

const steps = [
    { id: 1, title: "Dados Pessoais" },
    { id: 2, title: "Dados Profissionais" },
    { id: 3, title: "Jornada & Escala" },
    { id: 4, title: "Regras de Ponto" },
    { id: 5, title: "Documentos" }
];

export default function NewEmployeePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<EmployeeFormData>({
        name: "", cpf: "", rg: "", birthDate: "", phone: "", email: "", address: "",
        position: "", department: "", function: "", admissionDate: "", contractType: "CLT", matricula: "", contractId: "",
        scheduleId: "", workLocationId: "",
        requirePhoto: true, requireGPS: true, allowManualEntry: false
    });

    const [contracts, setContracts] = useState<any[]>([]);
    const [schedules, setSchedules] = useState<any[]>([]);
    const [workLocations, setWorkLocations] = useState<any[]>([]);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        fetchContracts();
        fetchSchedules();
    }, []);

    useEffect(() => {
        if (formData.contractId) {
            fetchWorkLocations(formData.contractId);
            // Reset work location when contract changes
            setFormData(prev => ({ ...prev, workLocationId: "" }));
        } else {
            setWorkLocations([]);
            setFormData(prev => ({ ...prev, workLocationId: "" }));
        }
    }, [formData.contractId]);

    const fetchContracts = async () => {
        try {
            const res = await fetch("http://localhost:4000/contratos");
            const data = await res.json();
            setContracts(data);
        } catch (e) {
            console.error("Failed to fetch contracts", e);
        }
    };

    const fetchSchedules = async () => {
        try {
            const res = await fetch("http://localhost:4000/escalas");
            const data = await res.json();
            setSchedules(data);
        } catch (e) {
            console.error("Failed to fetch schedules", e);
        }
    };

    const fetchWorkLocations = async (contractId: string) => {
        try {
            const res = await fetch(`http://localhost:4000/postos?contractId=${contractId}`);
            const data = await res.json();
            setWorkLocations(data);
        } catch (e) {
            console.error("Failed to fetch locations", e);
        }
    };

    const handleChange = (field: keyof EmployeeFormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const validateStep = () => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        if (currentStep === 1) {
            if (!formData.name) newErrors.name = "Nome é obrigatório";
            if (!formData.cpf) newErrors.cpf = "CPF é obrigatório";
            if (!formData.email) newErrors.email = "E-mail é obrigatório";
        }
        if (currentStep === 2) {
            if (!formData.position) newErrors.position = "Cargo é obrigatório";
            if (!formData.contractId) newErrors.contractId = "Contrato é obrigatório";
            if (!formData.admissionDate) newErrors.admissionDate = "Data de admissão é obrigatória";
        }
        if (currentStep === 3) {
            if (!formData.scheduleId) newErrors.scheduleId = "Escala é obrigatória";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            isValid = false;
        }

        return isValid;
    };

    const handleNext = () => {
        if (!validateStep()) {
            return;
        }

        if (currentStep < 5) setCurrentStep(prev => prev + 1);
        else handleSubmit();
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async () => {
        // Submit logic
        try {
            const payload = {
                ...formData,
                personalEmail: formData.email // Ensure it populates employee record
            };

            const res = await fetch("http://localhost:4000/colaboradores", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            
            if (res.ok) {
                router.push("/admin/colaboradores");
            } else {
                const errorData = await res.json().catch(() => ({}));
                const errorMessage = Array.isArray(errorData.message) 
                    ? errorData.message.join(", ") 
                    : (errorData.message || "Erro ao salvar colaborador. Verifique os dados e tente novamente.");
                setSubmitError(errorMessage);
            }
        } catch (e) {
            console.error(e);
            setSubmitError("Erro de conexão ao salvar colaborador.");
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
             {/* Header */}
             <div className="flex items-center gap-4">
                <Link href="/admin/colaboradores">
                    <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold">Novo Colaborador</h1>
                    <p className="text-muted-foreground">Cadastre um novo colaborador em 5 passos simples.</p>
                </div>
            </div>

            {/* Stepper */}
            <div className="flex justify-between relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10" />
                {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center gap-2 bg-white px-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                            currentStep >= step.id ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                        }`}>
                            {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                        </div>
                        <span className={`text-xs font-medium ${currentStep >= step.id ? "text-blue-600" : "text-slate-400"}`}>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Content */}
            <Card>
                <CardContent className="p-6">
                    {submitError && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Erro</AlertTitle>
                            <AlertDescription>{submitError}</AlertDescription>
                        </Alert>
                    )}

                    {currentStep === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <Label className={errors.name ? "text-red-500" : ""}>Nome Completo *</Label>
                                <Input 
                                    value={formData.name} 
                                    onChange={e => handleChange("name", e.target.value)} 
                                    className={errors.name ? "border-red-500" : ""}
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                            </div>
                            <div className="space-y-2">
                                <Label className={errors.cpf ? "text-red-500" : ""}>CPF *</Label>
                                <Input 
                                    value={formData.cpf} 
                                    onChange={e => handleChange("cpf", e.target.value)} 
                                    placeholder="000.000.000-00" 
                                    className={errors.cpf ? "border-red-500" : ""}
                                />
                                {errors.cpf && <span className="text-xs text-red-500">{errors.cpf}</span>}
                            </div>
                            <div className="space-y-2">
                                <Label>RG</Label>
                                <Input value={formData.rg} onChange={e => handleChange("rg", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Data de Nascimento</Label>
                                <Input type="date" value={formData.birthDate} onChange={e => handleChange("birthDate", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Telefone / WhatsApp</Label>
                                <Input value={formData.phone} onChange={e => handleChange("phone", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label className={errors.email ? "text-red-500" : ""}>E-mail Pessoal *</Label>
                                <Input 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={e => handleChange("email", e.target.value)} 
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                            </div>
                            <div className="col-span-2 space-y-2">
                                <Label>Endereço Completo</Label>
                                <Input value={formData.address} onChange={e => handleChange("address", e.target.value)} />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className={errors.position ? "text-red-500" : ""}>Cargo *</Label>
                                <Input 
                                    value={formData.position} 
                                    onChange={e => handleChange("position", e.target.value)} 
                                    className={errors.position ? "border-red-500" : ""}
                                />
                                {errors.position && <span className="text-xs text-red-500">{errors.position}</span>}
                            </div>
                             <div className="space-y-2">
                                <Label>Função</Label>
                                <Input value={formData.function} onChange={e => handleChange("function", e.target.value)} />
                            </div>
                             <div className="space-y-2">
                                <Label>Departamento</Label>
                                <Input value={formData.department} onChange={e => handleChange("department", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Matrícula</Label>
                                <Input value={formData.matricula} onChange={e => handleChange("matricula", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label className={errors.admissionDate ? "text-red-500" : ""}>Data de Admissão *</Label>
                                <Input 
                                    type="date" 
                                    value={formData.admissionDate} 
                                    onChange={e => handleChange("admissionDate", e.target.value)} 
                                    className={errors.admissionDate ? "border-red-500" : ""}
                                />
                                {errors.admissionDate && <span className="text-xs text-red-500">{errors.admissionDate}</span>}
                            </div>
                             <div className="space-y-2">
                                <Label>Tipo de Contrato</Label>
                                <Select value={formData.contractType} onValueChange={v => handleChange("contractType", v)}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="CLT">CLT</SelectItem>
                                        <SelectItem value="PJ">PJ</SelectItem>
                                        <SelectItem value="ESTAGIO">Estágio</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {/* Fetch Contracts/Clients here in real app */}
                             <div className="space-y-2">
                                <Label className={errors.contractId ? "text-red-500" : ""}>Contrato Vinculado *</Label>
                                <Select value={formData.contractId} onValueChange={v => handleChange("contractId", v)}>
                                    <SelectTrigger className={errors.contractId ? "border-red-500" : ""}><SelectValue placeholder="Selecione um contrato" /></SelectTrigger>
                                    <SelectContent>
                                        {contracts.map(c => (
                                            <SelectItem key={c.id} value={c.id}>{c.name} - {c.client?.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.contractId && <span className="text-xs text-red-500">{errors.contractId}</span>}
                            </div>
                         </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className={errors.scheduleId ? "text-red-500" : ""}>Escala de Trabalho *</Label>
                                    <Select value={formData.scheduleId} onValueChange={v => handleChange("scheduleId", v)}>
                                        <SelectTrigger className={errors.scheduleId ? "border-red-500" : ""}><SelectValue placeholder="Selecione uma escala" /></SelectTrigger>
                                        <SelectContent>
                                            {schedules.map(s => (
                                                <SelectItem key={s.id} value={s.id}>{s.name} ({s.type})</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.scheduleId && <span className="text-xs text-red-500">{errors.scheduleId}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label>Posto de Trabalho (Unidade)</Label>
                                    <Select value={formData.workLocationId} onValueChange={v => handleChange("workLocationId", v)} disabled={!formData.contractId}>
                                        <SelectTrigger><SelectValue placeholder="Selecione um posto" /></SelectTrigger>
                                        <SelectContent>
                                            {workLocations.length === 0 ? (
                                                <SelectItem value="disabled" disabled>Nenhum posto encontrado para este contrato</SelectItem>
                                            ) : (
                                                workLocations.map(w => (
                                                    <SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border text-sm text-slate-600">
                                <p>ℹ️ Selecione a escala para carregar automaticamente os horários de entrada, saída e intervalos.</p>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h3 className="font-medium text-lg">Regras de Validação</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">Exigir Foto</Label>
                                        <p className="text-sm text-muted-foreground">O colaborador deve tirar uma selfie a cada registro.</p>
                                    </div>
                                    <Checkbox checked={formData.requirePhoto} onCheckedChange={(c: boolean) => handleChange("requirePhoto", c)} />
                                </div>
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">Exigir Geolocalização (GPS)</Label>
                                        <p className="text-sm text-muted-foreground">Obrigatório estar com GPS ativado.</p>
                                    </div>
                                    <Checkbox checked={formData.requireGPS} onCheckedChange={(c: boolean) => handleChange("requireGPS", c)} />
                                </div>
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">Permitir Ponto Manual</Label>
                                        <p className="text-sm text-muted-foreground">Permite inserir ponto digitado (apenas em casos de emergência).</p>
                                    </div>
                                    <Checkbox checked={formData.allowManualEntry} onCheckedChange={(c: boolean) => handleChange("allowManualEntry", c)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="space-y-6 text-center py-8">
                             <div className="border-2 border-dashed rounded-lg p-10 hover:bg-slate-50 transition-colors cursor-pointer">
                                <Upload className="h-10 w-10 mx-auto text-slate-400 mb-4" />
                                <h3 className="text-lg font-medium">Upload de Documentos</h3>
                                <p className="text-sm text-muted-foreground mt-1">Arraste arquivos ou clique para selecionar</p>
                                <p className="text-xs text-slate-400 mt-4">Contrato, RG, CPF, Comprovante de Residência</p>
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium mb-2">Arquivos selecionados:</h4>
                                <p className="text-sm text-muted-foreground italic">Nenhum arquivo selecionado.</p>
                            </div>
                        </div>
                    )}

                </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
                    Anterior
                </Button>
                <Button onClick={handleNext} className="gap-2">
                    {currentStep === 5 ? "Finalizar Cadastro" : "Próximo"}
                    {currentStep < 5 && <ArrowRight className="h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}
