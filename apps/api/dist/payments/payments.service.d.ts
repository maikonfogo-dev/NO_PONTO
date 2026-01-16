import { PaymentIntent, PaymentResult } from './interfaces/payment-gateway.interface';
import { StripeAdapter } from './adapters/stripe.adapter';
import { MercadoPagoAdapter } from './adapters/mercadopago.adapter';
export declare class PaymentsService {
    private stripeAdapter;
    private mercadoPagoAdapter;
    constructor(stripeAdapter: StripeAdapter, mercadoPagoAdapter: MercadoPagoAdapter);
    private getGateway;
    createCustomer(method: string, name: string, email: string): Promise<string>;
    processPayment(method: string, intent: PaymentIntent): Promise<PaymentResult>;
    checkStatus(method: string, id: string): Promise<PaymentResult>;
}
