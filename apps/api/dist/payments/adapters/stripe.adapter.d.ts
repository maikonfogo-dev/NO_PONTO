import { ConfigService } from '@nestjs/config';
import { PaymentGateway, PaymentIntent, PaymentResult } from '../interfaces/payment-gateway.interface';
export declare class StripeAdapter implements PaymentGateway {
    private configService;
    private stripe;
    private readonly logger;
    constructor(configService: ConfigService);
    createCustomer(name: string, email: string): Promise<string>;
    createPayment(intent: PaymentIntent): Promise<PaymentResult>;
    getPaymentStatus(id: string): Promise<PaymentResult>;
}
