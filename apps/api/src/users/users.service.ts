import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  async onModuleInit() {
    // Seed initial users if they don't exist
    const usersToSeed = [
      {
        email: 'admin@noponto.com',
        password: 'admin',
        name: 'Admin User',
        role: 'SUPER_ADMIN',
      },
      {
        email: 'colaborador@noponto.com',
        password: '123',
        name: 'João Silva',
        role: 'EMPLOYEE',
      },
      {
        email: 'demo@noponto.com',
        password: '123456',
        name: 'Demo User',
        role: 'EMPLOYEE',
      },
    ];

    for (const user of usersToSeed) {
      const exists = await this.prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!exists) {
        await this.prisma.user.create({
          data: user,
        });
        console.log(`Seeded user: ${user.email}`);
      }
    }
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
