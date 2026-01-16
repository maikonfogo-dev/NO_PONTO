import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { BillingService } from '../billing/billing.service';

describe('ClientsService', () => {
  let service: ClientsService;

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
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: ConfigService, useValue: mockConfigService },
        { provide: BillingService, useValue: mockBillingService },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);

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
        { ...mockClients[0], activeEmployees: 5 },
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
      expect(result).toEqual({ ...mockInvoice, paymentInfo: mockPaymentResult });
    });
  });
});
