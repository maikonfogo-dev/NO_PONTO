"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const employees_controller_1 = require("./employees.controller");
const employees_service_1 = require("./employees.service");
const prisma_service_1 = require("../prisma/prisma.service");
describe('EmployeesController', () => {
    let controller;
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
        const module = await testing_1.Test.createTestingModule({
            controllers: [employees_controller_1.EmployeesController],
            providers: [
                { provide: employees_service_1.EmployeesService, useValue: mockService },
                { provide: prisma_service_1.PrismaService, useValue: mockPrisma },
            ],
        }).compile();
        controller = module.get(employees_controller_1.EmployeesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=employees.controller.spec.js.map