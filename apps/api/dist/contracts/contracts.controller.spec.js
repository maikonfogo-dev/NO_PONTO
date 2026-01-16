"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const contracts_controller_1 = require("./contracts.controller");
const contracts_service_1 = require("./contracts.service");
const prisma_service_1 = require("../prisma/prisma.service");
describe('ContractsController', () => {
    let controller;
    const mockPrisma = {
        contract: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
        },
    };
    const mockService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        getWorkLocations: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [contracts_controller_1.ContractsController],
            providers: [
                { provide: contracts_service_1.ContractsService, useValue: mockService },
                { provide: prisma_service_1.PrismaService, useValue: mockPrisma },
            ],
        }).compile();
        controller = module.get(contracts_controller_1.ContractsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=contracts.controller.spec.js.map