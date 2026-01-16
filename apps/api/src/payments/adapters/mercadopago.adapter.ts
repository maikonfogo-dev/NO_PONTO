import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { PaymentGateway, PaymentIntent, PaymentResult } from '../interfaces/payment-gateway.interface';

@Injectable()
export class MercadoPagoAdapter implements PaymentGateway {
  private client: MercadoPagoConfig;
  private payment: Payment;
  private readonly logger = new Logger(MercadoPagoAdapter.name);

  constructor(private configService: ConfigService) {
    const accessToken = this.configService.get<string>('MERCADOPAGO_ACCESS_TOKEN');
    if (accessToken) {
        this.client = new MercadoPagoConfig({ accessToken: accessToken });
        this.payment = new Payment(this.client);
    } else {
        this.logger.warn('MERCADOPAGO_ACCESS_TOKEN not found. MercadoPago adapter will not work.');
    }
  }

  async createCustomer(name: string, email: string): Promise<string> {
    // MercadoPago usually associates by email directly in the payment, 
    // but we could use the Customer API. For simplicity/PIX, we return the email or a mock ID.
    return email; 
  }

  async createPayment(intent: PaymentIntent): Promise<PaymentResult> {
    if (!this.client) {
        return {
            id: `mock-mp-${Date.now()}`,
            status: 'pending',
            qrCode: 'mock-qr-code-content',
            qrCodeBase64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII='
        };
    }

    try {
      const result = await this.payment.create({
        body: {
            transaction_amount: intent.amount,
            description: intent.description,
            payment_method_id: 'pix',
            payer: {
                email: intent.customerId // Using email as identifier if customerId is email
            },
            metadata: intent.metadata
        }
      });

      const pointOfInteraction = result.point_of_interaction;
      const transactionData = pointOfInteraction?.transaction_data;

      return {
        id: result.id?.toString(),
        status: result.status === 'approved' ? 'succeeded' : 'pending',
        qrCode: transactionData?.qr_code,
        qrCodeBase64: transactionData?.qr_code_base64,
        url: transactionData?.ticket_url
      };
    } catch (error) {
      this.logger.error(`Error creating MercadoPago payment: ${error.message}`);
      throw error;
    }
  }

  async getPaymentStatus(id: string): Promise<PaymentResult> {
    if (!this.client) return { id, status: 'succeeded' };

    try {
        const result = await this.payment.get({ id });
        return {
            id: result.id?.toString(),
            status: result.status === 'approved' ? 'succeeded' : 
                    result.status === 'rejected' ? 'failed' : 'pending'
        };
    } catch (error) {
        this.logger.error(`Error retrieving MercadoPago payment: ${error.message}`);
        throw error;
    }
  }
}
