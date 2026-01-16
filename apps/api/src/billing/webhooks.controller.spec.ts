import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksController } from './webhooks.controller';
import { BillingService } from './billing.service';

describe('WebhooksController', () => {
  let controller: WebhooksController;

  const mockBillingService = {
    confirmPayment: jest.fn(),
    checkAndConfirmPayment: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhooksController],
      providers: [
        { provide: BillingService, useValue: mockBillingService },
      ],
    }).compile();

    controller = module.get<WebhooksController>(WebhooksController);

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
