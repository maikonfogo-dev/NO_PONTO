"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const time_records_service_1 = require("./time-records.service");
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
describe('TimeRecordsService', () => {
    let service;
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
        get: jest.fn().mockImplementation((key) => {
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
        const module = await testing_1.Test.createTestingModule({
            providers: [
                time_records_service_1.TimeRecordsService,
                { provide: prisma_service_1.PrismaService, useValue: mockPrisma },
                { provide: config_1.ConfigService, useValue: mockConfig },
            ],
        }).compile();
        service = module.get(time_records_service_1.TimeRecordsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=time-records.service.spec.js.map