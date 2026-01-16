
import { PrismaClient } from '@prisma/client';
import { addDays, setHours, setMinutes } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding report data...');

  // 1. Create Client
  const client = await prisma.client.create({
    data: {
      name: 'Cliente Exemplo Ltda',
      cnpj: '12.345.678/0001-90',
      address: 'Av. Paulista, 1000',
    },
  });

  // 2. Create Contract
  const contract = await prisma.contract.create({
    data: {
      name: 'Contrato de Limpeza - Sede',
      startDate: new Date(),
      clientId: client.id,
    },
  });

  // 3. Create Schedule
  const schedule = await prisma.workSchedule.create({
    data: {
      name: 'Comercial 08-17',
      type: 'FIXED',
      startTime: '08:00',
      endTime: '17:00',
      lunchStart: '12:00',
      lunchEnd: '13:00',
    },
  });

  // 4. Create Work Location
  const location = await prisma.workLocation.create({
    data: {
      name: 'Sede Principal',
      address: 'Av. Paulista, 1000',
      latitude: -23.561684,
      longitude: -46.655981,
      contractId: contract.id,
    },
  });

  // 5. Create Employee
  const employee = await prisma.employee.create({
    data: {
      name: 'Maria da Silva',
      cpf: '123.456.789-00',
      matricula: 'FUNC001',
      position: 'Auxiliar de Limpeza',
      contractType: 'CLT',
      admissionDate: new Date(),
      contractId: contract.id,
      scheduleId: schedule.id,
      workLocationId: location.id,
    },
  });

  console.log(`Created employee: ${employee.name}`);

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
            employeeId: employee.id,
            timestamp: recordDate,
            type: rec.type,
            status: 'PENDENTE',
          },
        });
      }
    }
    currentDate = addDays(currentDate, 1);
  }

  console.log('Seeding completed!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
