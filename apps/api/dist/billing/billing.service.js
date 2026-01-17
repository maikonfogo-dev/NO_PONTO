"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BillingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../prisma/prisma.service");
const payments_service_1 = require("../payments/payments.service");
const nfe_service_1 = require("./nfe.service");
let BillingService = BillingService_1 = class BillingService {
    constructor(prisma, paymentsService, nfeService) {
        this.prisma = prisma;
        this.paymentsService = paymentsService;
        this.nfeService = nfeService;
        this.logger = new common_1.Logger(BillingService_1.name);
    }
    async handleRecurringBilling() {
        this.logger.log('Starting recurring billing job...');
        await this.checkOverdueAccounts();
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
            if (invoice.status !== 'VENCIDO') {
                await this.prisma.invoice.update({
                    where: { id: invoice.id },
                    data: { status: 'VENCIDO' }
                });
            }
            await this.prisma.client.update({
                where: { id: invoice.clientId },
                data: { status: 'SUSPENSO' }
            });
            await this.prisma.saaSContract.update({
                where: { clientId: invoice.clientId },
                data: { status: 'INADIMPLENTE' }
            });
        }
    }
    async emitNfeForMirrorClosure(mirrorId) {
        this.logger.log(`Checking NF-e trigger for mirror ${mirrorId}...`);
        const mirror = await this.prisma.pointMirror.findUnique({
            where: { id: mirrorId },
            include: {
                contract: { include: { client: { include: { subscription: true } } } }
            }
        });
        if (!mirror || !mirror.contract.client.subscription)
            return;
        const sub = mirror.contract.client.subscription;
        if (sub.plan === 'ENTERPRISE_HOURLY' || sub.billingCycle === 'POR_HORA') {
            const totalHours = Number(mirror.workedHours) + Number(mirror.overtimeHours);
            const ratePerHour = Number(sub.price);
            const amount = totalHours * ratePerHour;
            if (amount > 0) {
                this.logger.log(`Emitting Hourly NF-e for Mirror ${mirrorId}. Hours: ${totalHours}, Rate: ${ratePerHour}, Total: ${amount}`);
                const invoice = await this.prisma.invoice.create({
                    data: {
                        clientId: mirror.contract.clientId,
                        amount: amount,
                        method: 'BOLETO',
                        status: 'PENDENTE',
                        dueDate: new Date(new Date().setDate(new Date().getDate() + 10)),
                        reference: `Faturamento Ponto ${mirror.id} - ${totalHours.toFixed(2)}h`
                    }
                });
                await this.nfeService.emitInvoice(invoice.id, amount, mirror.contract.client);
            }
        }
    }
    async generateMonthlyInvoice(clientId) {
        const client = await this.prisma.client.findUnique({
            where: { id: clientId },
            include: {
                subscription: true,
                _count: { select: { users: true } }
            }
        });
        if (!client || !client.subscription) {
            throw new Error('Client or subscription not found');
        }
        const activeEmployeesCount = await this.prisma.employee.count({
            where: {
                contract: { clientId: clientId },
                status: 'ATIVO'
            }
        });
        const amount = Number(client.subscription.price) * activeEmployeesCount;
        const invoice = await this.prisma.invoice.create({
            data: {
                clientId: clientId,
                amount: amount,
                method: 'PIX',
                status: 'PENDENTE',
                dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
                reference: `Mensalidade ${new Date().toLocaleString('default', { month: 'long' })}`
            }
        });
        return invoice;
    }
    async processInvoicePayment(invoiceId, method) {
        const invoice = await this.prisma.invoice.findUnique({
            where: { id: invoiceId },
            include: { client: true }
        });
        if (!invoice || invoice.status === 'PAGO')
            return;
        const paymentResult = await this.paymentsService.processPayment(method, {
            amount: Number(invoice.amount),
            currency: 'BRL',
            description: invoice.reference,
            customerId: invoice.client.billingEmail || invoice.client.financialContact || 'cliente@noponto.com'
        });
        if (paymentResult.status === 'succeeded') {
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
            await this.nfeService.emitInvoice(invoiceId, Number(invoice.amount), invoice.client);
            return paymentResult;
        }
        else {
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
    async confirmPayment(invoiceId, transactionId) {
        const invoice = await this.prisma.invoice.findUnique({
            where: { id: invoiceId },
            include: {
                client: {
                    include: {
                        subscription: true
                    }
                }
            }
        });
        if (!invoice || invoice.status === 'PAGO') {
            this.logger.warn(`Invoice ${invoiceId} not found or already paid.`);
            return;
        }
        this.logger.log(`Confirming payment for invoice ${invoiceId} (Transaction: ${transactionId})`);
        await this.prisma.$transaction(async (tx) => {
            await tx.invoice.update({
                where: { id: invoiceId },
                data: {
                    status: 'PAGO',
                    paidAt: new Date(),
                    transactionId: transactionId
                }
            });
            if (['BLOQUEADO', 'INADIMPLENTE', 'SUSPENSO'].includes(invoice.client.status)) {
                await tx.client.update({
                    where: { id: invoice.clientId },
                    data: { status: 'ATIVO' }
                });
                this.logger.log(`Client ${invoice.clientId} reactivated.`);
            }
            if (invoice.client.subscription && invoice.client.subscription.status !== 'ATIVO') {
                await tx.saaSContract.update({
                    where: { id: invoice.client.subscription.id },
                    data: { status: 'ATIVO' }
                });
                this.logger.log(`Subscription ${invoice.client.subscription.id} reactivated.`);
            }
        });
        try {
            await this.nfeService.emitInvoice(invoiceId, Number(invoice.amount), invoice.client);
        }
        catch (error) {
            this.logger.error(`Failed to emit NF-e for invoice ${invoiceId}`, error);
        }
    }
    async findInvoiceByTransactionId(transactionId) {
        return this.prisma.invoice.findFirst({
            where: { transactionId: transactionId }
        });
    }
    async checkAndConfirmPayment(method, externalId) {
        try {
            const paymentInfo = await this.paymentsService.checkStatus(method, externalId);
            if (paymentInfo.status === 'succeeded') {
                const invoice = await this.findInvoiceByTransactionId(externalId);
                if (invoice) {
                    await this.confirmPayment(invoice.id, externalId);
                }
                else {
                    this.logger.warn(`Payment ${externalId} confirmed but no linked invoice found.`);
                }
            }
        }
        catch (error) {
            this.logger.error(`Error checking payment status for ${externalId}`, error);
        }
    }
};
exports.BillingService = BillingService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillingService.prototype, "handleRecurringBilling", null);
exports.BillingService = BillingService = BillingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        payments_service_1.PaymentsService,
        nfe_service_1.NfeService])
], BillingService);
//# sourceMappingURL=billing.service.js.map