import { Injectable, BadRequestException } from '@nestjs/common';
import { PaymentGateway, PaymentIntent, PaymentResult } from './interfaces/payment-gateway.interface';
import { StripeAdapter } from './adapters/stripe.adapter';
import { MercadoPagoAdapter } from './adapters/mercadopago.adapter';

@Injectable()
export class PaymentsService {
  constructor(
    private stripeAdapter: StripeAdapter,
    private mercadoPagoAdapter: MercadoPagoAdapter,
  ) {}

  private getGateway(method: string): PaymentGateway {
    switch (method.toUpperCase()) {
      case 'CARD':
      case 'CREDIT_CARD':
      case 'CARTAO':
        return this.stripeAdapter;
      case 'PIX':
        return this.mercadoPagoAdapter;
      default:
        throw new BadRequestException(`Payment method ${method} not supported`);
    }
  }

  async createCustomer(method: string, name: string, email: string): Promise<string> {
    return this.getGateway(method).createCustomer(name, email);
  }

  async processPayment(method: string, intent: PaymentIntent): Promise<PaymentResult> {
    return this.getGateway(method).createPayment(intent);
  }

  async checkStatus(method: string, id: string): Promise<PaymentResult> {
    return this.getGateway(method).getPaymentStatus(id);
  }
}
