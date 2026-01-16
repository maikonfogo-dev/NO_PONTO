import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <Card className="w-full h-[400px] flex items-center justify-center border-dashed">
      <div className="flex flex-col items-center space-y-4 text-slate-500">
        <Construction className="h-12 w-12" />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>Este relatório está em desenvolvimento.</p>
      </div>
    </Card>
  );
}
