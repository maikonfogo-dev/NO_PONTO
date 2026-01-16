import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PaymentGateway, PaymentIntent, PaymentResult } from '../interfaces/payment-gateway.interface';

@Injectable()
export class StripeAdapter implements PaymentGateway {
  private stripe: Stripe;
  private readonly logger = new Logger(StripeAdapter.name);

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (apiKey) {
        this.stripe = new Stripe(apiKey, {
            apiVersion: '2024-12-18.acacia' as any,
        });
    } else {
        this.logger.warn('STRIPE_SECRET_KEY not found. Stripe adapter will not work.');
    }
  }

  async createCustomer(name: string, email: string): Promise<string> {
    if (!this.stripe) return 'mock-stripe-customer-id';
    
    try {
        const existingCustomers = await this.stripe.customers.list({ email, limit: 1 });
        if (existingCustomers.data.length > 0) {
            return existingCustomers.data[0].id;
        }

        const customer = await this.stripe.customers.create({
            name,
            email,
        });
        return customer.id;
    } catch (error) {
        this.logger.error(`Error creating Stripe customer: ${error.message}`);
        throw error;
    }
  }

  async createPayment(intent: PaymentIntent): Promise<PaymentResult> {
    if (!this.stripe) {
        return {
            id: 'mock-stripe-payment-id',
            status: 'succeeded',
        };
    }

    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(intent.amount * 100), // Stripe uses cents
        currency: intent.currency,
        description: intent.description,
        payment_method: intent.paymentMethodId,
        customer: intent.customerId,
        confirm: true,
        metadata: intent.metadata,
        automatic_payment_methods: {
            enabled: true,
            allow_redirects: 'never' // Simplified for API
        }
      });

      return {
        id: paymentIntent.id,
        status: paymentIntent.status === 'succeeded' ? 'succeeded' : 'pending',
        clientSecret: paymentIntent.client_secret,
      };
    } catch (error) {
      this.logger.error(`Error creating Stripe payment: ${error.message}`);
      throw error;
    }
  }

  async getPaymentStatus(id: string): Promise<PaymentResult> {
    if (!this.stripe) return { id, status: 'succeeded' };

    try {
        const paymentIntent = await this.stripe.paymentIntents.retrieve(id);
        return {
            id: paymentIntent.id,
            status: paymentIntent.status === 'succeeded' ? 'succeeded' : 
                    paymentIntent.status === 'requires_payment_method' ? 'failed' : 'pending',
        };
    } catch (error) {
        this.logger.error(`Error retrieving Stripe payment: ${error.message}`);
        throw error;
    }
  }
}
