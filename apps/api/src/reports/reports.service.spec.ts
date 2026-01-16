import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { PrismaService } from '../prisma/prisma.service';
import { TimeRecordsService } from '../time-records/time-records.service';

describe('ReportsService', () => {
  let service: ReportsService;

  const mockPrismaService = {
    employee: {
      findMany: jest.fn(),
      count: jest.fn(),
    },
    punch: {
        findMany: jest.fn(),
    }
  };

  const mockTimeRecordsService = {
    getMirror: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: TimeRecordsService, useValue: mockTimeRecordsService },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateEspelhoPdf', () => {
    it('should generate a PDF buffer', async () => {
      const mockMirrorData = {
        employee: {
          name: 'John Doe',
          cpf: '123.456.789-00',
          position: 'Developer',
          matricula: '1234',
        },
        days: [
          {
            date: '2023-01-01',
            punches: [{ timestamp: '2023-01-01T08:00:00Z' }, { timestamp: '2023-01-01T17:00:00Z' }],
            status: 'OK',
            workedHours: '8.00',
            expectedHours: '8.00',
            balance: '0.00',
          },
        ],
      };

      mockTimeRecordsService.getMirror.mockResolvedValue(mockMirrorData);

      const result = await service.generateEspelhoPdf('emp-1', 1, 2023);
      expect(result).toBeInstanceOf(Buffer);
      expect(mockTimeRecordsService.getMirror).toHaveBeenCalledWith('emp-1', 1, 2023);
    });
  });

  describe('getDashboardData', () => {
    it('should return dashboard data', async () => {
      mockPrismaService.employee.findMany.mockResolvedValue([
        { id: '1', workLocationId: 'loc-1' },
      ]);
      mockPrismaService.employee.count.mockResolvedValue(10);
      
      // Mock punch data for internal logic of getDashboardData if needed
      // Based on reading the code, it might use prisma to fetch punches. 
      // Let's assume it does more logic, but for now we test basic execution.
      // If getDashboardData calls other prisma methods, we might need to mock them.
      // Checking file content again... it does aggregate logic.
      // It calls prisma.punch.findMany. I added that to the mock above.
      
      (mockPrismaService.punch.findMany as jest.Mock).mockResolvedValue([]);

      const result = await service.getDashboardData(1, 2023);
      
      expect(result).toBeDefined();
      expect(result.kpis.activeEmployees).toBe(1);
      expect(result.kpis.totalEmployees).toBe(10);
    });
  });
});
