# Manual do Administrador - No Ponto SaaS

Bem-vindo ao manual do administrador do **No Ponto**, a plataforma definitiva para gestão de ponto eletrônico em empresas de terceirização.

## 1. Visão Geral do Painel (Dashboard)

Ao fazer login como Administrador (`/admin`), você terá acesso imediato aos indicadores vitais da operação.

### Indicadores (KPIs)
*   **Total de Colaboradores:** Número total de funcionários ativos na plataforma.
*   **Pontos Hoje:** Contagem em tempo real de registros efetuados no dia.
*   **Pendências:** Alertas críticos que exigem ação imediata (ex: pontos não batidos, geolocalização divergente).
*   **Horas Extras:** Acúmulo de horas excedentes no período.

### Tabela de Registros Recentes
Esta tabela é **atualizada em tempo real** e mostra os últimos pontos batidos por qualquer colaborador em campo.
*   **Status Verde (No Prazo):** Ponto registrado dentro do horário previsto.
*   **Status Amarelo (Atraso):** Registro efetuado após o horário de tolerância.
*   **Status Vermelho (Revisão):** Problemas detectados (ex: fora da cerca geográfica, sem foto).
*   **Status Cinza (Pendente):** Aguardando processamento ou aprovação do supervisor.

## 2. Gestão de Colaboradores

Este é o coração do sistema, onde você organiza sua força de trabalho por contrato.

### Estrutura de Cadastro
Para cada colaborador, o sistema armazena:
*   **Dados Pessoais:** Nome, CPF, Matrícula.
*   **Vínculos:** Empresa Terceirizada, Cliente e Contrato específico.
*   **Status:** Ativo, Afastado (férias/INSS) ou Desligado.

### Configuração de Escalas
O sistema suporta múltiplos modelos de jornada:
*   **12x36:** Plantonistas.
*   **6x1:** Comércio/Serviços.
*   **5x2:** Administrativo.
*   **Personalizada:** Horários flexíveis.

> **Importante:** O sistema cruza o horário do ponto com a escala definida para calcular atrasos automaticamente.

## 3. Relatórios e Fechamento

### Espelho de Ponto
Gere o espelho de ponto individual ou em lote (por contrato). O documento já vem calculado com:
*   Horas Trabalhadas.
*   Saldo de Banco de Horas.
*   Adicional Noturno (se configurado).

### Visão do Cliente
Seu cliente pode ter um acesso restrito (`Gestor Cliente`) para visualizar apenas os colaboradores alocados no contrato dele, garantindo transparência sem expor dados de outros clientes.

## 4. Casos de Uso Comuns

### Novo Colaborador (Admissão)
1.  Acesse **Colaboradores > Novo**.
2.  Preencha os dados e selecione o **Contrato**.
3.  Defina a **Escala de Trabalho**.
4.  O colaborador baixa o App e faz login com CPF/Matrícula.

### Auditoria de Ponto (Segurança Jurídica)
Caso um colaborador ou sindicato questione a jornada:
1.  Acesse o **Histórico do Colaborador**.
2.  Localize o dia em questão.
3.  Visualize as evidências: **Foto (Selfie)** + **Mapa (GPS ou Rede)**.
4.  Exporte o relatório como prova documental.

## 5. Flexibilidade de Dispositivos (PC e Mobile)
O sistema foi projetado para operar em qualquer dispositivo com acesso à internet:
*   **Celular (App/Web):** Utiliza GPS de alta precisão e câmera frontal para reconhecimento facial.
*   **Computador (Desktop/Notebook):** Utiliza geolocalização via Wi-Fi/Rede (IP) e webcam disponível (interna ou USB).
    *   *Nota:* O sistema detecta automaticamente o dispositivo e ajusta a precisão exigida da localização.

## 6. Configurações
*   Definição de regras de tolerância (ex: 10 minutos).
*   Gestão de usuários administrativos.
*   Integrações API.
