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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_employee_dto_1 = require("./dto/create-employee.dto");
const ExcelJS = require("exceljs");
const stream_1 = require("stream");
let EmployeesService = class EmployeesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEmployeeDto) {
        var _a, _b, _c;
        const defaultPassword = 'changeMe123!';
        const user = await this.prisma.user.create({
            data: {
                email: createEmployeeDto.email,
                name: createEmployeeDto.name,
                password: defaultPassword,
                role: 'EMPLOYEE',
            },
        });
        return this.prisma.employee.create({
            data: {
                userId: user.id,
                name: createEmployeeDto.name,
                cpf: createEmployeeDto.cpf,
                matricula: createEmployeeDto.matricula,
                position: createEmployeeDto.position || 'Colaborador',
                contractType: createEmployeeDto.contractType || 'CLT',
                admissionDate: createEmployeeDto.admissionDate ? new Date(createEmployeeDto.admissionDate) : new Date(),
                status: 'ATIVO',
                contractId: createEmployeeDto.contractId,
                scheduleId: createEmployeeDto.scheduleId,
                workLocationId: createEmployeeDto.workLocationId,
                rg: createEmployeeDto.rg,
                birthDate: createEmployeeDto.birthDate ? new Date(createEmployeeDto.birthDate) : null,
                phone: createEmployeeDto.phone,
                email: createEmployeeDto.personalEmail,
                address: createEmployeeDto.address,
                department: createEmployeeDto.department,
                function: createEmployeeDto.function,
                requirePhoto: (_a = createEmployeeDto.requirePhoto) !== null && _a !== void 0 ? _a : true,
                requireGPS: (_b = createEmployeeDto.requireGPS) !== null && _b !== void 0 ? _b : true,
                allowManualEntry: (_c = createEmployeeDto.allowManualEntry) !== null && _c !== void 0 ? _c : false,
            },
            include: {
                user: true,
                contract: true,
            },
        });
    }
    async findAll(params) {
        const where = {};
        if (params.contractId)
            where.contractId = params.contractId;
        if (params.clientId)
            where.contract = { clientId: params.clientId };
        if (params.status)
            where.status = params.status;
        if (params.workLocationId)
            where.workLocationId = params.workLocationId;
        if (params.scheduleId)
            where.scheduleId = params.scheduleId;
        if (params.position) {
            where.position = { contains: params.position };
        }
        if (params.missingPoint) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            where.timeRecords = {
                none: {
                    timestamp: {
                        gte: today,
                        lt: tomorrow,
                    },
                },
            };
        }
        if (params.search) {
            where.OR = [
                { name: { contains: params.search } },
                { cpf: { contains: params.search } },
                { matricula: { contains: params.search } },
            ];
        }
        return this.prisma.employee.findMany({
            where,
            include: {
                user: true,
                contract: {
                    include: { client: true }
                },
                schedule: true,
                workLocation: true,
            },
            orderBy: { name: 'asc' },
        });
    }
    async findOne(id) {
        const employee = await this.prisma.employee.findUnique({
            where: { id },
            include: {
                user: true,
                contract: { include: { client: true } },
                schedule: true,
                documents: true,
            },
        });
        if (!employee)
            throw new common_1.NotFoundException(`Employee with ID ${id} not found`);
        return employee;
    }
    async getSchedules() {
        return this.prisma.workSchedule.findMany({
            orderBy: { name: 'asc' },
        });
    }
    async update(id, updateEmployeeDto) {
        const { personalEmail, admissionDate, birthDate } = updateEmployeeDto, rest = __rest(updateEmployeeDto, ["personalEmail", "admissionDate", "birthDate"]);
        const data = Object.assign({}, rest);
        if (personalEmail)
            data.email = personalEmail;
        if (admissionDate)
            data.admissionDate = new Date(admissionDate);
        if (birthDate)
            data.birthDate = new Date(birthDate);
        return this.prisma.employee.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.employee.update({
            where: { id },
            data: { status: 'DESLIGADO' },
        });
    }
    async transfer(id, transferDto) {
        return this.prisma.employee.update({
            where: { id },
            data: { contractId: transferDto.novo_contrato_id },
        });
    }
    async getDashboard(id) {
        const employee = await this.findOne(id);
        return {
            employee,
            stats: {
                workedHours: 160,
                absences: 0,
                overtime: 10,
            },
            recentRecords: [],
        };
    }
    async updateStatus(id, status) {
        await this.logAudit(id, 'ATUALIZACAO_STATUS', `Status alterado para ${status}`);
        return this.prisma.employee.update({
            where: { id },
            data: { status },
        });
    }
    async linkSchedule(id, data) {
        await this.logAudit(id, 'VINCULO_JORNADA', `Jornada vinculada: ${data.jornada_id}`);
        return this.prisma.employee.update({
            where: { id },
            data: {
                scheduleId: data.jornada_id,
            },
        });
    }
    async getCltSummary(_id) {
        return {
            horas_trabalhadas: 176,
            horas_extras: 12,
            faltas: 1,
            atrasos: 3,
            adicional_noturno: 4,
            banco_horas_saldo: 24,
        };
    }
    async getPoints(id) {
        return this.prisma.timeRecord.findMany({
            where: { employeeId: id },
            orderBy: { timestamp: 'desc' },
            take: 20,
        });
    }
    async importEmployees(file) {
        const stream = new stream_1.Readable();
        stream.push(file.buffer);
        stream.push(null);
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.read(stream);
        const worksheet = workbook.getWorksheet(1);
        if (!worksheet)
            throw new Error('No worksheet found');
        let successCount = 0;
        let failureCount = 0;
        const errors = [];
        for (let i = 2; i <= worksheet.rowCount; i++) {
            const row = worksheet.getRow(i);
            if (!row.hasValues)
                continue;
            try {
                const name = row.getCell(1).text;
                const email = row.getCell(2).text;
                const cpf = row.getCell(3).text;
                const matricula = row.getCell(4).text;
                const position = row.getCell(5).text;
                const contractId = row.getCell(6).text;
                if (!name || !email || !cpf) {
                    failureCount++;
                    errors.push({ row: i, error: 'Missing required fields' });
                    continue;
                }
                const dto = new create_employee_dto_1.CreateEmployeeDto();
                dto.name = name;
                dto.email = email;
                dto.cpf = cpf;
                dto.matricula = matricula;
                dto.position = position;
                dto.contractId = contractId;
                await this.create(dto);
                successCount++;
            }
            catch (e) {
                failureCount++;
                errors.push({ row: i, error: e.message });
            }
        }
        await this.logAudit('SYSTEM', 'IMPORTACAO_LOTE', `Importação: ${successCount} sucessos, ${failureCount} falhas`);
        return {
            success: true,
            imported: successCount,
            failed: failureCount,
            errors
        };
    }
    async uploadDocument(id, data) {
        const doc = await this.prisma.employeeDocument.create({
            data: {
                employeeId: id,
                name: data.name,
                type: data.type || 'OUTROS',
                url: data.url || 'https://example.com/doc.pdf',
            },
        });
        await this.logAudit(id, 'UPLOAD_DOCUMENTO', `Documento ${doc.name} enviado`);
        return doc;
    }
    async getAuditLogs(id) {
        return this.prisma.auditLog.findMany({
            where: { entity: 'colaborador', entityId: id },
            orderBy: { createdAt: 'desc' },
            include: { user: { select: { name: true } } }
        });
    }
    async logAudit(entityId, action, details) {
        await this.prisma.auditLog.create({
            data: {
                entity: 'colaborador',
                entityId,
                action,
                details,
            }
        });
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeesService);
//# sourceMappingURL=employees.service.js.map