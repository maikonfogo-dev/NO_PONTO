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
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const employees_service_1 = require("./employees.service");
const create_employee_dto_1 = require("./dto/create-employee.dto");
const update_employee_dto_1 = require("./dto/update-employee.dto");
const transfer_employee_dto_1 = require("./dto/transfer-employee.dto");
let EmployeesController = class EmployeesController {
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    create(createEmployeeDto) {
        return this.employeesService.create(createEmployeeDto);
    }
    importEmployees(file) {
        return this.employeesService.importEmployees(file);
    }
    findAll(contractId, clientId, status, search, position, workLocationId, scheduleId, missingPoint) {
        return this.employeesService.findAll({
            contractId,
            clientId,
            status,
            search,
            position,
            workLocationId,
            scheduleId,
            missingPoint: missingPoint === 'true',
        });
    }
    getSchedules() {
        return this.employeesService.getSchedules();
    }
    findOne(id) {
        return this.employeesService.findOne(id);
    }
    update(id, updateEmployeeDto) {
        return this.employeesService.update(id, updateEmployeeDto);
    }
    remove(id) {
        return this.employeesService.remove(id);
    }
    transfer(id, transferDto) {
        return this.employeesService.transfer(id, transferDto);
    }
    getDashboard(id) {
        return this.employeesService.getDashboard(id);
    }
    updateStatus(id, body) {
        return this.employeesService.updateStatus(id, body.status);
    }
    linkSchedule(id, body) {
        return this.employeesService.linkSchedule(id, body);
    }
    getCltSummary(id) {
        return this.employeesService.getCltSummary(id);
    }
    getPoints(id) {
        return this.employeesService.getPoints(id);
    }
    uploadDocument(id, body) {
        return this.employeesService.uploadDocument(id, body);
    }
    getAuditLogs(id) {
        return this.employeesService.getAuditLogs(id);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('importar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "importEmployees", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('contractId')),
    __param(1, (0, common_1.Query)('clientId')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('position')),
    __param(5, (0, common_1.Query)('workLocationId')),
    __param(6, (0, common_1.Query)('scheduleId')),
    __param(7, (0, common_1.Query)('missingPoint')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('jornadas/listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "getSchedules", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_dto_1.UpdateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/transferir'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, transfer_employee_dto_1.TransferEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "transfer", null);
__decorate([
    (0, common_1.Get)(':id/dashboard'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Post)(':id/jornada'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "linkSchedule", null);
__decorate([
    (0, common_1.Get)(':id/clt/resumo'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "getCltSummary", null);
__decorate([
    (0, common_1.Get)(':id/pontos'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "getPoints", null);
__decorate([
    (0, common_1.Post)(':id/documentos'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "uploadDocument", null);
__decorate([
    (0, common_1.Get)(':id/auditoria'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "getAuditLogs", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, common_1.Controller)('colaboradores'),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map