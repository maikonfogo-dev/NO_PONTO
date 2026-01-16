"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const contracts_service_1 = require("./contracts.service");
const prisma_service_1 = require("../prisma/prisma.service");
describe('ContractsService', () => {
    let service;
    const mockPrisma = {
        contract: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        workLocation: {
            findMany: jest.fn(),
        },
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                contracts_service_1.ContractsService,
                { provide: prisma_service_1.PrismaService, useValue: mockPrisma },
            ],
        }).compile();
        service = module.get(contracts_service_1.ContractsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=contracts.service.spec.js.map