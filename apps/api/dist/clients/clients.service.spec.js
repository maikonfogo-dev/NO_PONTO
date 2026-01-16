"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const clients_service_1 = require("./clients.service");
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
const billing_service_1 = require("../billing/billing.service");
describe('ClientsService', () => {
    let service;
    const mockPrismaService = {
        client: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            count: jest.fn(),
        },
        user: {
            create: jest.fn(),
        },
        saaSContract: {
            create: jest.fn(),
        },
        workSchedule: {
            create: jest.fn(),
        },
        workLocation: {
            create: jest.fn(),
        },
        auditLog: {
            create: jest.fn(),
        },
        employee: {
            count: jest.fn(),
        },
        invoice: {
            findMany: jest.fn(),
            create: jest.fn(),
        },
        $transaction: jest.fn((callback) => callback(mockPrismaService)),
    };
    const mockConfigService = {
        get: jest.fn(),
    };
    const mockBillingService = {
        processInvoicePayment: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                clients_service_1.ClientsService,
                { provide: prisma_service_1.PrismaService, useValue: mockPrismaService },
                { provide: config_1.ConfigService, useValue: mockConfigService },
                { provide: billing_service_1.BillingService, useValue: mockBillingService },
            ],
        }).compile();
        service = module.get(clients_service_1.ClientsService);
        jest.clearAllMocks();
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('findAll', () => {
        it('should return clients with active employees count', async () => {
            const mockClients = [
                { id: 'c1', name: 'Client 1', subscription: { plan: 'BASIC' }, _count: {} },
            ];
            mockPrismaService.client.findMany.mockResolvedValue(mockClients);
            mockPrismaService.employee.count.mockResolvedValue(5);
            const result = await service.findAll();
            expect(result).toEqual([
                Object.assign(Object.assign({}, mockClients[0]), { activeEmployees: 5 }),
            ]);
            expect(mockPrismaService.client.findMany).toHaveBeenCalled();
        });
    });
    describe('createInvoice', () => {
        it('should create an invoice and process payment', async () => {
            const mockInvoice = { id: 'inv-1', reference: 'Ref' };
            const mockPaymentResult = { status: 'pending' };
            mockPrismaService.invoice.create.mockResolvedValue(mockInvoice);
            mockBillingService.processInvoicePayment.mockResolvedValue(mockPaymentResult);
            const result = await service.createInvoice('c1', { amount: 100, method: 'PIX', reference: 'Ref' });
            expect(mockPrismaService.invoice.create).toHaveBeenCalled();
            expect(mockBillingService.processInvoicePayment).toHaveBeenCalledWith('inv-1', 'PIX');
            expect(result).toEqual(Object.assign(Object.assign({}, mockInvoice), { paymentInfo: mockPaymentResult }));
        });
    });
});
//# sourceMappingURL=clients.service.spec.js.map