import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { NfeService } from './nfe.service';
import { WebhooksController } from './webhooks.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PaymentsModule } from '../payments/payments.module';

@Module({
  imports: [PrismaModule, PaymentsModule],
  controllers: [WebhooksController],
  providers: [BillingService, NfeService],
  exports: [BillingService],
})
export class BillingModule {}
