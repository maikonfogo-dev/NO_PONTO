# Roadmap do Produto - No Ponto SaaS

Este documento define a estratégia de evolução do produto, desde o MVP (Mínimo Produto Viável) até a escala Enterprise.

## 📅 Fase 1: MVP (Mês 1-2)
**Objetivo:** Validar o produto com early adopters (pequenas terceirizadas).

### Funcionalidades Core
- [x] **Arquitetura Multi-tenant:** Setup de banco e backend.
- [ ] **App Mobile (PWA):** Registro de ponto com geolocalização.
- [ ] **Painel Admin:** Cadastro de empresas, contratos e colaboradores.
- [ ] **Relatórios Básicos:** Espelho de ponto simples (PDF).
- [ ] **Auth:** Login por E-mail/Senha.

### Critérios de Sucesso
- 5 Empresas cadastradas.
- 100 Colaboradores ativos.
- < 1% de falhas no registro de ponto.

---

## 📅 Fase 2: Gestão & Compliance (Mês 3-4)
**Objetivo:** Atender requisitos jurídicos e operacionais de médias empresas.

### Funcionalidades
- [ ] **Fluxo de Aprovação:** Gestores validam inconsistências.
- [ ] **Regras de Escala:** Validação automática de 12x36, 6x1 e Interjornada.
- [ ] **Banco de Horas:** Cálculo automático de saldo.
- [ ] **LGPD:** Painel de consentimento e exportação de dados pessoais.
- [ ] **Billing:** Integração com Gateway de Pagamento (Stripe/Iugu).

### Critérios de Sucesso
- Churn < 5%.
- Redução de 50% no tempo de fechamento de folha dos clientes.

---

## 📅 Fase 3: Escala & Enterprise (Mês 5-8)
**Objetivo:** Atender grandes operações e oferecer diferenciais competitivos.

### Funcionalidades
- [ ] **Apps Nativos:** Publicação na Apple App Store e Google Play.
- [ ] **Validação Facial (IA):** Anti-fraude no registro de ponto.
- [ ] **Modo Offline Real:** Sincronização robusta com banco local (Realm/SQLite).
- [ ] **API Pública:** Webhooks para integração com ERPs (Totvs, SAP).
- [ ] **White-label:** Personalização de domínio e marca para clientes Enterprise.

---

## 📅 Fase 4: Inteligência & Otimização (Ano 1+)
**Objetivo:** Usar dados para otimizar a operação dos clientes.

### Funcionalidades
- [ ] **Predição de Absenteísmo:** IA alertando risco de faltas.
- [ ] **Otimização de Escalas:** Sugestão de alocação baseada em demanda.
- [ ] **Chatbot (WhatsApp):** Registro e consulta de saldo via conversa.
