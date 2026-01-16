
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking database data...');
  const employees = await prisma.employee.findMany({
    include: { contract: true, timeRecords: true }
  });
  console.log('Employees found:', employees.length);
  employees.forEach(e => {
    console.log(`- ${e.name} (ID: ${e.id})`);
    console.log(`  Contract: ${e.contract ? e.contract.name : 'NONE'}`);
    console.log(`  Records: ${e.timeRecords.length}`);
  });
  
  if (employees.length === 0) {
    console.log('No employees found. Please seed data.');
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
