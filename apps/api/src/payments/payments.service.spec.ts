import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsService } from './payments.service';
import { StripeAdapter } from './adapters/stripe.adapter';
import { MercadoPagoAdapter } from './adapters/mercadopago.adapter';
import { BadRequestException } from '@nestjs/common';

describe('PaymentsService', () => {
  let service: PaymentsService;

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
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentsService,
        { provide: StripeAdapter, useValue: mockStripeAdapter },
        { provide: MercadoPagoAdapter, useValue: mockMercadoPagoAdapter },
      ],
    }).compile();

    service = module.get<PaymentsService>(PaymentsService);

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
        .rejects.toThrow(BadRequestException);
    });
  });

  describe('processPayment', () => {
    it('should use StripeAdapter for CARD', async () => {
      const intent: any = { amount: 100 };
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
