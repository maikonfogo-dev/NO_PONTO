import { Controller, Post, Body, Logger, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BillingService } from './billing.service';

@ApiTags('Webhooks')
@Controller('webhooks')
export class WebhooksController {
  private readonly logger = new Logger(WebhooksController.name);

  constructor(private billingService: BillingService) {}

  @Post('stripe')
  @ApiOperation({ summary: 'Receber notificação do Stripe' })
  async handleStripe(@Body() body: any) {
    // In production, we MUST verify the signature using stripe.webhooks.constructEvent
    // For now, we trust the body or check a secret in body/headers if needed.
    
    const event = body;
    this.logger.log(`Received Stripe event: ${event.type}`);

    if (event.type === 'checkout.session.completed' || event.type === 'invoice.payment_succeeded') {
        const object = event.data.object;
        // Check metadata for invoiceId
        const invoiceId = object.metadata?.invoiceId;
        const transactionId = object.id;

        if (invoiceId) {
            await this.billingService.confirmPayment(invoiceId, transactionId);
        } else {
            this.logger.warn('Stripe event missing invoiceId metadata');
        }
    }

    return { received: true };
  }

  @Post('mercadopago')
  @HttpCode(200) // MP expects 200 or 201
  @ApiOperation({ summary: 'Receber notificação do Mercado Pago' })
  async handleMercadoPago(@Body() body: any) {
    this.logger.log('Received Mercado Pago Webhook');

    const topic = body.topic || body.type; // payment
    const id = body.data?.id || body.id;

    if (topic === 'payment' && id) {
        // Fetch payment details to confirm status
        await this.billingService.checkAndConfirmPayment('PIX', String(id));
    }

    return { status: 'OK' };
  }
}
