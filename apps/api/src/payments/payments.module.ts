import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsService } from './payments.service';
import { StripeAdapter } from './adapters/stripe.adapter';
import { MercadoPagoAdapter } from './adapters/mercadopago.adapter';

@Module({
  imports: [ConfigModule],
  providers: [PaymentsService, StripeAdapter, MercadoPagoAdapter],
  exports: [PaymentsService],
})
export class PaymentsModule {}
