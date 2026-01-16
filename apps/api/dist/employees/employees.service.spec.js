"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const employees_service_1 = require("./employees.service");
const prisma_service_1 = require("../prisma/prisma.service");
describe('EmployeesService', () => {
    let service;
    const mockPrisma = {
        user: {
            create: jest.fn(),
        },
        employee: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                employees_service_1.EmployeesService,
                { provide: prisma_service_1.PrismaService, useValue: mockPrisma },
            ],
        }).compile();
        service = module.get(employees_service_1.EmployeesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=employees.service.spec.js.map