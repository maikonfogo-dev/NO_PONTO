import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentsService } from '../payments/payments.service';
import { NfeService } from './nfe.service';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  constructor(
    private prisma: PrismaService,
    private paymentsService: PaymentsService,
    private nfeService: NfeService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleRecurringBilling() {
    this.logger.log('Starting recurring billing job...');
    
    // 1. Check for Overdue Accounts (Blocking Logic)
    await this.checkOverdueAccounts();

    // 2. Find contracts due for billing
    // Note: Assuming SaaSContract has nextBillingDate or similar. 
    // For MVP, let's fetch active subscriptions.
    const activeContracts = await this.prisma.saaSContract.findMany({
        where: { status: 'ATIVO' },
        include: { client: true }
    });

    if (activeContracts.length > 0) {
        this.logger.log(`Found ${activeContracts.length} active SaaS contracts to bill (MVP logging only).`);
    }
    
    this.logger.log('Recurring billing job completed.');
  }

  async checkOverdueAccounts() {
    const TOLERANCE_DAYS = 5;
    const toleranceDate = new Date();
    toleranceDate.setDate(toleranceDate.getDate() - TOLERANCE_DAYS);

    const overdueInvoices = await this.prisma.invoice.findMany({
        where: {
            status: { in: ['PENDENTE', 'VENCIDO'] },
            dueDate: { lt: toleranceDate },
            client: { status: { not: 'SUSPENSO' } }
        },
        include: { client: true }
    });

    for (const invoice of overdueInvoices) {
        this.logger.warn(`Blocking client ${invoice.client.name} due to overdue invoice ${invoice.id}`);
        
        // 1. Mark Invoice as VENCIDO (if not already)
        if (invoice.status !== 'VENCIDO') {
            await this.prisma.invoice.update({
                where: { id: invoice.id },
                data: { status: 'VENCIDO' }
            });
        }

        // 2. Suspend Client
        await this.prisma.client.update({
            where: { id: invoice.clientId },
            data: { status: 'SUSPENSO' }
        });

        // 3. Update Contract Status
        await this.prisma.saaSContract.update({
            where: { clientId: invoice.clientId },
            data: { status: 'INADIMPLENTE' }
        });
    }
  }

  async emitNfeForMirrorClosure(mirrorId: string) {
    this.logger.log(`Checking NF-e trigger for mirror ${mirrorId}...`);
    
    const mirror = await this.prisma.pointMirror.findUnique({
        where: { id: mirrorId },
        include: { 
            contract: { include: { client: { include: { subscription: true } } } } 
        }
    });

    if (!mirror || !mirror.contract.client.subscription) return;

    // Check if billing is Hourly
    // Assuming 'HOURLY' or 'POR_HORA' in billingCycle or a specific plan
    // For this task, let's assume if the subscription plan is 'ENTERPRISE_HOURLY'
    const sub = mirror.contract.client.subscription;
    if (sub.plan === 'ENTERPRISE_HOURLY' || sub.billingCycle === 'POR_HORA') {
        const totalHours = Number(mirror.workedHours) + Number(mirror.overtimeHours); // Simple logic
        const ratePerHour = Number(sub.price); // Using price as rate per hour
        
        const amount = totalHours * ratePerHour;
        
        if (amount > 0) {
            this.logger.log(`Emitting Hourly NF-e for Mirror ${mirrorId}. Hours: ${totalHours}, Rate: ${ratePerHour}, Total: ${amount}`);
            
            // Create Invoice
            const invoice = await this.prisma.invoice.create({
                data: {
                    clientId: mirror.contract.clientId,
                    amount: amount,
                    method: 'BOLETO', // Default for NF-e usually
                    status: 'PENDENTE',
                    dueDate: new Date(new Date().setDate(new Date().getDate() + 10)), // 10 days
                    reference: `Faturamento Ponto ${mirror.id} - ${totalHours.toFixed(2)}h`
                }
            });

            // Emit NF-e
            await this.nfeService.emitInvoice(invoice.id, amount, mirror.contract.client);
        }
    }
  }

  async generateMonthlyInvoice(clientId: string) {
    const client = await this.prisma.client.findUnique({
        where: { id: clientId },
        include: { 
            subscription: true,
            _count: { select: { users: true } } // Should be active employees count logic
        }
    });

    if (!client || !client.subscription) {
        throw new Error('Client or subscription not found');
    }

    // Calculate dynamic price
    // We need real active employees count from logic similar to ClientsService
    const activeEmployeesCount = await this.prisma.employee.count({
        where: {
            contract: { clientId: clientId },
            status: 'ATIVO'
        }
    });

    const amount = Number(client.subscription.price) * activeEmployeesCount;

    // Create Invoice
    const invoice = await this.prisma.invoice.create({
        data: {
            clientId: clientId,
            amount: amount,
            method: 'PIX', // Default or from preferences
            status: 'PENDENTE',
            dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
            reference: `Mensalidade ${new Date().toLocaleString('default', { month: 'long' })}`
        }
    });

    // If auto-charge would go here

    return invoice;
  }
  
  async processInvoicePayment(invoiceId: string, method: string) {
      const invoice = await this.prisma.invoice.findUnique({
          where: { id: invoiceId },
          include: { client: true }
      });
      
      if (!invoice || invoice.status === 'PAGO') return;

      // 1. Process Payment
      const paymentResult = await this.paymentsService.processPayment(method, {
          amount: Number(invoice.amount),
          currency: 'BRL',
          description: invoice.reference,
          customerId: (invoice.client as any).billingEmail || invoice.client.financialContact || 'cliente@noponto.com' // Fallback
      });

      if (paymentResult.status === 'succeeded') {
          // 2. Update Invoice
          await this.prisma.invoice.update({
              where: { id: invoiceId },
              data: { 
                  status: 'PAGO', 
                  paidAt: new Date(),
                  transactionId: paymentResult.id,
                  url: paymentResult.url,
                  qrCode: paymentResult.qrCode,
                  qrCodeBase64: paymentResult.qrCodeBase64
              }
          });

          // 3. Emit NF-e
          await this.nfeService.emitInvoice(invoiceId, Number(invoice.amount), invoice.client);
          
          return paymentResult;
      } else {
          // Update transaction info even if pending
          await this.prisma.invoice.update({
            where: { id: invoiceId },
            data: { 
                transactionId: paymentResult.id,
                url: paymentResult.url,
                qrCode: paymentResult.qrCode,
                qrCodeBase64: paymentResult.qrCodeBase64
            }
        });
      }
      
      return paymentResult;
  }

  async confirmPayment(invoiceId: string, transactionId: string) {
    const invoice = await this.prisma.invoice.findUnique({
        where: { id: invoiceId },
        include: { client: true }
    });

    if (!invoice || invoice.status === 'PAGO') {
        this.logger.warn(`Invoice ${invoiceId} not found or already paid.`);
        return;
    }

    this.logger.log(`Confirming payment for invoice ${invoiceId} (Transaction: ${transactionId})`);

    await this.prisma.$transaction(async (tx) => {
        // 1. Update Invoice
        await tx.invoice.update({
            where: { id: invoiceId },
            data: {
                status: 'PAGO',
                paidAt: new Date(),
                transactionId: transactionId
            }
        });

        // 2. Unlock client if needed
        if (['BLOQUEADO', 'INADIMPLENTE', 'SUSPENSO'].includes(invoice.client.status)) {
            await tx.client.update({
                where: { id: invoice.clientId },
                data: { status: 'ATIVO' }
            });
            this.logger.log(`Client ${invoice.clientId} reactivated.`);
        }
    });

    // 3. Emit NF-e (outside transaction to avoid blocking if NFE fails)
    try {
        await this.nfeService.emitInvoice(invoiceId, Number(invoice.amount), invoice.client);
    } catch (error) {
        this.logger.error(`Failed to emit NF-e for invoice ${invoiceId}`, error);
    }
  }

  async findInvoiceByTransactionId(transactionId: string) {
      return this.prisma.invoice.findFirst({
          where: { transactionId: transactionId }
      });
  }

  async checkAndConfirmPayment(method: string, externalId: string) {
      try {
        const paymentInfo = await this.paymentsService.checkStatus(method, externalId);
        
        if (paymentInfo.status === 'succeeded') { // 'succeeded' or 'approved' mapped to 'succeeded' in adapter
             // Find invoice
             // If we have the ID stored:
             const invoice = await this.findInvoiceByTransactionId(externalId);
             
             // If not found by transaction ID, maybe we can find by metadata if the gateway returns it?
             // MP API response might have external_reference which is our Invoice ID?
             // Assuming adapter returns it in metadata or similar.
             // But 'PaymentResult' interface is simple.
             
             if (invoice) {
                 await this.confirmPayment(invoice.id, externalId);
             } else {
                 this.logger.warn(`Payment ${externalId} confirmed but no linked invoice found.`);
             }
        }
      } catch (error) {
          this.logger.error(`Error checking payment status for ${externalId}`, error);
      }
  }
}
