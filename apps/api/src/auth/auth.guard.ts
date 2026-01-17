import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as any;
    const authHeader =
      (request.headers['authorization'] ||
        request.headers['Authorization']) ?? '';

    if (!authHeader || typeof authHeader !== 'string') {
      throw new UnauthorizedException('Token de autenticação não informado');
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Formato de token inválido');
    }

    if (!token.startsWith('mock_')) {
      throw new UnauthorizedException('Token inválido');
    }

    const userId = token.substring('mock_'.length);

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    request.user = user;
    return true;
  }
}

