import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }

    if (user.role !== 'SUPER_ADMIN' && user.clientId) {
      const client = await this.prisma.client.findUnique({
        where: { id: user.clientId },
      });

      if (!client || client.status !== 'ATIVO') {
        throw new UnauthorizedException(
          'Empresa bloqueada ou inadimplente. Entre em contato com o financeiro.',
        );
      }
    }

    const employee = await this.prisma.employee.findUnique({
      where: { userId: user.id },
    });

    const { password: _password, ...result } = user;

    return {
      access_token: 'mock_' + user.id,
      user: {
        ...result,
        employeeId: employee ? employee.id : null,
      },
    };
  }
}
