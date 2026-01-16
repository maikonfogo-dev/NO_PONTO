import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  FileText, 
  Settings, 
  LogOut,
  Check,
  ClipboardCheck
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Building2, label: "Clientes", href: "/admin/clients" },
  { icon: Users, label: "Colaboradores", href: "/admin/colaboradores" },
  { icon: ClipboardCheck, label: "Espelho de Ponto", href: "/admin/espelho-ponto" },
  { icon: FileText, label: "Relatórios", href: "/admin/reports" },
  { icon: FileText, label: "Demonstrações", href: "/admin/demo-requests" },
  { icon: Settings, label: "Configurações", href: "/admin/settings" },
];

const quickLinks = [
  { icon: Users, label: "Importar Colaboradores", href: "/admin/colaboradores/importar" },
  { icon: FileText, label: "Relatórios Financeiros", href: "/admin/reports/financeiro" },
  { icon: FileText, label: "Exportações", href: "/admin/reports/exportacoes" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col fixed left-0 top-0">
      <div className="mb-8 px-2 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Check className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">NO PONTO</span>
      </div>

      <div className="flex-1 space-y-6">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Navegação
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Atalhos rápidos
          </div>
          <nav className="space-y-1">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-300/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30 gap-3">
          <LogOut className="h-5 w-5" />
          Sair
        </Button>
      </div>
    </aside>
  );
}
