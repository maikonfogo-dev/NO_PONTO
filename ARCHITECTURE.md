# Arquitetura do Sistema - Gestão de Ponto SaaS

## 1. Visão Geral
O sistema é uma plataforma SaaS Multi-tenant projetada para empresas terceirizadas gerenciarem o ponto eletrônico de seus colaboradores alocados em múltiplos clientes.

## 2. Diagrama de Contexto (C4 Nível 1 - Abstração)
- **Usuários:** Super Admin, Admin Terceirizada, Gestor Cliente, Supervisor, Colaborador.
- **Sistemas Externos:** Folha de Pagamento, ERPs, Serviços de Geolocalização.
- **O Sistema:** API Backend, Frontend Web, App Mobile.

## 3. Stack Tecnológico
- **Frontend Web:** Next.js (React) - Painel Administrativo e Portal do Colaborador.
- **Frontend Mobile:** React Native / Flutter (Planejado).
- **Backend:** NestJS (Node.js) - API REST.
- **Banco de Dados:** PostgreSQL.
- **ORM:** Prisma.
- **Infraestrutura:** Docker (Dev), Cloud (AWS/Azure - Prod).

## 4. Modelo de Dados (Resumo)
O banco de dados é relacional e estruturado em torno do conceito de `Tenant` (Empresa Terceirizada).
- **Tenant:** Entidade raiz. Todos os dados são segregados pelo `tenantId`.
- **User:** Usuários do sistema. Vinculados a um Tenant (exceto Super Admin).
- **Client:** Clientes da empresa terceirizada.
- **Contract:** Vínculo entre Colaboradores e Clientes.
- **TimeEntry:** Registros de ponto imutáveis (log de auditoria).

## 5. Módulos do Backend (NestJS)
1.  **AuthModule:** Autenticação (JWT), Refresh Tokens, MFA.
2.  **UsersModule:** Gestão de usuários e perfis.
3.  **TenantsModule:** Gestão de empresas e configurações.
4.  **TimeTrackingModule:** Registro de ponto, validação de geolocalização.
5.  **ReportsModule:** Geração de espelhos e relatórios.

## 6. Fluxos Críticos
### 6.1 Registro de Ponto
1.  App envia coordenadas + foto + timestamp.
2.  Backend valida se o horário corresponde à escala (tolerância).
3.  Backend valida geolocalização (raio permitido do contrato).
4.  Registro salvo como `TimeEntry`.

### 6.2 Sincronização Offline
1.  App armazena pontos localmente (SQLite/Realm).
2.  Ao detectar conexão, envia fila de pontos para endpoint `/sync`.
3.  Backend processa em lote.

## 7. Segurança
- **RBAC:** Controle de acesso baseado em cargos (Role-Based Access Control).
- **Dados Sensíveis:** Senhas com hash (Argon2/Bcrypt).
- **Isolamento:** Middleware garante que requisições filtrem dados pelo `tenantId` do usuário logado.
