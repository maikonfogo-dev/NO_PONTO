import { Test, TestingModule } from '@nestjs/testing';
import { TimeRecordsService } from './time-records.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

describe('TimeRecordsService', () => {
  let service: TimeRecordsService;

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
    get: jest.fn().mockImplementation((key: string) => {
      switch (key) {
        case 'AWS_BUCKET_NAME':
          return 'test-bucket';
        case 'AWS_REGION':
          return 'us-east-1';
        case 'AWS_ACCESS_KEY_ID':
          return 'test';
        case 'AWS_SECRET_ACCESS_KEY':
          return 'test';
        case 'AWS_ENDPOINT':
          return 'http://localhost:9000';
        default:
          return undefined;
      }
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TimeRecordsService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: ConfigService, useValue: mockConfig },
      ],
    }).compile();

    service = module.get<TimeRecordsService>(TimeRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
