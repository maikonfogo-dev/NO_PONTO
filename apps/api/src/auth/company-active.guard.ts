import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompanyActiveGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as any;
    const user = request.user;

    if (!user) {
      return true;
    }

    if (user.role === 'SUPER_ADMIN') {
      return true;
    }

    if (!user.clientId) {
      throw new ForbiddenException('Usuário não vinculado a uma empresa');
    }

    const client = await this.prisma.client.findUnique({
      where: { id: user.clientId },
    });

    if (!client || client.status !== 'ATIVO') {
      throw new ForbiddenException(
        'Empresa bloqueada ou inadimplente. Entre em contato com o financeiro.',
      );
    }

    return true;
  }
}

