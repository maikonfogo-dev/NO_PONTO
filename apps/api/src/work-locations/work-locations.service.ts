import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkLocationsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.workLocation.create({ data });
  }

  findAll(contractId?: string) {
    const where = contractId ? { contractId } : {};
    return this.prisma.workLocation.findMany({
      where,
      include: { contract: true }
    });
  }

  findOne(id: string) {
    return this.prisma.workLocation.findUnique({
      where: { id },
      include: { contract: true }
    });
  }
}
