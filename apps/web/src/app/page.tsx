"use client";

import { useState } from "react"
import Link from "next/link"
import { PriceSimulator } from "@/components/landing/price-simulator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertTriangle, ShieldCheck, Smartphone, Users, FileText, LayoutDashboard, ArrowRight, MapPin, Building2, Gavel, Check } from "lucide-react"
import { DemoRequestModal } from "@/components/landing/demo-request-modal"

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [planPrice, setPlanPrice] = useState(3.9);

  const scrollToPlans = () => {
    if (typeof document === "undefined") return;
    const section = document.getElementById("planos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSimulator = () => {
    if (typeof document === "undefined") return;
    const section = document.getElementById("simulador-preco");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Check className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">NO PONTO</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#desafios" className="hover:text-primary transition-colors">O Desafio</Link>
            <Link href="#solucao" className="hover:text-primary transition-colors">A Solução</Link>
            <Link href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</Link>
            <Link href="#planos" className="hover:text-primary transition-colors">Planos</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-medium">Entrar</Button>
            </Link>
            <Button size="sm" className="font-bold shadow-md" onClick={() => setIsDemoModalOpen(true)}>Solicitar Demonstração</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
                🚀 Gestão de ponto inteligente
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-slate-900 leading-tight">
                Controle a jornada dos seus colaboradores.<br/>
                <span className="text-primary">Contrato por contrato.</span> No ponto.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                O NO PONTO é um sistema de ponto eletrônico feito para empresas terceirizadas que precisam de controle, transparência e segurança jurídica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 h-14 text-lg font-bold gap-2 shadow-lg hover:scale-105 transition-transform"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  👉 Solicitar Demonstração
                </Button>
                <Link href="#">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-14 text-lg font-medium gap-2">
                    Falar com Especialista
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Background Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-10 opacity-60" />
        </section>

        {/* 1. O Desafio */}
        <section id="desafios" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">O Desafio</h2>
              <p className="mt-4 text-slate-600">Por que gerenciar terceirizados é tão difícil?</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: FileText, title: "Controle manual", desc: "Planilhas frágeis e erros humanos" },
                { icon: LayoutDashboard, title: "Falta de separação", desc: "Mistura de contratos e centros de custo" },
                { icon: Users, title: "Conflitos com clientes", desc: "Dúvidas sobre a presença real" },
                { icon: Gavel, title: "Risco trabalhista", desc: "Passivo jurídico sem evidências" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center flex flex-col items-center group">
                  <div className="h-14 w-14 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. A Solução NO PONTO */}
        <section id="solucao" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 py-1 px-3 border-primary text-primary">Solução</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase">A Solução NO PONTO</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Tecnologia para garantir que sua operação aconteça conforme o contrato.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
                    <Smartphone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ponto via Celular</h3>
                    <p className="text-slate-600">App simples para o colaborador registrar o ponto com foto e hora certa.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
                    <MapPin className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Geolocalização</h3>
                    <p className="text-slate-600">Garantia de que o colaborador está no local correto de trabalho.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
                    <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Aprovação de Jornada</h3>
                    <p className="text-slate-600">Supervisores validam os pontos diariamente, evitando surpresas no fim do mês.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden md:col-span-1.5">
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Auditoria Completa</h3>
                    <p className="text-slate-600">Histórico imutável de todas as ações para segurança jurídica total.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden md:col-span-1.5">
                    <FileText className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Relatórios por Contrato</h3>
                    <p className="text-slate-600">Entregue transparência ao seu cliente com relatórios segmentados.</p>
                </div>
            </div>
          </div>
        </section>

        {/* 3. Diferenciais */}
        <section id="diferenciais" className="py-20 bg-slate-900 text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-8 uppercase">Diferenciais</h2>
                <div className="space-y-6">
                  {[
                    "Criado exclusivamente para terceirizadas",
                    "Controle total por contrato",
                    "Evidência jurídica robusta",
                    "Implantação rápida e fácil"
                  ].map((diff, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-xl">{diff}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                    <Button
                      onClick={scrollToSimulator}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 text-lg rounded-xl shadow-lg shadow-green-900/20"
                    >
                      👉 Simular Preço Agora
                    </Button>
                </div>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
                <blockquote className="relative z-10 text-2xl font-medium italic text-slate-300 leading-relaxed">
                  &quot;Menos risco, mais controle.<br/>Sua operação <span className="text-white font-bold">NO PONTO</span>.&quot;
                </blockquote>
                <div className="mt-8 border-t border-slate-700 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
                        <Check className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-white">NO PONTO</p>
                        <p className="text-sm text-slate-400">Gestão Inteligente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Planos e Simulador */}
        <section id="planos" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900 uppercase">Planos Flexíveis</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Investimento que se paga ao evitar o primeiro processo trabalhista.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Lista de Planos */}
              <div className="space-y-6">
                <div
                  className={`bg-white p-6 rounded-xl border shadow-sm transition-colors cursor-pointer ${
                    planPrice === 3.9 ? "border-primary shadow-md" : "border-slate-200 hover:border-primary/50"
                  }`}
                  onClick={() => {
                    setPlanPrice(3.9);
                    scrollToSimulator();
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Básico</h3>
                    <span className="text-2xl font-bold text-green-600">R$ 3,90 <span className="text-sm font-normal text-slate-500">/ colab</span></span>
                  </div>
                  <p className="text-slate-500 text-sm">Controle essencial para pequenas operações.</p>
                </div>

                <div
                  className={`bg-white p-6 rounded-xl relative cursor-pointer ${
                    planPrice === 6.9 ? "border-2 border-primary shadow-md" : "border border-slate-200 shadow-sm hover:border-primary/50"
                  }`}
                  onClick={() => {
                    setPlanPrice(6.9);
                    scrollToSimulator();
                  }}
                >
                  <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    RECOMENDADO
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Profissional</h3>
                    <span className="text-2xl font-bold text-green-600">R$ 6,90 <span className="text-sm font-normal text-slate-500">/ colab</span></span>
                  </div>
                  <p className="text-slate-500 text-sm">Gestão completa, geolocalização e relatórios avançados.</p>
                </div>

                <div
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
                    <span className="text-xl font-bold text-slate-900">Sob consulta</span>
                  </div>
                  <p className="text-slate-500 text-sm">Para grandes volumes e integrações personalizadas.</p>
                </div>

                <div className="pt-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <p className="text-lg font-medium text-blue-800 italic">
                      &quot;Quanto custa hoje uma ação trabalhista? No NO PONTO, por menos de R$ 7 por colaborador, você elimina esse risco.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Simulador */}
              <div className="lg:pl-8" id="simulador-preco">
                <PriceSimulator
                  onRequestDemo={() => setIsDemoModalOpen(true)}
                  planPrice={planPrice}
                  onPlanPriceChange={setPlanPrice}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 py-12 text-slate-400 text-sm border-t border-slate-900">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">NO PONTO</span>
              </div>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
                <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                <Link href="#" className="hover:text-white transition-colors">Contato</Link>
              </div>
              <p>© 2026 No Ponto SaaS. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
