
import { PrismaClient } from '@prisma/client';
import { addDays, setHours, setMinutes } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding report data...');

  const clientAtivo = await prisma.client.upsert({
    where: { cnpj: '11.111.111/0001-11' },
    update: { status: 'ATIVO' },
    create: {
      name: 'Terceirizada Alfa Serviços',
      tradeName: 'Alfa Serviços',
      cnpj: '11.111.111/0001-11',
      address: 'Av. Paulista, 1000',
      status: 'ATIVO',
    },
  });

  const clientInadimplente = await prisma.client.upsert({
    where: { cnpj: '22.222.222/0001-22' },
    update: { status: 'INADIMPLENTE' },
    create: {
      name: 'Terceirizada Beta Facilities',
      tradeName: 'Beta Facilities',
      cnpj: '22.222.222/0001-22',
      address: 'Rua XV de Novembro, 200',
      status: 'INADIMPLENTE',
    },
  });

  const clientSuspenso = await prisma.client.upsert({
    where: { cnpj: '33.333.333/0001-33' },
    update: { status: 'SUSPENSO' },
    create: {
      name: 'Terceirizada Gama Limpeza',
      tradeName: 'Gama Limpeza',
      cnpj: '33.333.333/0001-33',
      address: 'Av. Brasil, 300',
      status: 'SUSPENSO',
    },
  });

  const contractAtivo = await prisma.contract.create({
    data: {
      name: 'Contrato Limpeza - Sede Alfa',
      startDate: new Date(),
      clientId: clientAtivo.id,
    },
  });

  const contractInadimplente = await prisma.contract.create({
    data: {
      name: 'Contrato Portaria - Cliente Beta',
      startDate: new Date(),
      clientId: clientInadimplente.id,
    },
  });

  const contractSuspenso = await prisma.contract.create({
    data: {
      name: 'Contrato Vigilância - Cliente Gama',
      startDate: new Date(),
      clientId: clientSuspenso.id,
    },
  });

  const schedule = await prisma.workSchedule.create({
    data: {
      name: 'Comercial 08-17',
      type: 'ESCALA_5X2',
      startTime: '08:00',
      endTime: '17:00',
      lunchStart: '12:00',
      lunchEnd: '13:00',
    },
  });

  const locationAtivo = await prisma.workLocation.create({
    data: {
      name: 'Sede Principal Alfa',
      address: 'Av. Paulista, 1000',
      latitude: -23.561684,
      longitude: -46.655981,
      contractId: contractAtivo.id,
      clientId: clientAtivo.id,
    },
  });

  const locationInadimplente = await prisma.workLocation.create({
    data: {
      name: 'Condomínio Beta Center',
      address: 'Rua XV de Novembro, 200',
      latitude: -25.4284,
      longitude: -49.2733,
      contractId: contractInadimplente.id,
      clientId: clientInadimplente.id,
    },
  });

  const locationSuspenso = await prisma.workLocation.create({
    data: {
      name: 'Planta Gama Industrial',
      address: 'Av. Brasil, 300',
      latitude: -22.9068,
      longitude: -43.1729,
      contractId: contractSuspenso.id,
      clientId: clientSuspenso.id,
    },
  });

  const employeeAlfa = await prisma.employee.create({
    data: {
      name: 'Maria da Silva',
      cpf: '123.456.789-00',
      matricula: 'ALFA001',
      position: 'Auxiliar de Limpeza',
      contractType: 'CLT',
      admissionDate: new Date(),
      contractId: contractAtivo.id,
      scheduleId: schedule.id,
      workLocationId: locationAtivo.id,
    },
  });

  const employeeBeta = await prisma.employee.create({
    data: {
      name: 'João Pereira',
      cpf: '234.567.890-11',
      matricula: 'BETA001',
      position: 'Porteiro',
      contractType: 'CLT',
      admissionDate: new Date(),
      contractId: contractInadimplente.id,
      scheduleId: schedule.id,
      workLocationId: locationInadimplente.id,
    },
  });

  const employeeGama = await prisma.employee.create({
    data: {
      name: 'Ana Souza',
      cpf: '345.678.901-22',
      matricula: 'GAMA001',
      position: 'Vigilante',
      contractType: 'CLT',
      admissionDate: new Date(),
      contractId: contractSuspenso.id,
      scheduleId: schedule.id,
      workLocationId: locationSuspenso.id,
    },
  });

  console.log('Created employees:', employeeAlfa.name, employeeBeta.name, employeeGama.name);

  const gestorAlfa = await prisma.user.upsert({
    where: { email: 'gestor.alfa@noponto.com' },
    update: {
      clientId: clientAtivo.id,
      role: 'GESTOR_CLIENTE',
    },
    create: {
      name: 'Gestor Alfa',
      email: 'gestor.alfa@noponto.com',
      password: 'mudar123',
      role: 'GESTOR_CLIENTE',
      clientId: clientAtivo.id,
    },
  });

  const gestorBeta = await prisma.user.upsert({
    where: { email: 'gestor.beta@noponto.com' },
    update: {
      clientId: clientInadimplente.id,
      role: 'GESTOR_CLIENTE',
    },
    create: {
      name: 'Gestor Beta',
      email: 'gestor.beta@noponto.com',
      password: 'mudar123',
      role: 'GESTOR_CLIENTE',
      clientId: clientInadimplente.id,
    },
  });

  const gestorGama = await prisma.user.upsert({
    where: { email: 'gestor.gama@noponto.com' },
    update: {
      clientId: clientSuspenso.id,
      role: 'GESTOR_CLIENTE',
    },
    create: {
      name: 'Gestor Gama',
      email: 'gestor.gama@noponto.com',
      password: 'mudar123',
      role: 'GESTOR_CLIENTE',
      clientId: clientSuspenso.id,
    },
  });

  console.log('Created gestores:', gestorAlfa.email, gestorBeta.email, gestorGama.email);

  // 6. Create Time Records for the current month
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), 1);
  const end = today; // up to today

  let currentDate = start;
  while (currentDate <= end) {
    // Skip weekends
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      const records = [
        { type: 'ENTRADA', hour: 8, minute: 0 },
        { type: 'SAIDA_ALMOCO', hour: 12, minute: 0 },
        { type: 'VOLTA_ALMOCO', hour: 13, minute: 0 },
        { type: 'SAIDA', hour: 17, minute: 0 },
      ];

      for (const rec of records) {
        // Add some random variance (-5 to +5 mins)
        const variance = Math.floor(Math.random() * 10) - 5;
        const recordDate = setMinutes(setHours(currentDate, rec.hour), rec.minute + variance);

        await prisma.timeRecord.create({
          data: {
            employeeId: employeeAlfa.id,
            timestamp: recordDate,
            type: rec.type,
            status: 'PENDENTE',
          },
        });
      }
    }
    currentDate = addDays(currentDate, 1);
  }

  await prisma.saaSContract.upsert({
    where: { clientId: clientAtivo.id },
    update: {},
    create: {
      clientId: clientAtivo.id,
      plan: 'PRO',
      price: 15,
      quantity: 100,
      billingCycle: 'MENSAL',
      startDate: new Date(),
      status: 'ATIVO',
    },
  });

  await prisma.saaSContract.upsert({
    where: { clientId: clientInadimplente.id },
    update: {},
    create: {
      clientId: clientInadimplente.id,
      plan: 'BASIC',
      price: 10,
      quantity: 50,
      billingCycle: 'MENSAL',
      startDate: new Date(),
      status: 'ATIVO',
    },
  });

  await prisma.saaSContract.upsert({
    where: { clientId: clientSuspenso.id },
    update: {},
    create: {
      clientId: clientSuspenso.id,
      plan: 'ENTERPRISE',
      price: 20,
      quantity: 200,
      billingCycle: 'ANUAL',
      startDate: new Date(),
      status: 'CANCELADO',
    },
  });

  await prisma.invoice.createMany({
    data: [
      {
        clientId: clientAtivo.id,
        amount: 1500,
        status: 'PAGO',
        dueDate: new Date(),
      },
      {
        clientId: clientInadimplente.id,
        amount: 800,
        status: 'VENCIDO',
        dueDate: new Date(),
      },
      {
        clientId: clientInadimplente.id,
        amount: 900,
        status: 'VENCIDO',
        dueDate: new Date(),
      },
      {
        clientId: clientSuspenso.id,
        amount: 400,
        status: 'PENDENTE',
        dueDate: new Date(),
      },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
