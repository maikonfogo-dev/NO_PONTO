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
const auth_guard_1 = require("../auth/auth.guard");
const company_active_guard_1 = require("../auth/company-active.guard");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    create(createClientDto) {
        return this.clientsService.create(createClientDto);
    }
    findAll(req, search, status, plan, inadimplente) {
        const user = req.user;
        const clientId = user && user.role !== 'SUPER_ADMIN' ? user.clientId : undefined;
        return this.clientsService.findAll({ search, status, plan, inadimplente, clientId });
    }
    async findOne(req, id) {
        const user = req.user;
        if (user && user.role !== 'SUPER_ADMIN' && user.clientId !== id) {
            throw new common_1.ForbiddenException('Acesso negado a este cliente');
        }
        return this.clientsService.findOne(id);
    }
    update(req, id, updateClientDto) {
        const user = req.user;
        if (user && user.role !== 'SUPER_ADMIN' && user.clientId !== id) {
            throw new common_1.ForbiddenException('Apenas gestores do cliente podem editar seus dados');
        }
        return this.clientsService.update(id, updateClientDto);
    }
    remove(req, id) {
        const user = req.user;
        if (user && user.role !== 'SUPER_ADMIN') {
            throw new common_1.ForbiddenException('Apenas o dono do SaaS pode remover clientes');
        }
        return this.clientsService.remove(id);
    }
    updateStatus(req, id, dto) {
        const user = req.user;
        if (user && user.role !== 'SUPER_ADMIN') {
            throw new common_1.ForbiddenException('Apenas o dono do SaaS pode alterar o status de clientes');
        }
        return this.clientsService.updateStatus(id, dto);
    }
    updatePlan(req, id, dto) {
        const user = req.user;
        if (user && user.role !== 'SUPER_ADMIN') {
            throw new common_1.ForbiddenException('Apenas o dono do SaaS pode alterar plano de clientes');
        }
        return this.clientsService.updatePlan(id, dto);
    }
    getUsage(req, id) {
        const user = req.user;
        if (user && user.role !== 'SUPER_ADMIN' && user.clientId !== id) {
            throw new common_1.ForbiddenException('Acesso negado às métricas deste cliente');
        }
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
    getPayments(id) {
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
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('plan')),
    __param(4, (0, common_1.Query)('inadimplente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter perfil completo do cliente' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar dados básicos do cliente' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_client_dto_1.UpdateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover cliente' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar status do cliente (Bloqueio/Desbloqueio)' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, additional_client_dto_1.UpdateClientStatusDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)(':id/plano'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar plano e cobrança' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, additional_client_dto_1.UpdateClientPlanDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updatePlan", null);
__decorate([
    (0, common_1.Get)(':id/uso'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter métricas de uso do sistema' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
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
    (0, swagger_1.ApiOperation)({ summary: 'Listar histórico de cobranças da empresa' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getInvoices", null);
__decorate([
    (0, common_1.Get)(':id/pagamentos'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar pagamentos da empresa' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getPayments", null);
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
    (0, swagger_1.ApiTags)('Empresas', 'Clientes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, company_active_guard_1.CompanyActiveGuard),
    (0, common_1.Controller)(['clientes', 'empresas']),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map