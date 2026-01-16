import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  create(createContractDto: any) {
    // Accessing prisma.contract generated model
    return this.prisma.contract.create({
      data: createContractDto,
    });
  }

  findAll(clientId?: string) {
    const where = clientId ? { clientId } : {};
    return this.prisma.contract.findMany({
      where,
      include: {
        client: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.contract.findUnique({
      where: { id },
      include: {
        client: true,
        employees: true,
        workLocations: true,
      },
    });
  }

  getWorkLocations(contractId: string) {
    return this.prisma.workLocation.findMany({
      where: { contractId },
    });
  }

  update(id: string, updateContractDto: any) {
    return this.prisma.contract.update({
      where: { id },
      data: updateContractDto,
    });
  }

  remove(id: string) {
    return this.prisma.contract.delete({
      where: { id },
    });
  }
}
