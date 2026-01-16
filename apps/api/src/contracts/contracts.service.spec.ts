import { Test, TestingModule } from '@nestjs/testing';
import { ContractsService } from './contracts.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ContractsService', () => {
  let service: ContractsService;

  const mockPrisma = {
    contract: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    workLocation: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContractsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ContractsService>(ContractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
