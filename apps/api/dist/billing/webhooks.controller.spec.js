"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webhooks_controller_1 = require("./webhooks.controller");
const billing_service_1 = require("./billing.service");
describe('WebhooksController', () => {
    let controller;
    const mockBillingService = {
        confirmPayment: jest.fn(),
        checkAndConfirmPayment: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [webhooks_controller_1.WebhooksController],
            providers: [
                { provide: billing_service_1.BillingService, useValue: mockBillingService },
            ],
        }).compile();
        controller = module.get(webhooks_controller_1.WebhooksController);
        jest.clearAllMocks();
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    describe('handleStripe', () => {
        it('should confirm payment if invoiceId exists', async () => {
            const body = {
                type: 'invoice.payment_succeeded',
                data: {
                    object: {
                        id: 'trans-1',
                        metadata: { invoiceId: 'inv-1' },
                    },
                },
            };
            await controller.handleStripe(body);
            expect(mockBillingService.confirmPayment).toHaveBeenCalledWith('inv-1', 'trans-1');
        });
        it('should not confirm payment if invoiceId is missing', async () => {
            const body = {
                type: 'invoice.payment_succeeded',
                data: {
                    object: {
                        id: 'trans-1',
                        metadata: {},
                    },
                },
            };
            await controller.handleStripe(body);
            expect(mockBillingService.confirmPayment).not.toHaveBeenCalled();
        });
    });
    describe('handleMercadoPago', () => {
        it('should check and confirm payment if topic is payment', async () => {
            const body = {
                topic: 'payment',
                data: { id: '12345' },
            };
            await controller.handleMercadoPago(body, {});
            expect(mockBillingService.checkAndConfirmPayment).toHaveBeenCalledWith('PIX', '12345');
        });
    });
});
//# sourceMappingURL=webhooks.controller.spec.js.map