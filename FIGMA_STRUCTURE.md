# Estrutura de Design & UX (Figma)

Este documento serve como guia para a organização do arquivo de design no Figma, garantindo consistência entre Design e Desenvolvimento.

## 📂 Estrutura de Páginas

1.  **00 - Cover**: Capa do projeto com status e versão.
2.  **01 - Design System**: Tokens de cor, tipografia, componentes base.
3.  **02 - Fluxos**: Diagramas de jornada do usuário (User Flows).
4.  **03 - Web | Admin Terceirizada**: Telas do painel de gestão.
5.  **04 - Web | Cliente**: Telas da visão do cliente contratante.
6.  **05 - Mobile | Colaborador**: Telas do app mobile.
7.  **06 - Dashboards**: Visualizações de dados e KPIs.
8.  **07 - Estados & Erros**: Telas de 404, sem conexão, mensagens de erro, loadings.

## 🎨 Design System

### Cores (Tokens)
-   **Primary**: Cor da marca da Terceirizada (Personalizável).
-   **Status**:
    -   🟡 **Warning/Pendente**: `#F59E0B` (Amber-500)
    -   🟢 **Success/Aprovado**: `#10B981` (Emerald-500)
    -   🔴 **Error/Rejeitado**: `#EF4444` (Red-500)
-   **Neutral**: Escala de cinzas para textos e bordas.

### Tipografia
-   **Font Family**: Inter (ou similar sans-serif).
-   **H1 (Page Title)**: 24px / Bold.
-   **H2 (Section)**: 20px / SemiBold.
-   **Body**: 16px / Regular.
-   **Caption**: 12px / Medium (Labels, badges).

### Componentes Obrigatórios
1.  **Botões**:
    -   Primary (Solid)
    -   Secondary (Outline)
    -   Ghost (Text only)
    -   Danger (Red)
2.  **Inputs**:
    -   Text Field
    -   Date Picker
    -   Select Dropdown
3.  **Feedback**:
    -   Badges de Status (Pill shape)
    -   Modais de Confirmação
    -   Toasts (Notificações flutuantes)

## 📱 Fluxos Principais (Wireframes)

### 1. Registro de Ponto (Mobile)
-   **Tela Home**: Mapa de fundo (opcional), botão grande "Registrar Ponto".
-   **Modal Confirmação**: Mostra horário atual, localização aproximada. Botão "Confirmar".
-   **Feedback**: Animação de sucesso e atualização do card "Último registro".

### 2. Gestão de Contratos (Web Admin)
-   **Lista**: Tabela com colunas (Cliente, Contrato, Vigência, Status).
-   **Ações**: Botões de Editar, Pausar, Ver Colaboradores.

### 3. Aprovação em Lote (Web Supervisor)
-   **Filtros**: Por período, por status "Pendente".
-   **Grid**: Lista de pontos com checkbox para seleção múltipla.
-   **Action Bar**: Botão "Aprovar Selecionados".

## 🤖 Prompt para Geração de UI (AI)
Use este prompt em ferramentas como Midjourney ou Uizard para inspiração:

> "SaaS dashboard UI design for workforce management, clean corporate style, mobile-first approach. Features: KPI cards, data tables with status badges, sidebar navigation. Color palette: Navy blue primary, white background, soft gray accents. High fidelity, Figma style."
