"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const payments_service_1 = require("./payments.service");
const stripe_adapter_1 = require("./adapters/stripe.adapter");
const mercadopago_adapter_1 = require("./adapters/mercadopago.adapter");
const common_1 = require("@nestjs/common");
describe('PaymentsService', () => {
    let service;
    const mockStripeAdapter = {
        createCustomer: jest.fn(),
        createPayment: jest.fn(),
        getPaymentStatus: jest.fn(),
    };
    const mockMercadoPagoAdapter = {
        createCustomer: jest.fn(),
        createPayment: jest.fn(),
        getPaymentStatus: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                payments_service_1.PaymentsService,
                { provide: stripe_adapter_1.StripeAdapter, useValue: mockStripeAdapter },
                { provide: mercadopago_adapter_1.MercadoPagoAdapter, useValue: mockMercadoPagoAdapter },
            ],
        }).compile();
        service = module.get(payments_service_1.PaymentsService);
        jest.clearAllMocks();
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('createCustomer', () => {
        it('should use StripeAdapter for CARD', async () => {
            await service.createCustomer('CARD', 'Test', 'test@test.com');
            expect(mockStripeAdapter.createCustomer).toHaveBeenCalledWith('Test', 'test@test.com');
        });
        it('should use MercadoPagoAdapter for PIX', async () => {
            await service.createCustomer('PIX', 'Test', 'test@test.com');
            expect(mockMercadoPagoAdapter.createCustomer).toHaveBeenCalledWith('Test', 'test@test.com');
        });
        it('should throw BadRequestException for unsupported method', async () => {
            await expect(service.createCustomer('UNKNOWN', 'Test', 'test@test.com'))
                .rejects.toThrow(common_1.BadRequestException);
        });
    });
    describe('processPayment', () => {
        it('should use StripeAdapter for CARD', async () => {
            const intent = { amount: 100 };
            await service.processPayment('CARD', intent);
            expect(mockStripeAdapter.createPayment).toHaveBeenCalledWith(intent);
        });
    });
    describe('checkStatus', () => {
        it('should use MercadoPagoAdapter for PIX', async () => {
            await service.checkStatus('PIX', '123');
            expect(mockMercadoPagoAdapter.getPaymentStatus).toHaveBeenCalledWith('123');
        });
    });
});
//# sourceMappingURL=payments.service.spec.js.map