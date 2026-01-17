"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsController = void 0;
const common_1 = require("@nestjs/common");
const contracts_service_1 = require("./contracts.service");
const auth_guard_1 = require("../auth/auth.guard");
const company_active_guard_1 = require("../auth/company-active.guard");
let ContractsController = class ContractsController {
    constructor(contractsService) {
        this.contractsService = contractsService;
    }
    create(req, createContractDto) {
        const user = req.user;
        const clientId = user && user.role !== 'SUPER_ADMIN'
            ? user.clientId
            : createContractDto.clientId;
        return this.contractsService.create(Object.assign(Object.assign({}, createContractDto), { clientId }));
    }
    findAll(req, clientId) {
        const user = req.user;
        const effectiveClientId = user && user.role !== 'SUPER_ADMIN' ? user.clientId : clientId;
        return this.contractsService.findAll(effectiveClientId);
    }
    async findOne(req, id) {
        const contract = await this.contractsService.findOne(id);
        const user = req.user;
        if (user &&
            user.role !== 'SUPER_ADMIN' &&
            contract.clientId &&
            user.clientId !== contract.clientId) {
            throw new common_1.ForbiddenException('Acesso negado a este contrato');
        }
        return contract;
    }
    async getWorkLocations(req, id) {
        const contract = await this.contractsService.findOne(id);
        const user = req.user;
        if (user &&
            user.role !== 'SUPER_ADMIN' &&
            contract.clientId &&
            user.clientId !== contract.clientId) {
            throw new common_1.ForbiddenException('Acesso negado aos postos deste contrato');
        }
        return this.contractsService.getWorkLocations(id);
    }
    async update(req, id, updateContractDto) {
        const contract = await this.contractsService.findOne(id);
        const user = req.user;
        if (user &&
            user.role !== 'SUPER_ADMIN' &&
            contract.clientId &&
            user.clientId !== contract.clientId) {
            throw new common_1.ForbiddenException('Apenas gestores do cliente podem editar este contrato');
        }
        const data = user && user.role !== 'SUPER_ADMIN'
            ? Object.assign(Object.assign({}, updateContractDto), { clientId: contract.clientId }) : updateContractDto;
        return this.contractsService.update(id, data);
    }
    async remove(req, id) {
        const contract = await this.contractsService.findOne(id);
        const user = req.user;
        if (user &&
            user.role !== 'SUPER_ADMIN' &&
            contract.clientId &&
            user.clientId !== contract.clientId) {
            throw new common_1.ForbiddenException('Acesso negado a este contrato');
        }
        return this.contractsService.remove(id);
    }
};
exports.ContractsController = ContractsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ContractsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('clientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ContractsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/postos'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "getWorkLocations", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "remove", null);
exports.ContractsController = ContractsController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, company_active_guard_1.CompanyActiveGuard),
    (0, common_1.Controller)('contratos'),
    __metadata("design:paramtypes", [contracts_service_1.ContractsService])
], ContractsController);
//# sourceMappingURL=contracts.controller.js.map