"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const reportMenuItems = [
  { label: "Visão Geral", href: "/admin/reports" },
  { label: "Espelho de Ponto", href: "/admin/reports/espelho" },
  { label: "Jornada & Horas", href: "/admin/reports/jornada" },
  { label: "Extras & Banco", href: "/admin/reports/banco-horas" },
  { label: "Atrasos & Faltas", href: "/admin/reports/faltas" },
  { label: "Escalas & Turnos", href: "/admin/reports/escalas" },
  { label: "Localização", href: "/admin/reports/localizacao" },
  { label: "Auditoria", href: "/admin/reports/auditoria" },
  { label: "Financeiro", href: "/admin/reports/financeiro" },
  { label: "Exportações", href: "/admin/reports/exportacoes" },
];

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Relatórios Gerenciais
        </h1>
        <p className="text-muted-foreground mt-1">
          Dados estratégicos para decisão, compliance e eficiência.
        </p>
      </div>

      {/* Menu de Navegação Horizontal */}
      <div className="w-full overflow-x-auto pb-2">
        <nav className="flex space-x-2">
          {reportMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="min-h-[500px]">
        {children}
      </div>
    </div>
  );
}
