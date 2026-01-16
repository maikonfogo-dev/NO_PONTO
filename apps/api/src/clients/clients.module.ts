import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PaymentsModule } from '../payments/payments.module';
import { BillingModule } from '../billing/billing.module';

@Module({
  imports: [PrismaModule, PaymentsModule, BillingModule],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
