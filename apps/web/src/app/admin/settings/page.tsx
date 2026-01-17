"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building2, Bell, Shield, Clock, Link2, Settings } from "lucide-react";

export default function SettingsPage() {
  const [productName, setProductName] = useState("NO PONTO – Gestão de Ponto");
  const [publicUrl, setPublicUrl] = useState("https://seu-dominio.com");
  const [supportEmail, setSupportEmail] = useState("suporte@noponto.com");
  const [timezone, setTimezone] = useState("America/Sao_Paulo");

  const [defaultRequirePhoto, setDefaultRequirePhoto] = useState(true);
  const [defaultRequireGPS, setDefaultRequireGPS] = useState(true);
  const [defaultAllowManualEntry, setDefaultAllowManualEntry] = useState(false);
  const [defaultTolerance, setDefaultTolerance] = useState("10");
  const [defaultRadius, setDefaultRadius] = useState("50");

  const [notifyNewDemo, setNotifyNewDemo] = useState(true);
  const [notifyDelays, setNotifyDelays] = useState(true);
  const [notifyExports, setNotifyExports] = useState(false);
  const [notificationsEmail, setNotificationsEmail] = useState("comercial@noponto.com");

  const [enforce2FA, setEnforce2FA] = useState(false);
  const [lockAfterAttempts, setLockAfterAttempts] = useState("5");
  const [sessionTimeout, setSessionTimeout] = useState("30");

  const handleSave = () => {
    toast.success("Configurações salvas (mock). Integração com backend pode ser feita depois.");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Settings className="h-6 w-6 text-primary" />
            Configurações do SaaS
          </h1>
          <p className="text-muted-foreground">
            Centralize os ajustes globais do produto, regras de ponto, notificações e segurança.
          </p>
        </div>
        <Button onClick={handleSave}>
          Salvar alterações
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="billing">Plano & Faturamento</TabsTrigger>
          <TabsTrigger value="timekeeping">Ponto & Regras</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Identidade do Produto
              </CardTitle>
              <CardDescription>
                Informações gerais exibidas no painel, e-mails e materiais comerciais.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Nome do produto</Label>
                <Input
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Nome do sistema"
                />
              </div>
              <div className="space-y-2">
                <Label>URL pública</Label>
                <div className="flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-muted-foreground" />
                  <Input
                    value={publicUrl}
                    onChange={(e) => setPublicUrl(e.target.value)}
                    placeholder="https://app.suaempresa.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>E-mail de suporte</Label>
                <Input
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  placeholder="suporte@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <Label>Fuso horário padrão</Label>
                <Input
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  placeholder="America/Sao_Paulo"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Notas internas</Label>
                <Textarea
                  rows={3}
                  placeholder="Observações internas sobre o ambiente de produção, integrações e políticas globais."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Plano, limites e faturamento</CardTitle>
              <CardDescription>
                Visão geral do plano atual e limites operacionais do SaaS.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
              <div className="space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Plano atual</span>
                <div className="text-lg font-semibold">PRO</div>
                <p className="text-xs text-muted-foreground">
                  Ideal para empresas terceirizadas de médio porte.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Limite de clientes</span>
                <div className="text-lg font-semibold">Ilimitado</div>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Limite de colaboradores</span>
                <div className="text-lg font-semibold">10.000+</div>
              </div>
              <div className="space-y-2 md:col-span-3">
                <Label>Instruções de cobrança</Label>
                <Textarea
                  rows={3}
                  placeholder="Detalhe aqui como a cobrança é feita (gateway, recorrência, notas fiscais, etc.)."
                />
              </div>
              <div className="md:col-span-3 flex gap-3">
                <Button variant="outline">
                  Gerenciar faturas
                </Button>
                <Button variant="outline">
                  Configurar meios de pagamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timekeeping">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Regras globais de ponto
              </CardTitle>
              <CardDescription>
                Definições padrão aplicadas a novos colaboradores e contratos.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="requirePhoto"
                  checked={defaultRequirePhoto}
                  onCheckedChange={(val) => setDefaultRequirePhoto(Boolean(val))}
                />
                <div className="space-y-1">
                  <Label htmlFor="requirePhoto">Exigir foto na batida por padrão</Label>
                  <p className="text-xs text-muted-foreground">
                    Ativa reconhecimento por foto para novos colaboradores automaticamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="requireGPS"
                  checked={defaultRequireGPS}
                  onCheckedChange={(val) => setDefaultRequireGPS(Boolean(val))}
                />
                <div className="space-y-1">
                  <Label htmlFor="requireGPS">Exigir geolocalização por padrão</Label>
                  <p className="text-xs text-muted-foreground">
                    Solicita GPS ou localização aproximada em todas as batidas.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="allowManual"
                  checked={defaultAllowManualEntry}
                  onCheckedChange={(val) => setDefaultAllowManualEntry(Boolean(val))}
                />
                <div className="space-y-1">
                  <Label htmlFor="allowManual">Permitir ajustes manuais de ponto</Label>
                  <p className="text-xs text-muted-foreground">
                    Habilita registro manual em casos excepcionais, sempre com auditoria.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tolerância padrão (minutos)</Label>
                <Input
                  type="number"
                  min={0}
                  value={defaultTolerance}
                  onChange={(e) => setDefaultTolerance(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Raio padrão de geofencing (metros)</Label>
                <Input
                  type="number"
                  min={0}
                  value={defaultRadius}
                  onChange={(e) => setDefaultRadius(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notificações e alertas
              </CardTitle>
              <CardDescription>
                Configure quais eventos geram alertas para o dono do SaaS ou equipe de backoffice.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="notifyDemo"
                    checked={notifyNewDemo}
                    onCheckedChange={(val) => setNotifyNewDemo(Boolean(val))}
                  />
                  <div className="space-y-1">
                    <Label htmlFor="notifyDemo">Novas solicitações de demonstração</Label>
                    <p className="text-xs text-muted-foreground">
                      Enviar e-mail sempre que um novo lead solicitar demonstração na landing page.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="notifyDelays"
                    checked={notifyDelays}
                    onCheckedChange={(val) => setNotifyDelays(Boolean(val))}
                  />
                  <div className="space-y-1">
                    <Label htmlFor="notifyDelays">Alertas de atraso e faltas críticas</Label>
                    <p className="text-xs text-muted-foreground">
                      Destacar automaticamente clientes com alto índice de inconsistências.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="notifyExports"
                    checked={notifyExports}
                    onCheckedChange={(val) => setNotifyExports(Boolean(val))}
                  />
                  <div className="space-y-1">
                    <Label htmlFor="notifyExports">Exportações massivas de dados</Label>
                    <p className="text-xs text-muted-foreground">
                      Notificar quando relatórios grandes forem exportados (PDF/Excel).
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Label>E-mail principal para notificações</Label>
                <Input
                  type="email"
                  value={notificationsEmail}
                  onChange={(e) => setNotificationsEmail(e.target.value)}
                  placeholder="notificacoes@empresa.com"
                />
                <p className="text-xs text-muted-foreground">
                  Todos os alertas críticos serão enviados para este endereço.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Segurança e acesso
              </CardTitle>
              <CardDescription>
                Parâmetros globais de segurança para o acesso ao painel administrativo.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="enforce2FA"
                  checked={enforce2FA}
                  onCheckedChange={(val) => setEnforce2FA(Boolean(val))}
                />
                <div className="space-y-1">
                  <Label htmlFor="enforce2FA">Exigir 2FA para administradores</Label>
                  <p className="text-xs text-muted-foreground">
                    Solicitar autenticação em dois fatores para usuários com perfil de dono ou gestor.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tentativas antes de bloqueio</Label>
                <Input
                  type="number"
                  min={1}
                  value={lockAfterAttempts}
                  onChange={(e) => setLockAfterAttempts(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Quantidade de tentativas de login inválidas antes de bloquear o usuário.
                </p>
              </div>
              <div className="space-y-2">
                <Label>Duração da sessão (minutos)</Label>
                <Input
                  type="number"
                  min={5}
                  value={sessionTimeout}
                  onChange={(e) => setSessionTimeout(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Tempo de inatividade antes de desconectar automaticamente.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

