import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { PrismaService } from '../prisma/prisma.service';

describe('EmployeesController', () => {
  let controller: EmployeesController;

  const mockPrisma = {
    employee: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
  };

  const mockService = {
    create: jest.fn(),
    importEmployees: jest.fn(),
    findAll: jest.fn(),
    getSchedules: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    transfer: jest.fn(),
    getDashboard: jest.fn(),
    updateStatus: jest.fn(),
    linkSchedule: jest.fn(),
    getCltSummary: jest.fn(),
    getPoints: jest.fn(),
    uploadDocument: jest.fn(),
    getAuditLogs: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [
        { provide: EmployeesService, useValue: mockService },
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    controller = module.get<EmployeesController>(EmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
