# 👥 GESTÃO DE COLABORADORES - Módulo Central

> **Objetivo:** Permitir que a empresa terceirizada cadastre, organize, controle e acompanhe seus colaboradores por contrato e cliente, garantindo controle de jornada, segurança jurídica, transparência e escalabilidade.

## 1️⃣ ESTRUTURA DO COLABORADOR

### 📄 Dados Cadastrais
*   **Nome completo**
*   **CPF** (Único)
*   **Matrícula** (Identificador interno)
*   **Cargo / Função**
*   **Tipo de contrato:** CLT, PJ, Temporário
*   **Data de admissão**
*   **Status:**
    *   `ATIVO` (Pode registrar ponto)
    *   `AFASTADO` (Bloqueio temporário, mantém histórico)
    *   `DESLIGADO` (Acesso revogado, histórico preservado para LGPD)

### 🏢 Vínculos Operacionais
*   **Empresa Terceirizada:** (Tenant principal)
*   **Cliente:** (Para quem o serviço é prestado)
*   **Contrato:** (Vinculado ao Cliente)
*   **Local de trabalho (Posto):** (Geolocalização esperada)
*   **Supervisor responsável:** (Quem aprova o ponto)

> *Argumento de Venda:* "Separação clara por contrato evita conflito com cliente."

## 2️⃣ ESCALAS E JORNADA

### Tipos de Escala
*   **12x36**
*   **6x1**
*   **5x2**
*   **Personalizada**

### Parâmetros Configuráveis
*   Horário de entrada e saída
*   Intervalos (Almoço/Descanso)
*   Tolerância de atraso (ex: 10 min)
*   Horas extras permitidas (Sim/Não)

> *Automação:* O sistema valida o ponto registrado comparando com a escala definida.

## 3️⃣ REGISTRO DE PONTO (VÍNCULO)

Cada colaborador possui um registro individual com histórico completo.

### Evidências
*   Data/Hora (Timestamp imutável)
*   Geolocalização (Lat/Long)
*   Selfie (Opcional/Configurável)

### Status do Ponto
*   🟡 **Pendente:** Aguardando aprovação/verificação do supervisor.
*   🟢 **Aprovado:** Validado e contabilizado.
*   🔴 **Rejeitado:** Inconsistente ou não reconhecido.

> *Argumento de Venda:* "Prova clara da jornada."

## 4️⃣ CÁLCULOS AUTOMÁTICOS

O sistema processa automaticamente por colaborador:
*   Horas Trabalhadas
*   Atrasos
*   Faltas
*   Horas Extras
*   Banco de Horas (Crédito/Débito)

**Visualização:**
*   Espelho de Ponto Mensal
*   Relatórios por Contrato
*   Dashboard do Gestor

## 5️⃣ PERMISSÕES E VISIBILIDADE (RBAC)

| Perfil | O que vê |
| :--- | :--- |
| **Admin Terceirizada** | Todos os colaboradores, clientes e contratos. |
| **Gestor Cliente** | Apenas colaboradores alocados no seu contrato. |
| **Supervisor** | Apenas a equipe sob sua responsabilidade direta. |
| **Colaborador** | Apenas seus próprios dados e histórico. |

> *Diferencial:* O cliente nunca vê dados de outros contratos ou da terceirizada como um todo.

## 6️⃣ CICLO DE VIDA

1.  **Admissão:** Cadastro -> Vínculo Contrato -> Definição Escala -> Liberação App.
2.  **Alteração:** Troca de posto/contrato ou mudança de escala (Histórico preservado).
3.  **Afastamento:** Bloqueio de registro (Férias/INSS), histórico mantido.
4.  **Desligamento:** Revogação de acesso, dados arquivados para conformidade LGPD.

## 7️⃣ DASHBOARD DE COLABORADORES

**Indicadores (KPIs):**
*   Total de Ativos
*   Faltas no Dia
*   Atrasos em Tempo Real
*   Horas Extras Acumuladas
*   Headcount por Contrato

**Filtros:** Cliente, Contrato, Status, Período.

## 8️⃣ ALERTAS E NOTIFICAÇÕES

**Gatilhos Automáticos:**
*   Ponto não registrado (esquecimento)
*   Atraso identificado
*   Falta não justificada
*   Registro fora do perímetro (Geofence)
*   Mudança de escala

**Canais:** Notificação Push (App), E-mail, WhatsApp (Add-on).

## 9️⃣ CASOS DE USO (Demo & Venda)

### Caso 1 – Novo Colaborador
*   **Fluxo:** Admin cadastra -> define contrato/escala -> colaborador baixa o app e já pode bater ponto.
*   **Valor:** Agilidade na implantação (Onboarding rápido).

### Caso 2 – Cliente Acessa
*   **Fluxo:** Cliente faz login -> vê apenas sua equipe -> gera relatório de fechamento.
*   **Valor:** Transparência total e redução de e-mails/cobranças.

### Caso 3 – Auditoria
*   **Fluxo:** Admin consulta histórico antigo -> visualiza evidências (foto+mapa) -> comprova jornada.
*   **Valor:** Segurança jurídica absoluta (Zero questionamento).

---

**💰 CONEXÃO COM A VENDA**
"Cada colaborador no sistema é totalmente controlado por contrato, escala e evidência. Isso reduz risco trabalhista e aumenta a confiança do seu cliente."
