import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkSchedulesService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.workSchedule.create({ data });
  }

  findAll() {
    return this.prisma.workSchedule.findMany();
  }

  findOne(id: string) {
    return this.prisma.workSchedule.findUnique({ where: { id } });
  }
}
