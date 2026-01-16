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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const date_fns_1 = require("date-fns");
const time_records_service_1 = require("../time-records/time-records.service");
const Printer_1 = require("pdfmake/js/Printer");
let ReportsService = class ReportsService {
    constructor(prisma, timeRecordsService) {
        this.prisma = prisma;
        this.timeRecordsService = timeRecordsService;
    }
    async generateEspelhoPdf(employeeId, month, year) {
        const data = await this.timeRecordsService.getMirror(employeeId, month, year);
        const fonts = {
            Helvetica: {
                normal: 'Helvetica',
                bold: 'Helvetica-Bold',
                italics: 'Helvetica-Oblique',
                bolditalics: 'Helvetica-BoldOblique'
            }
        };
        const printer = new Printer_1.default(fonts);
        const docDefinition = {
            defaultStyle: { font: 'Helvetica' },
            content: [
                { text: 'NO PONTO - ESPELHO DE PONTO', style: 'header' },
                { text: `Período: ${month.toString().padStart(2, '0')}/${year}`, style: 'subheader' },
                { text: '\n' },
                {
                    columns: [
                        { text: `Colaborador: ${data.employee.name}`, bold: true },
                        { text: `CPF: ${data.employee.cpf}` }
                    ]
                },
                {
                    columns: [
                        { text: `Cargo: ${data.employee.position}` },
                        { text: `Matrícula: ${data.employee.matricula || '-'}` }
                    ]
                },
                { text: '\n' },
                {
                    table: {
                        headerRows: 1,
                        widths: ['auto', 'auto', '*', 'auto', 'auto', 'auto'],
                        body: [
                            [
                                { text: 'Data', bold: true },
                                { text: 'Registros', bold: true },
                                { text: 'Status', bold: true },
                                { text: 'Trab.', bold: true },
                                { text: 'Prev.', bold: true },
                                { text: 'Saldo', bold: true }
                            ],
                            ...data.days.map(day => [
                                (0, date_fns_1.format)(new Date(day.date), 'dd/MM'),
                                day.punches.map(p => (0, date_fns_1.format)(new Date(p.timestamp), 'HH:mm')).join('  '),
                                day.status,
                                day.workedHours,
                                day.expectedHours,
                                day.balance
                            ])
                        ]
                    }
                },
                { text: '\n' },
                { text: 'Resumo', style: 'subheader' },
                {
                    table: {
                        widths: ['*', '*'],
                        body: [
                            ['Horas Trabalhadas', data.days.reduce((acc, curr) => acc + parseFloat(curr.workedHours), 0).toFixed(2)],
                            ['Horas Previstas', data.days.reduce((acc, curr) => acc + parseFloat(curr.expectedHours), 0).toFixed(2)],
                            ['Saldo Banco', data.days.reduce((acc, curr) => acc + parseFloat(curr.balance), 0).toFixed(2)],
                            ['Faltas', data.days.filter(d => d.status === 'FALTA').length.toString()]
                        ]
                    }
                },
                { text: '\n\n\n\n' },
                {
                    columns: [
                        { text: '___________________________\nAssinatura Colaborador', alignment: 'center' },
                        { text: '___________________________\nAssinatura Gestor', alignment: 'center' }
                    ]
                },
                { text: '\n' },
                { text: `Gerado em: ${(0, date_fns_1.format)(new Date(), 'dd/MM/yyyy HH:mm:ss')}`, fontSize: 8, color: 'gray', alignment: 'right' }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 10, 0, 5]
                }
            }
        };
        const pdfDoc = await printer.createPdfKitDocument(docDefinition);
        return new Promise((resolve, reject) => {
            const chunks = [];
            pdfDoc.on('data', (chunk) => chunks.push(chunk));
            pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
            pdfDoc.on('error', (err) => reject(err));
            pdfDoc.end();
        });
    }
    async getEmployees() {
        return this.prisma.employee.findMany({
            select: {
                id: true,
                name: true,
                cpf: true
            },
            orderBy: { name: 'asc' }
        });
    }
    async getEspelhoPonto(employeeId, month, year) {
        return this.timeRecordsService.getMirror(employeeId, month, year);
    }
    async getDashboardData(month, year) {
        const employees = await this.prisma.employee.findMany({
            where: { status: 'ATIVO' },
            include: { workLocation: true }
        });
        const activeEmployees = employees.length;
        const totalEmployees = await this.prisma.employee.count();
        let totalWorkedHours = 0;
        let inconsistencies = 0;
        let absences = 0;
        const geofenceViolations = 0;
        const hoursPerDayMap = new Map();
        const extrasByUnitMap = new Map();
        const absencesByUnitMap = new Map();
        await Promise.all(employees.map(async (employee) => {
            var _a;
            const mirror = await this.timeRecordsService.getMirror(employee.id, month, year);
            const unitName = ((_a = employee.workLocation) === null || _a === void 0 ? void 0 : _a.name) || 'Sem Unidade';
            mirror.days.forEach(day => {
                const worked = parseFloat(day.workedHours);
                const balance = parseFloat(day.balance);
                if (worked > 0) {
                    const dateKey = day.date;
                    const current = hoursPerDayMap.get(dateKey) || 0;
                    hoursPerDayMap.set(dateKey, current + worked);
                }
                totalWorkedHours += worked;
                if (balance > 0) {
                    const currentExtra = extrasByUnitMap.get(unitName) || 0;
                    extrasByUnitMap.set(unitName, currentExtra + balance);
                }
                if (day.status === 'FALTA') {
                    absences++;
                    const currentAbsence = absencesByUnitMap.get(unitName) || 0;
                    absencesByUnitMap.set(unitName, currentAbsence + 1);
                }
                if (day.status === 'INCONSISTENTE') {
                    inconsistencies++;
                }
            });
        }));
        const hoursPerDay = Array.from(hoursPerDayMap.entries()).map(([date, hours]) => ({
            date,
            hours: parseFloat(hours.toFixed(2))
        })).sort((a, b) => a.date.localeCompare(b.date));
        const extrasByUnit = Array.from(extrasByUnitMap.entries()).map(([name, value]) => ({
            name,
            value: parseFloat(value.toFixed(2))
        }));
        const absencesByUnit = Array.from(absencesByUnitMap.entries()).map(([name, value]) => ({
            name,
            value
        }));
        return {
            kpis: {
                activeEmployees,
                totalEmployees,
                totalWorkedHours: parseFloat(totalWorkedHours.toFixed(2)),
                inconsistencies,
                geofenceViolations,
                absences
            },
            charts: {
                hoursPerDay,
                extrasByUnit,
                absencesByUnit
            }
        };
    }
    async getAuditLogs(filters) {
        const start = filters.startDate ? new Date(filters.startDate) : (0, date_fns_1.startOfMonth)(new Date());
        const end = filters.endDate ? new Date(filters.endDate) : (0, date_fns_1.endOfMonth)(new Date());
        const auditLogs = await this.prisma.auditLog.findMany({
            where: {
                createdAt: { gte: start, lte: end },
                userId: filters.userId,
                action: filters.action ? { contains: filters.action } : undefined
            },
            include: { user: true }
        });
        const downloadLogs = await this.prisma.downloadLog.findMany({
            where: {
                createdAt: { gte: start, lte: end },
                userId: filters.userId
            }
        });
        const manualRecords = await this.prisma.timeRecord.findMany({
            where: {
                timestamp: { gte: start, lte: end },
                OR: [
                    { isManual: true },
                    { editedById: { not: null } }
                ]
            },
            include: { employee: true }
        });
        const userIds = [
            ...new Set([
                ...downloadLogs.map(l => l.userId).filter(id => id && id !== 'ADMIN_USER'),
                ...manualRecords.map(r => r.editedById).filter(id => id)
            ])
        ];
        const users = await this.prisma.user.findMany({
            where: { id: { in: userIds } },
            select: { id: true, name: true }
        });
        const userMap = new Map(users.map(u => [u.id, u.name]));
        const normalizedLogs = [
            ...auditLogs.map(log => {
                var _a;
                return ({
                    id: log.id,
                    timestamp: log.createdAt,
                    user: ((_a = log.user) === null || _a === void 0 ? void 0 : _a.name) || log.userId || 'Sistema',
                    action: log.action,
                    entity: log.entity,
                    details: log.details || `ID: ${log.entityId}`,
                    ip: log.ip,
                    type: 'SYSTEM'
                });
            }),
            ...downloadLogs.map(log => ({
                id: log.id,
                timestamp: log.createdAt,
                user: userMap.get(log.userId) || (log.userId === 'ADMIN_USER' ? 'Administrador (Sessão Atual)' : 'Anônimo'),
                action: 'DOWNLOAD',
                entity: 'RELATORIO',
                details: `Arquivo: ${log.fileType} (Espelho)`,
                ip: log.ip,
                type: 'DOWNLOAD'
            })),
            ...manualRecords.map(record => ({
                id: record.id,
                timestamp: record.updatedAt,
                user: userMap.get(record.editedById) || 'Sistema',
                action: record.isManual ? 'INCLUSAO_MANUAL' : 'EDICAO',
                entity: 'PONTO',
                details: `${record.type} - ${(0, date_fns_1.format)(record.timestamp, 'dd/MM/yyyy HH:mm')} - ${record.justification || 'Sem justificativa'}`,
                ip: record.ip,
                type: 'TIME_RECORD'
            }))
        ];
        return normalizedLogs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }
    async getFinancialReport() {
        const activeClientsCount = await this.prisma.client.count({ where: { status: 'ATIVO' } });
        const activeEmployeesCount = await this.prisma.employee.count({ where: { status: 'ATIVO' } });
        const activeContracts = await this.prisma.saaSContract.findMany({
            where: { status: 'ATIVO' }
        });
        let mrr = 0;
        activeContracts.forEach(contract => {
            const value = Number(contract.price) * contract.quantity;
            if (contract.billingCycle === 'ANUAL') {
                mrr += value / 12;
            }
            else {
                mrr += value;
            }
        });
        const overdueInvoices = await this.prisma.invoice.findMany({
            where: { status: 'VENCIDO' }
        });
        const overdueAmount = overdueInvoices.reduce((acc, inv) => acc + Number(inv.amount), 0);
        const overdueCount = overdueInvoices.length;
        const clients = await this.prisma.client.findMany({
            include: {
                subscription: true,
                _count: { select: { users: true, invoices: { where: { status: 'VENCIDO' } } } }
            }
        });
        return {
            kpis: {
                activeClients: activeClientsCount,
                billableEmployees: activeEmployeesCount,
                mrr: parseFloat(mrr.toFixed(2)),
                overdueAmount: parseFloat(overdueAmount.toFixed(2)),
                overdueCount: overdueCount
            },
            clients: clients.map(c => {
                var _a;
                return ({
                    id: c.id,
                    name: c.name,
                    plan: ((_a = c.subscription) === null || _a === void 0 ? void 0 : _a.plan) || 'Sem Plano',
                    value: c.subscription ? Number(c.subscription.price) : 0,
                    status: c.status,
                    overdueInvoices: c._count.invoices
                });
            })
        };
    }
    async getSchedulesReport() {
        const schedules = await this.prisma.workSchedule.findMany({
            include: {
                _count: { select: { employees: true } }
            }
        });
        const employees = await this.prisma.employee.findMany({
            where: { status: 'ATIVO' },
            include: { schedule: true }
        });
        const nightShiftSchedules = schedules.filter(s => {
            const start = parseInt(s.startTime.split(':')[0]);
            const end = parseInt(s.endTime.split(':')[0]);
            return start >= 22 || end <= 5 || (start > end);
        });
        const employeesOnNightShift = employees.filter(e => e.schedule && nightShiftSchedules.some(s => s.id === e.scheduleId)).length;
        return {
            kpis: {
                totalSchedules: schedules.length,
                employeesWithSchedule: employees.filter(e => e.scheduleId).length,
                employeesWithoutSchedule: employees.filter(e => !e.scheduleId).length,
                employeesOnNightShift: employeesOnNightShift
            },
            schedules: schedules.map(s => ({
                id: s.id,
                name: s.name,
                time: `${s.startTime} - ${s.endTime}`,
                employeesCount: s._count.employees,
                isNightShift: nightShiftSchedules.some(ns => ns.id === s.id)
            })),
            employeesWithoutScheduleList: employees.filter(e => !e.scheduleId).map(e => ({
                id: e.id,
                name: e.name,
                position: e.position
            }))
        };
    }
    async getLocationPoints(filters) {
        const where = {};
        if (filters.date) {
            const date = new Date(filters.date);
            where.timestamp = {
                gte: (0, date_fns_1.startOfDay)(date),
                lte: (0, date_fns_1.endOfDay)(date),
            };
        }
        if (filters.employeeId) {
            where.employeeId = filters.employeeId;
        }
        where.latitude = { not: null };
        where.longitude = { not: null };
        const records = await this.prisma.timeRecord.findMany({
            where,
            include: {
                employee: {
                    select: {
                        name: true,
                        cpf: true,
                        position: true
                    }
                }
            },
            orderBy: {
                timestamp: 'asc'
            }
        });
        return records.map(record => ({
            id: record.id,
            latitude: record.latitude,
            longitude: record.longitude,
            timestamp: record.timestamp.toISOString(),
            type: record.type,
            employee: {
                name: record.employee.name,
                cpf: record.employee.cpf,
                position: record.employee.position
            }
        }));
    }
    async logDownload(data) {
        return this.prisma.downloadLog.create({
            data: {
                mirrorId: data.mirrorId || null,
                userId: data.userId,
                fileType: data.fileType,
                ip: data.ip,
                userAgent: data.userAgent
            }
        });
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        time_records_service_1.TimeRecordsService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map