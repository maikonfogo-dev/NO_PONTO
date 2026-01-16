"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, ArrowRight, Check, Upload, AlertCircle, Trash2, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Form State Interface
interface ClientFormData {
  // Step 1: Company Data
  name: string;
  tradeName: string;
  cnpj: string;
  address: string;
  stateRegistration: string;
  financialContact: string;
  operationalContact: string;

  // Step 2: Plan
  plan: string;
  price: string;
  quantity: string;
  billingCycle: string;

  // Step 3: Units
  units: {
    name: string;
    address: string;
    latitude: string;
    longitude: string;
    radius: string;
  }[];

  // Step 4: Admin User
  adminName: string;
  adminEmail: string;

  // Step 5: Docs (Placeholder)
}

const steps = [
    { id: 1, title: "Dados da Empresa" },
    { id: 2, title: "Plano e Cobrança" },
    { id: 3, title: "Unidades / Postos" },
    { id: 4, title: "Usuário Administrador" },
    { id: 5, title: "Documentos" }
];

export default function NewClientPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<ClientFormData>({
        name: "", tradeName: "", cnpj: "", address: "", stateRegistration: "", financialContact: "", operationalContact: "",
        plan: "PRO", price: "29.90", quantity: "10", billingCycle: "MENSAL",
        units: [],
        adminName: "", adminEmail: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const addUnit = () => {
        setFormData({
            ...formData,
            units: [...formData.units, { name: "", address: "", latitude: "0", longitude: "0", radius: "50" }]
        });
    };

    const removeUnit = (index: number) => {
        const newUnits = [...formData.units];
        newUnits.splice(index, 1);
        setFormData({ ...formData, units: newUnits });
    };

    const updateUnit = (index: number, field: string, value: string) => {
        const newUnits = [...formData.units];
        newUnits[index] = { ...newUnits[index], [field]: value };
        setFormData({ ...formData, units: newUnits });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const payload = {
                name: formData.name,
                tradeName: formData.tradeName,
                cnpj: formData.cnpj,
                address: formData.address,
                stateRegistration: formData.stateRegistration,
                financialContact: formData.financialContact,
                operationalContact: formData.operationalContact,
                plan: formData.plan,
                price: parseFloat(formData.price),
                quantity: parseInt(formData.quantity),
                billingCycle: formData.billingCycle,
                units: formData.units.map(u => ({
                    ...u,
                    latitude: parseFloat(u.latitude),
                    longitude: parseFloat(u.longitude),
                    radius: parseInt(u.radius)
                })),
                adminUser: {
                    name: formData.adminName,
                    email: formData.adminEmail
                }
            };

            const res = await fetch("http://localhost:4000/clientes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Erro ao criar cliente");
            }

            // Success
            router.push("/admin/clients");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/clients">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Novo Cliente</h1>
                    <p className="text-muted-foreground">Cadastre uma nova empresa no sistema.</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2" />
                <div className="relative flex justify-between">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center gap-2 bg-white z-10 px-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                                currentStep >= step.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
                            }`}>
                                {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                            </div>
                            <span className={`text-xs font-medium ${
                                currentStep >= step.id ? "text-slate-900" : "text-slate-500"
                            }`}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Card>
                <CardContent className="pt-6">
                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Erro</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Razão Social</Label>
                                    <Input 
                                        value={formData.name} 
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Ex: Minha Empresa LTDA"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Nome Fantasia</Label>
                                    <Input 
                                        value={formData.tradeName} 
                                        onChange={(e) => setFormData({...formData, tradeName: e.target.value})}
                                        placeholder="Ex: Minha Empresa"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>CNPJ</Label>
                                    <Input 
                                        value={formData.cnpj} 
                                        onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                                        placeholder="00.000.000/0000-00"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Inscrição Estadual</Label>
                                    <Input 
                                        value={formData.stateRegistration} 
                                        onChange={(e) => setFormData({...formData, stateRegistration: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Endereço Completo</Label>
                                <Input 
                                    value={formData.address} 
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Contato Financeiro</Label>
                                    <Input 
                                        value={formData.financialContact} 
                                        onChange={(e) => setFormData({...formData, financialContact: e.target.value})}
                                        placeholder="Nome / Email / Telefone"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Contato Operacional</Label>
                                    <Input 
                                        value={formData.operationalContact} 
                                        onChange={(e) => setFormData({...formData, operationalContact: e.target.value})}
                                        placeholder="Nome / Email / Telefone"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Plano SaaS</Label>
                                    <Select 
                                        value={formData.plan} 
                                        onValueChange={(val) => setFormData({...formData, plan: val})}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="BASIC">Basic</SelectItem>
                                            <SelectItem value="PRO">Pro</SelectItem>
                                            <SelectItem value="ENTERPRISE">Enterprise</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Ciclo de Cobrança</Label>
                                    <Select 
                                        value={formData.billingCycle} 
                                        onValueChange={(val) => setFormData({...formData, billingCycle: val})}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="MENSAL">Mensal</SelectItem>
                                            <SelectItem value="ANUAL">Anual</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Quantidade Contratada (Vidas)</Label>
                                    <Input 
                                        type="number"
                                        value={formData.quantity} 
                                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Valor Unitário (R$)</Label>
                                    <Input 
                                        type="number"
                                        step="0.01"
                                        value={formData.price} 
                                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">Resumo da Cobrança</h3>
                                <div className="flex justify-between text-sm">
                                    <span>Total Estimado ({formData.billingCycle}):</span>
                                    <span className="font-bold">
                                        R$ {(parseFloat(formData.price || "0") * parseInt(formData.quantity || "0")).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label>Unidades / Postos de Trabalho Iniciais</Label>
                                <Button variant="outline" size="sm" onClick={addUnit} className="gap-2">
                                    <Plus className="h-4 w-4" />
                                    Adicionar Unidade
                                </Button>
                            </div>
                            
                            {formData.units.length === 0 ? (
                                <div className="text-center py-8 border-2 border-dashed rounded-lg text-muted-foreground">
                                    Nenhuma unidade adicionada. Clique em adicionar para cadastrar postos.
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {formData.units.map((unit, index) => (
                                        <div key={index} className="p-4 border rounded-lg relative space-y-3">
                                            <Button 
                                                variant="ghost" 
                                                size="icon" 
                                                className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                                onClick={() => removeUnit(index)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                            
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>Nome da Unidade</Label>
                                                    <Input 
                                                        value={unit.name} 
                                                        onChange={(e) => updateUnit(index, "name", e.target.value)}
                                                        placeholder="Ex: Matriz, Filial RJ"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Endereço</Label>
                                                    <Input 
                                                        value={unit.address} 
                                                        onChange={(e) => updateUnit(index, "address", e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="space-y-2">
                                                    <Label>Latitude</Label>
                                                    <Input 
                                                        value={unit.latitude} 
                                                        onChange={(e) => updateUnit(index, "latitude", e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Longitude</Label>
                                                    <Input 
                                                        value={unit.longitude} 
                                                        onChange={(e) => updateUnit(index, "longitude", e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Raio (m)</Label>
                                                    <Input 
                                                        type="number"
                                                        value={unit.radius} 
                                                        onChange={(e) => updateUnit(index, "radius", e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                                <p className="text-sm text-blue-800">
                                    O usuário administrador receberá um e-mail com as credenciais de acesso. 
                                    A senha temporária padrão será enviada.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <Label>Nome do Administrador</Label>
                                <Input 
                                    value={formData.adminName} 
                                    onChange={(e) => setFormData({...formData, adminName: e.target.value})}
                                    placeholder="Nome completo"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>E-mail de Acesso</Label>
                                <Input 
                                    type="email"
                                    value={formData.adminEmail} 
                                    onChange={(e) => setFormData({...formData, adminEmail: e.target.value})}
                                    placeholder="admin@cliente.com"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="text-center py-10 space-y-4">
                            <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                                <Upload className="h-8 w-8 text-slate-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Upload de Documentos</h3>
                                <p className="text-muted-foreground max-w-sm mx-auto">
                                    Arraste e solte o Contrato Social e outros documentos aqui, ou clique para selecionar.
                                </p>
                            </div>
                            <Button variant="outline" className="mt-4">
                                Selecionar Arquivos
                            </Button>
                            
                            <p className="text-xs text-muted-foreground pt-4">
                                * Funcionalidade de upload será habilitada após a criação do registro.
                            </p>
                        </div>
                    )}

                    <div className="flex justify-between mt-8 pt-4 border-t">
                        <Button 
                            variant="outline" 
                            onClick={handleBack} 
                            disabled={currentStep === 1 || loading}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Voltar
                        </Button>
                        <Button 
                            onClick={handleNext} 
                            disabled={loading}
                            className={currentStep === 5 ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                            {loading ? "Processando..." : currentStep === 5 ? "Finalizar Cadastro" : "Próximo"}
                            {currentStep !== 5 && <ArrowRight className="h-4 w-4 ml-2" />}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
