import { Sidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 pl-64">
      {/* Sidebar Fixa */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900">
         <Sidebar />
      </div>
      
      {/* Conteúdo Principal */}
      <main className="p-8">
        {children}
      </main>
    </div>
  );
}
