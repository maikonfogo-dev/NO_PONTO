"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const reports_service_1 = require("./reports.service");
const prisma_service_1 = require("../prisma/prisma.service");
const time_records_service_1 = require("../time-records/time-records.service");
describe('ReportsService', () => {
    let service;
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
        const module = await testing_1.Test.createTestingModule({
            providers: [
                reports_service_1.ReportsService,
                { provide: prisma_service_1.PrismaService, useValue: mockPrismaService },
                { provide: time_records_service_1.TimeRecordsService, useValue: mockTimeRecordsService },
            ],
        }).compile();
        service = module.get(reports_service_1.ReportsService);
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
            mockPrismaService.punch.findMany.mockResolvedValue([]);
            const result = await service.getDashboardData(1, 2023);
            expect(result).toBeDefined();
            expect(result.kpis.activeEmployees).toBe(1);
            expect(result.kpis.totalEmployees).toBe(10);
        });
    });
});
//# sourceMappingURL=reports.service.spec.js.map