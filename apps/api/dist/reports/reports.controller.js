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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const swagger_1 = require("@nestjs/swagger");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async getDashboardData(month, year) {
        const date = new Date();
        const currentMonth = month ? parseInt(month) : date.getMonth() + 1;
        const currentYear = year ? parseInt(year) : date.getFullYear();
        return this.reportsService.getDashboardData(currentMonth, currentYear);
    }
    async getEmployees() {
        return this.reportsService.getEmployees();
    }
    async getEspelhoPonto(employeeId, month, year) {
        const date = new Date();
        const currentMonth = month ? parseInt(month) : date.getMonth() + 1;
        const currentYear = year ? parseInt(year) : date.getFullYear();
        if (!employeeId) {
            throw new Error('Employee ID is required');
        }
        return this.reportsService.getEspelhoPonto(employeeId, currentMonth, currentYear);
    }
    async getEspelhoPdf(employeeId, month, year, res) {
        const buffer = await this.reportsService.generateEspelhoPdf(employeeId, parseInt(month), parseInt(year));
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=espelho-${employeeId}.pdf`,
            'Content-Length': buffer.length,
        });
        res.end(buffer);
    }
    async getAuditLogs(startDate, endDate, userId, action) {
        return this.reportsService.getAuditLogs({ startDate, endDate, userId, action });
    }
    async getFinancialReport() {
        return this.reportsService.getFinancialReport();
    }
    async getSchedulesReport() {
        return this.reportsService.getSchedulesReport();
    }
    getLocations(query) {
        return this.reportsService.getLocationPoints(query);
    }
    async logDownload(data) {
        return this.reportsService.logDownload(data);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Dashboard KPIs and Chart Data' }),
    __param(0, (0, common_1.Query)('month')),
    __param(1, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getDashboardData", null);
__decorate([
    (0, common_1.Get)('employees'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Employees list for filters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getEmployees", null);
__decorate([
    (0, common_1.Get)('espelho'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Espelho de Ponto detailed report' }),
    __param(0, (0, common_1.Query)('employeeId')),
    __param(1, (0, common_1.Query)('month')),
    __param(2, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getEspelhoPonto", null);
__decorate([
    (0, common_1.Get)('espelho/pdf'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Espelho de Ponto PDF' }),
    __param(0, (0, common_1.Query)('employeeId')),
    __param(1, (0, common_1.Query)('month')),
    __param(2, (0, common_1.Query)('year')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getEspelhoPdf", null);
__decorate([
    (0, common_1.Get)('audit-logs'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Audit Logs' }),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __param(2, (0, common_1.Query)('userId')),
    __param(3, (0, common_1.Query)('action')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getAuditLogs", null);
__decorate([
    (0, common_1.Get)('financial'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Financial SaaS Report' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getFinancialReport", null);
__decorate([
    (0, common_1.Get)('schedules'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Schedules Report' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getSchedulesReport", null);
__decorate([
    (0, common_1.Get)('locations'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getLocations", null);
__decorate([
    (0, common_1.Post)('generate'),
    (0, common_1.Post)('log-download'),
    (0, swagger_1.ApiOperation)({ summary: 'Log Report Download' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "logDownload", null);
exports.ReportsController = ReportsController = __decorate([
    (0, swagger_1.ApiTags)('Reports'),
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
//# sourceMappingURL=reports.controller.js.map