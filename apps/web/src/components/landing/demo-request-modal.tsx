"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import Turnstile from "react-turnstile";

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    employees: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error("Por favor, complete a verificação de segurança.");
      return;
    }
    setLoading(true);

    try {
      await api.post("/demo-requests", { ...formData, captchaToken });
      setSuccess(true);
      toast.success("Solicitação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao solicitar demonstração:", error);
      toast.error("Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Solicitação Recebida!</h2>
            <p className="text-slate-600">
              Obrigado pelo interesse. Nossa equipe entrará em contato em breve para agendar sua demonstração.
            </p>
            <Button onClick={onClose} className="w-full mt-4">
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Solicitar Demonstração</h2>
              <p className="text-slate-600 mt-1">
                Preencha seus dados e conheça como o NO PONTO pode transformar sua gestão.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Corporativo</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="seu@empresa.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="(11) 99999-9999" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Nome da Empresa</Label>
                <Input 
                  id="companyName" 
                  name="companyName" 
                  placeholder="Sua empresa" 
                  required 
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employees">Número de Colaboradores</Label>
                <Input 
                  id="employees" 
                  name="employees" 
                  placeholder="Ex: 50" 
                  required 
                  value={formData.employees}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center py-2">
                <Turnstile
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                  onVerify={(token: string) => setCaptchaToken(token)}
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-semibold mt-2" disabled={loading || !captchaToken}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                  </>
                ) : (
                  "Solicitar Demonstração Gratuita"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
