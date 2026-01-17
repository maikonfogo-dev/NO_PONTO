import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthGuard } from './auth.guard';
import { CompanyActiveGuard } from './company-active.guard';

@Module({
  imports: [UsersModule, PrismaModule],
  providers: [AuthService, AuthGuard, CompanyActiveGuard],
  controllers: [AuthController],
  exports: [AuthService, AuthGuard, CompanyActiveGuard],
})
export class AuthModule {}
