import { Test, TestingModule } from '@nestjs/testing';
import { ContractsController } from './contracts.controller';
import { ContractsService } from './contracts.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ContractsController', () => {
  let controller: ContractsController;

  const mockPrisma = {
    contract: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
  };

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    getWorkLocations: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractsController],
      providers: [
        { provide: ContractsService, useValue: mockService },
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    controller = module.get<ContractsController>(ContractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
