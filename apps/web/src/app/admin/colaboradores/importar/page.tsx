"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Upload, FileSpreadsheet, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

export default function ImportEmployeesPage() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [log, setLog] = useState<string[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus('idle');
            setLog([]);
            setProgress(0);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        setStatus('idle');
        setProgress(10);

        try {
            const formData = new FormData();
            formData.append('file', file);

            // Simulate progress
            const progressInterval = setInterval(() => {
                setProgress(prev => Math.min(prev + 10, 90));
            }, 300);

            const res = await fetch('http://localhost:4000/colaboradores/importar', { 
                method: 'POST', 
                body: formData 
            });

            clearInterval(progressInterval);

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || 'Falha na importação');
            }
            
            const data = await res.json();
            
            setProgress(100);
            setStatus('success');
            setUploading(false);
            
            const newLog = [
                `✅ Processamento finalizado.`,
                `📊 Total processado: ${(data.imported || 0) + (data.failed || 0)}`,
                `✅ Sucessos: ${data.imported || 0}`,
                `❌ Falhas: ${data.failed || 0}`
            ];
            
            if (data.errors && data.errors.length > 0) {
                newLog.push('--- Detalhes dos Erros ---');
                data.errors.forEach((err: any) => {
                    newLog.push(`Linha ${err.row}: ${err.error}`);
                });
            }
            
            setLog(newLog);

        } catch (error: any) {
            console.error(error);
            setStatus('error');
            setUploading(false);
            setLog([`❌ Erro: ${error.message || 'Falha ao conectar com o servidor.'}`]);
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
                    <h1 className="text-2xl font-bold">Importação em Lote</h1>
                    <p className="text-muted-foreground">Cadastre múltiplos colaboradores via planilha Excel.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="p-8 space-y-6">
                            <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors relative">
                                <input 
                                    type="file" 
                                    accept=".xlsx, .xls, .csv" 
                                    className="absolute inset-0 opacity-0 cursor-pointer" 
                                    onChange={handleFileChange}
                                    disabled={uploading}
                                />
                                <FileSpreadsheet className={`h-12 w-12 mb-4 ${file ? 'text-green-600' : 'text-slate-300'}`} />
                                {file ? (
                                    <>
                                        <p className="font-medium text-lg">{file.name}</p>
                                        <p className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-lg font-medium">Clique ou arraste o arquivo aqui</h3>
                                        <p className="text-sm text-muted-foreground mt-1">Suporta .xlsx, .xls ou .csv</p>
                                    </>
                                )}
                            </div>

                            {uploading && (
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Processando...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <Progress value={progress} />
                                </div>
                            )}

                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setFile(null)} disabled={!file || uploading}>Cancelar</Button>
                                <Button onClick={handleUpload} disabled={!file || uploading} className="gap-2">
                                    <Upload className="h-4 w-4" />
                                    {uploading ? 'Processando...' : 'Iniciar Importação'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {status === 'success' && (
                        <Alert className="border-green-200 bg-green-50">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertTitle className="text-green-800">Importação Concluída</AlertTitle>
                            <AlertDescription className="text-green-700">
                                O arquivo foi processado. Verifique os logs para mais detalhes.
                            </AlertDescription>
                        </Alert>
                    )}

                    {status === 'error' && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Erro na Importação</AlertTitle>
                            <AlertDescription>
                                Ocorreu um erro ao processar o arquivo. Verifique o formato e tente novamente.
                            </AlertDescription>
                        </Alert>
                    )}

                    {log.length > 0 && (
                        <Card className="bg-slate-950 text-slate-200 font-mono text-sm">
                            <CardContent className="p-4 space-y-1">
                                {log.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div className="space-y-6">
                    <Card className="bg-blue-50 border-blue-100">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-bold text-blue-900">Instruções</h3>
                            <ul className="space-y-2 text-sm text-blue-800 list-disc pl-4">
                                <li>Utilize o modelo padrão de importação.</li>
                                <li>Campos obrigatórios: <strong>Nome, CPF, Cargo</strong>.</li>
                                <li>O CPF deve conter apenas números.</li>
                                <li>Se o colaborador já existir (CPF), os dados serão atualizados.</li>
                            </ul>
                            <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800">
                                <FileDown className="h-4 w-4 mr-2" />
                                Baixar Modelo .xlsx
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// Helper icon
function FileDown(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M12 18v-6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    )
  }
