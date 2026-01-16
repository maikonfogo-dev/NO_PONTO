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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const clients_service_1 = require("./clients.service");
const create_client_dto_1 = require("./dto/create-client.dto");
const update_client_dto_1 = require("./dto/update-client.dto");
const additional_client_dto_1 = require("./dto/additional-client.dto");
const swagger_1 = require("@nestjs/swagger");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    create(createClientDto) {
        return this.clientsService.create(createClientDto);
    }
    findAll(search, status, plan, inadimplente) {
        return this.clientsService.findAll({ search, status, plan, inadimplente });
    }
    findOne(id) {
        return this.clientsService.findOne(id);
    }
    update(id, updateClientDto) {
        return this.clientsService.update(id, updateClientDto);
    }
    remove(id) {
        return this.clientsService.remove(id);
    }
    updateStatus(id, dto) {
        return this.clientsService.updateStatus(id, dto);
    }
    updatePlan(id, dto) {
        return this.clientsService.updatePlan(id, dto);
    }
    getUsage(id) {
        return this.clientsService.getUsage(id);
    }
    createUnit(id, dto) {
        return this.clientsService.createUnit(id, dto);
    }
    createUser(id, dto) {
        return this.clientsService.createUser(id, dto);
    }
    getAuditLogs(id) {
        return this.clientsService.getAuditLogs(id);
    }
    createInvoice(id, dto) {
        return this.clientsService.createInvoice(id, dto);
    }
    getInvoices(id) {
        return this.clientsService.getInvoices(id);
    }
    uploadDocument(id, file, type) {
        return this.clientsService.uploadDocument(id, file, type);
    }
    getDocuments(id) {
        return this.clientsService.getDocuments(id);
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar novo cliente' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Cliente criado com sucesso.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar clientes' }),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('plan')),
    __param(3, (0, common_1.Query)('inadimplente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter perfil completo do cliente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar dados básicos do cliente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_dto_1.UpdateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover cliente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar status do cliente (Bloqueio/Desbloqueio)' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, additional_client_dto_1.UpdateClientStatusDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)(':id/plano'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar plano e cobrança' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, additional_client_dto_1.UpdateClientPlanDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updatePlan", null);
__decorate([
    (0, common_1.Get)(':id/uso'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter métricas de uso do sistema' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getUsage", null);
__decorate([
    (0, common_1.Post)(':id/unidades'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar unidade/posto para o cliente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, additional_client_dto_1.CreateUnitDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createUnit", null);
__decorate([
    (0, common_1.Post)(':id/usuarios'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar usuário gestor para o cliente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, additional_client_dto_1.CreateClientUserDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id/auditoria'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar logs de auditoria do cliente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getAuditLogs", null);
__decorate([
    (0, common_1.Post)(':id/cobranca'),
    (0, swagger_1.ApiOperation)({ summary: 'Gerar cobrança avulsa (Pix/Boleto)' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createInvoice", null);
__decorate([
    (0, common_1.Get)(':id/faturas'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar histórico de cobranças' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getInvoices", null);
__decorate([
    (0, common_1.Post)(':id/documentos'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload de documento' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "uploadDocument", null);
__decorate([
    (0, common_1.Get)(':id/documentos'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar documentos do cliente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getDocuments", null);
exports.ClientsController = ClientsController = __decorate([
    (0, swagger_1.ApiTags)('Clientes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('clientes'),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map