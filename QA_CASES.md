# Casos de Teste (QA / Homologação)

Este documento descreve os cenários de teste essenciais para garantir a qualidade e conformidade do sistema No Ponto SaaS.

## 🧪 Testes Funcionais

### Caso 01 – Registro de Ponto Válido
- **Pré-condição:** Colaborador ativo, logado no app, dentro do horário de escala e dentro do raio de geolocalização.
- **Ação:** Clicar em "Registrar Ponto" > Selecionar Tipo (Entrada/Saída).
- **Resultado Esperado:**
  - O sistema deve capturar Data/Hora, Latitude/Longitude e Foto (se configurado).
  - Mensagem de sucesso "Ponto registrado com sucesso".
  - O registro deve aparecer no histórico com status **Pendente** (se houver fluxo de aprovação) ou **Aprovado**.

### Caso 02 – Registro Fora da Geolocalização (Geo-fencing)
- **Pré-condição:** Colaborador ativo, logado, mas fisicamente fora do raio permitido do contrato (ex: > 200m).
- **Ação:** Tentar registrar o ponto.
- **Resultado Esperado:**
  - O sistema deve bloquear o registro OU emitir um alerta impeditivo.
  - Mensagem de erro: "Você está fora do local de trabalho permitido."
  - O botão de registro pode estar desabilitado visualmente.

### Caso 03 – Aprovação de Ponto pelo Supervisor
- **Pré-condição:** Existir um ponto com status **Pendente** (ex: ajuste manual ou fora de horário). Supervisor logado no painel Web.
- **Ação:** Supervisor acessa "Aprovações", seleciona o registro e clica em "Aprovar".
- **Resultado Esperado:**
  - Status do registro muda para **Aprovado**.
  - O registro passa a compor o cálculo de horas trabalhadas/banco de horas.
  - O registro fica bloqueado para edição pelo colaborador.

### Caso 04 – Segregação de Dados (Multi-tenant/Multi-contrato)
- **Pré-condição:** Gestor do Cliente "A" logado. Existem dados de colaboradores do Cliente "A" e do Cliente "B".
- **Ação:** Gestor acessa a lista de colaboradores ou relatórios.
- **Resultado Esperado:**
  - O gestor deve visualizar **APENAS** colaboradores alocados ao contrato do Cliente "A".
  - Não deve haver vazamento de dados de outros contratos ou empresas.

### Caso 05 – Fechamento Mensal
- **Pré-condição:** Admin da Terceirizada logado. Fim do ciclo de folha (ex: dia 30).
- **Ação:** Admin acessa "Fechamento", seleciona o período e clica em "Fechar Folha".
- **Resultado Esperado:**
  - Todos os registros do período são marcados como "Fechados".
  - Nenhuma alteração (edição/exclusão) é permitida nesses registros.
  - Geração automática do espelho de ponto em PDF.

## 🧪 Testes de Segurança

### Caso 06 – Tentativa de Acesso Sem Token
- **Ação:** Tentar acessar rota protegida da API (ex: `/api/v1/time-entries`) sem Header Authorization.
- **Resultado Esperado:** Retorno HTTP 401 Unauthorized.

### Caso 07 – Acesso Cross-Tenant
- **Ação:** Usuário da Empresa X tenta acessar dados da Empresa Y via ID na URL.
- **Resultado Esperado:** Retorno HTTP 403 Forbidden ou 404 Not Found (O sistema deve filtrar sempre pelo `tenantId` do token).

## 🧪 Testes de Performance

### Caso 08 – Sincronização em Massa (Offline -> Online)
- **Cenário:** 50 colaboradores enviam pontos acumulados offline simultaneamente ao recuperar conexão.
- **Resultado Esperado:** O backend deve processar a fila sem timeout e sem duplicidade de registros.
