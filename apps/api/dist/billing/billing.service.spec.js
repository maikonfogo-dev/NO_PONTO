"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const billing_service_1 = require("./billing.service");
const prisma_service_1 = require("../prisma/prisma.service");
const payments_service_1 = require("../payments/payments.service");
const nfe_service_1 = require("./nfe.service");
describe('BillingService', () => {
    let service;
    let prisma;
    let paymentsService;
    let nfeService;
    const mockPrisma = {
        invoice: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            findFirst: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
        },
        client: {
            update: jest.fn(),
            findUnique: jest.fn(),
        },
        saaSContract: {
            findMany: jest.fn(),
            update: jest.fn(),
        },
        employee: {
            count: jest.fn(),
        },
        pointMirror: {
            findUnique: jest.fn(),
        },
        $transaction: jest.fn((cb) => cb(mockPrisma)),
    };
    const mockPaymentsService = {
        processPayment: jest.fn(),
        checkStatus: jest.fn(),
    };
    const mockNfeService = {
        emitInvoice: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                billing_service_1.BillingService,
                { provide: prisma_service_1.PrismaService, useValue: mockPrisma },
                { provide: payments_service_1.PaymentsService, useValue: mockPaymentsService },
                { provide: nfe_service_1.NfeService, useValue: mockNfeService },
            ],
        }).compile();
        service = module.get(billing_service_1.BillingService);
        prisma = module.get(prisma_service_1.PrismaService);
        paymentsService = module.get(payments_service_1.PaymentsService);
        nfeService = module.get(nfe_service_1.NfeService);
        jest.clearAllMocks();
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('processInvoicePayment', () => {
        it('should do nothing if invoice not found', async () => {
            prisma.invoice.findUnique = jest.fn().mockResolvedValue(null);
            const result = await service.processInvoicePayment('inv-1', 'PIX');
            expect(prisma.invoice.findUnique).toHaveBeenCalledWith({
                where: { id: 'inv-1' },
                include: { client: true },
            });
            expect(paymentsService.processPayment).not.toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        it('should do nothing if invoice already paid', async () => {
            prisma.invoice.findUnique = jest.fn().mockResolvedValue({
                id: 'inv-1',
                status: 'PAGO',
            });
            const result = await service.processInvoicePayment('inv-1', 'PIX');
            expect(paymentsService.processPayment).not.toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        it('should process payment and update invoice when succeeded', async () => {
            prisma.invoice.findUnique = jest.fn().mockResolvedValue({
                id: 'inv-1',
                status: 'PENDENTE',
                amount: 100,
                reference: 'Ref',
                client: { billingEmail: 'test@test.com', financialContact: null },
            });
            paymentsService.processPayment.mockResolvedValue({
                id: 'tx-1',
                status: 'succeeded',
                url: 'http://pay',
                qrCode: 'qrcode',
                qrCodeBase64: 'base64',
            });
            const result = await service.processInvoicePayment('inv-1', 'PIX');
            expect(paymentsService.processPayment).toHaveBeenCalledWith('PIX', {
                amount: 100,
                currency: 'BRL',
                description: 'Ref',
                customerId: 'test@test.com',
            });
            expect(prisma.invoice.update).toHaveBeenCalledWith(expect.objectContaining({
                where: { id: 'inv-1' },
                data: expect.objectContaining({
                    status: 'PAGO',
                    transactionId: 'tx-1',
                    url: 'http://pay',
                }),
            }));
            expect(nfeService.emitInvoice).toHaveBeenCalledWith('inv-1', 100, expect.any(Object));
            expect(result).toEqual(expect.objectContaining({
                id: 'tx-1',
                status: 'succeeded',
            }));
        });
        it('should update invoice with transaction info when not succeeded', async () => {
            prisma.invoice.findUnique = jest.fn().mockResolvedValue({
                id: 'inv-1',
                status: 'PENDENTE',
                amount: 100,
                reference: 'Ref',
                client: { billingEmail: null, financialContact: 'finance@test.com' },
            });
            paymentsService.processPayment.mockResolvedValue({
                id: 'tx-2',
                status: 'pending',
                url: 'http://pay2',
                qrCode: 'qrcode2',
                qrCodeBase64: 'base642',
            });
            const result = await service.processInvoicePayment('inv-1', 'PIX');
            expect(paymentsService.processPayment).toHaveBeenCalled();
            expect(prisma.invoice.update).toHaveBeenCalledWith({
                where: { id: 'inv-1' },
                data: {
                    transactionId: 'tx-2',
                    url: 'http://pay2',
                    qrCode: 'qrcode2',
                    qrCodeBase64: 'base642',
                },
            });
            expect(nfeService.emitInvoice).not.toHaveBeenCalled();
            expect(result.status).toBe('pending');
        });
    });
    describe('confirmPayment', () => {
        it('should log and return if invoice not found or already paid', async () => {
            prisma.invoice.findUnique = jest.fn().mockResolvedValue(null);
            const result = await service.confirmPayment('inv-1', 'tx-1');
            expect(prisma.$transaction).not.toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        it('should update invoice and reactivate blocked client', async () => {
            prisma.invoice.findUnique = jest.fn().mockResolvedValue({
                id: 'inv-1',
                amount: 150,
                status: 'PENDENTE',
                clientId: 'client-1',
                client: { id: 'client-1', status: 'SUSPENSO' },
            });
            await service.confirmPayment('inv-1', 'tx-123');
            expect(prisma.$transaction).toHaveBeenCalled();
            expect(prisma.invoice.update).toHaveBeenCalledWith({
                where: { id: 'inv-1' },
                data: expect.objectContaining({
                    status: 'PAGO',
                    transactionId: 'tx-123',
                }),
            });
            expect(prisma.client.update).toHaveBeenCalledWith({
                where: { id: 'client-1' },
                data: { status: 'ATIVO' },
            });
            expect(nfeService.emitInvoice).toHaveBeenCalledWith('inv-1', 150, expect.any(Object));
        });
    });
    describe('checkAndConfirmPayment', () => {
        it('should call confirmPayment when payment succeeded and invoice exists', async () => {
            paymentsService.checkStatus.mockResolvedValue({
                id: 'pay-1',
                status: 'succeeded',
            });
            prisma.invoice.findFirst = jest.fn().mockResolvedValue({
                id: 'inv-1',
            });
            const confirmSpy = jest.spyOn(service, 'confirmPayment').mockResolvedValue(undefined);
            await service.checkAndConfirmPayment('PIX', 'ext-1');
            expect(paymentsService.checkStatus).toHaveBeenCalledWith('PIX', 'ext-1');
            expect(prisma.invoice.findFirst).toHaveBeenCalledWith({
                where: { transactionId: 'ext-1' },
            });
            expect(confirmSpy).toHaveBeenCalledWith('inv-1', 'ext-1');
        });
        it('should not throw when invoice not found', async () => {
            paymentsService.checkStatus.mockResolvedValue({
                id: 'pay-2',
                status: 'succeeded',
            });
            prisma.invoice.findFirst = jest.fn().mockResolvedValue(null);
            await service.checkAndConfirmPayment('PIX', 'ext-2');
            expect(paymentsService.checkStatus).toHaveBeenCalled();
            expect(prisma.invoice.findFirst).toHaveBeenCalled();
        });
        it('should handle errors from paymentsService.checkStatus gracefully', async () => {
            paymentsService.checkStatus = jest
                .fn()
                .mockRejectedValue(new Error('gateway error'));
            await service.checkAndConfirmPayment('PIX', 'ext-3');
            expect(paymentsService.checkStatus).toHaveBeenCalledWith('PIX', 'ext-3');
        });
    });
});
//# sourceMappingURL=billing.service.spec.js.map