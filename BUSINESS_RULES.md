# Regras de Negócio - No Ponto SaaS

## 1. Gestão de Contratos e Alocação
- **Multi-Cliente:** Uma Empresa Terceirizada (Tenant) pode ter múltiplos Clientes.
- **Segregação:** Um Cliente só pode visualizar dados (colaboradores, pontos) vinculados ao seu Contrato.
- **Alocação:** Um Colaborador deve estar vinculado a um Contrato para registrar ponto. Se o colaborador atuar em múltiplos contratos, deve selecionar o contrato ativo no momento do registro.

## 2. Registro de Ponto
- **Geolocalização (Geo-fencing):** O registro só é permitido se o colaborador estiver dentro de um raio configurável (ex: 200m) do endereço do Contrato/Posto de Trabalho.
- **Biometria Facial:** Opcional por contrato. Se ativado, a foto é obrigatória e comparada com a foto de perfil (validação futura via IA).
- **Modo Offline:** Pontos registrados sem internet são armazenados localmente com timestamp original e flag `isOffline=true`. Devem ser sincronizados assim que houver conexão.
- **Horário de Servidor:** O horário considerado oficial é o do servidor (NTP), mas em caso offline, usa-se o horário do dispositivo com auditoria de fuso horário.

## 3. Escalas e Jornadas
- **Escalas Suportadas:**
  - **12x36:** Trabalha 12h, folga 36h. O sistema deve alertar se houver registro na folga.
  - **6x1:** 6 dias de trabalho, 1 folga (geralmente domingo ou escala).
  - **5x2:** Segunda a Sexta (comum em administrativo).
- **Tolerância:** Configurável por Tenant (padrão CLT: 5 a 10 minutos). Atrasos dentro da tolerância não geram desconto.
- **Interjornada:** Mínimo de 11 horas entre jornadas. O sistema deve alertar violações.
- **Intrajornada (Almoço):** Mínimo de 1h (ou conforme convenção). O sistema pode bloquear retorno antecipado se configurado.

## 4. Banco de Horas vs. Hora Extra
- **Configuração:** Cada contrato define se usa Banco de Horas ou Pagamento de HE.
- **Cálculo:**
  - HE 50% (dias úteis).
  - HE 100% (domingos e feriados).
  - Adicional Noturno (22h às 05h).

## 5. Aprovação e Fluxo de Trabalho
- **Solicitação de Ajuste:** O colaborador pode solicitar ajuste de ponto esquecido (Esquecimento de marcação).
- **Aprovação:** Supervisor ou Gestor deve aprovar solicitações.
- **Fechamento:** O espelho de ponto deve ser "fechado" mensalmente para envio à contabilidade. Após fechamento, registros são travados.
