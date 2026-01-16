import { Test, TestingModule } from '@nestjs/testing';
import { TimeRecordsController } from './time-records.controller';
import { TimeRecordsService } from './time-records.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

describe('TimeRecordsController', () => {
  let controller: TimeRecordsController;

  const mockPrisma = {
    employee: {
      findUnique: jest.fn(),
    },
    timeRecord: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  const mockConfig = {
    get: jest.fn(),
  };

  const mockService = {
    getDailySummary: jest.fn(),
    getMirror: jest.fn(),
    findAllByEmployee: jest.fn(),
    uploadPhoto: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeRecordsController],
      providers: [
        { provide: TimeRecordsService, useValue: mockService },
        { provide: PrismaService, useValue: mockPrisma },
        { provide: ConfigService, useValue: mockConfig },
      ],
    }).compile();

    controller = module.get<TimeRecordsController>(TimeRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
