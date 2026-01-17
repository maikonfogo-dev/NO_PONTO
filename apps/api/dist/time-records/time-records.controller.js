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
exports.TimeRecordsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const time_records_service_1 = require("./time-records.service");
const auth_guard_1 = require("../auth/auth.guard");
const company_active_guard_1 = require("../auth/company-active.guard");
let TimeRecordsController = class TimeRecordsController {
    constructor(timeRecordsService) {
        this.timeRecordsService = timeRecordsService;
    }
    async getDailyStatus(employeeId) {
        if (!employeeId)
            throw new common_1.BadRequestException('Employee ID is required');
        return this.timeRecordsService.getDailySummary(employeeId);
    }
    async getMirror(employeeId, month, year) {
        if (!employeeId || !month || !year)
            throw new common_1.BadRequestException('EmployeeID, Month and Year are required');
        return this.timeRecordsService.getMirror(employeeId, Number(month), Number(year));
    }
    async findAllByEmployee(employeeId, limit) {
        return this.timeRecordsService.findAllByEmployee(employeeId, limit ? parseInt(limit) : 20);
    }
    async registrar(body, file, req) {
        const ip = body.ip || req.ip || req.connection.remoteAddress;
        let photoUrl = body.photoUrl;
        if (file) {
            photoUrl = await this.timeRecordsService.uploadPhoto(file);
        }
        const latitude = parseFloat(body.latitude);
        const longitude = parseFloat(body.longitude);
        const accuracy = body.accuracy ? parseFloat(body.accuracy) : undefined;
        return this.timeRecordsService.create({
            employeeId: body.employeeId,
            type: body.type,
            latitude,
            longitude,
            accuracy,
            address: body.address,
            photoUrl,
            deviceId: body.deviceId,
            ip,
        });
    }
};
exports.TimeRecordsController = TimeRecordsController;
__decorate([
    (0, common_1.Get)('hoje'),
    (0, swagger_1.ApiOperation)({ summary: 'Status do dia atual do colaborador' }),
    __param(0, (0, common_1.Query)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimeRecordsController.prototype, "getDailyStatus", null);
__decorate([
    (0, common_1.Get)('espelho'),
    (0, swagger_1.ApiOperation)({ summary: 'Espelho de ponto mensal' }),
    __param(0, (0, common_1.Query)('employeeId')),
    __param(1, (0, common_1.Query)('month')),
    __param(2, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], TimeRecordsController.prototype, "getMirror", null);
__decorate([
    (0, common_1.Get)('historico/:employeeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Histórico de batidas (Listagem simples)' }),
    __param(0, (0, common_1.Param)('employeeId')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TimeRecordsController.prototype, "findAllByEmployee", null);
__decorate([
    (0, common_1.Post)('registrar'),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar batida de ponto' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                employeeId: { type: 'string', description: 'ID do colaborador' },
                type: { type: 'string', description: 'Tipo de batida (ENTRADA, SAIDA, etc.)' },
                latitude: { type: 'number' },
                longitude: { type: 'number' },
                accuracy: { type: 'number', nullable: true },
                address: { type: 'string', nullable: true },
                deviceId: { type: 'string', nullable: true },
                file: { type: 'string', format: 'binary', description: 'Foto do colaborador' },
            },
            required: ['employeeId', 'type'],
        },
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Batida registrada com sucesso.' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TimeRecordsController.prototype, "registrar", null);
exports.TimeRecordsController = TimeRecordsController = __decorate([
    (0, swagger_1.ApiTags)('Ponto'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, company_active_guard_1.CompanyActiveGuard),
    (0, common_1.Controller)('ponto'),
    __metadata("design:paramtypes", [time_records_service_1.TimeRecordsService])
], TimeRecordsController);
//# sourceMappingURL=time-records.controller.js.map