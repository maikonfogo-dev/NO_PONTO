"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const time_records_controller_1 = require("./time-records.controller");
const time_records_service_1 = require("./time-records.service");
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
describe('TimeRecordsController', () => {
    let controller;
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
        const module = await testing_1.Test.createTestingModule({
            controllers: [time_records_controller_1.TimeRecordsController],
            providers: [
                { provide: time_records_service_1.TimeRecordsService, useValue: mockService },
                { provide: prisma_service_1.PrismaService, useValue: mockPrisma },
                { provide: config_1.ConfigService, useValue: mockConfig },
            ],
        }).compile();
        controller = module.get(time_records_controller_1.TimeRecordsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=time-records.controller.spec.js.map