import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { startOfMonth, endOfMonth, format, startOfDay, endOfDay } from 'date-fns';
import { TimeRecordsService } from '../time-records/time-records.service';
import PdfPrinter from 'pdfmake/js/Printer';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Injectable()
export class ReportsService {
  constructor(
    private prisma: PrismaService,
    private timeRecordsService: TimeRecordsService
  ) {}

  async generateEspelhoPdf(employeeId: string, month: number, year: number): Promise<Buffer> {
      const data = await this.timeRecordsService.getMirror(employeeId, month, year);
      
      const fonts = {
          Helvetica: {
              normal: 'Helvetica',
              bold: 'Helvetica-Bold',
              italics: 'Helvetica-Oblique',
              bolditalics: 'Helvetica-BoldOblique'
          }
      };

      const printer = new PdfPrinter(fonts);

      const docDefinition: TDocumentDefinitions = {
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
                              format(new Date(day.date), 'dd/MM'),
                              day.punches.map(p => format(new Date(p.timestamp), 'HH:mm')).join('  '),
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
              { text: `Gerado em: ${format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`, fontSize: 8, color: 'gray', alignment: 'right' }
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
          const chunks: any[] = [];
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

  async getEspelhoPonto(employeeId: string, month: number, year: number) {
    return this.timeRecordsService.getMirror(employeeId, month, year);
  }

  async getDashboardData(month: number, year: number) {
    // 1. Fetch Employees with WorkLocation
    const employees = await this.prisma.employee.findMany({
      where: { status: 'ATIVO' },
      include: { workLocation: true }
    });

    const activeEmployees = employees.length;
    const totalEmployees = await this.prisma.employee.count();

    // 2. Aggregate Data
    let totalWorkedHours = 0;
    let inconsistencies = 0;
    let absences = 0;
    const geofenceViolations = 0;

    const hoursPerDayMap = new Map<string, number>();
    const extrasByUnitMap = new Map<string, number>();
    const absencesByUnitMap = new Map<string, number>();

    // Process each employee
    await Promise.all(employees.map(async (employee) => {
      const mirror = await this.timeRecordsService.getMirror(employee.id, month, year);
      
      const unitName = employee.workLocation?.name || 'Sem Unidade';

      mirror.days.forEach(day => {
        // Hours per day
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

        // Absences
        if (day.status === 'FALTA') {
            absences++;
            const currentAbsence = absencesByUnitMap.get(unitName) || 0;
            absencesByUnitMap.set(unitName, currentAbsence + 1);
        }

        // Inconsistencies
        if (day.status === 'INCONSISTENTE') {
            inconsistencies++;
        }

        // Geofence Violations (Check punches)
        // Assuming we check if punch was flagged or calculated here
        // For MVP, let's assume no stored flag yet, skipping detailed check to save time
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

  async getAuditLogs(filters: { startDate?: string, endDate?: string, userId?: string, action?: string }) {
    const start = filters.startDate ? new Date(filters.startDate) : startOfMonth(new Date());
    const end = filters.endDate ? new Date(filters.endDate) : endOfMonth(new Date());

    // 1. Fetch System Audit Logs
    const auditLogs = await this.prisma.auditLog.findMany({
      where: {
        createdAt: { gte: start, lte: end },
        userId: filters.userId,
        action: filters.action ? { contains: filters.action } : undefined
      },
      include: { user: true }
    });

    // 2. Fetch Download Logs
    const downloadLogs = await this.prisma.downloadLog.findMany({
      where: {
        createdAt: { gte: start, lte: end },
        userId: filters.userId
      }
    });

    // 3. Fetch Manual Time Records (Simulated as logs)
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

    // 4. Fetch User Details for DownloadLogs and ManualRecords
    const userIds = [
        ...new Set([
            ...downloadLogs.map(l => l.userId).filter(id => id && id !== 'ADMIN_USER'),
            ...manualRecords.map(r => r.editedById).filter(id => id)
        ])
    ];

    const users = await this.prisma.user.findMany({
        where: { id: { in: userIds as string[] } },
        select: { id: true, name: true }
    });

    const userMap = new Map(users.map(u => [u.id, u.name]));

    // Normalize
    const normalizedLogs = [
      ...auditLogs.map(log => ({
        id: log.id,
        timestamp: log.createdAt,
        user: log.user?.name || log.userId || 'Sistema',
        action: log.action,
        entity: log.entity,
        details: log.details || `ID: ${log.entityId}`,
        ip: log.ip,
        type: 'SYSTEM'
      })),
      ...downloadLogs.map(log => ({
        id: log.id,
        timestamp: log.createdAt,
        user: userMap.get(log.userId!) || (log.userId === 'ADMIN_USER' ? 'Administrador (Sessão Atual)' : 'Anônimo'),
        action: 'DOWNLOAD',
        entity: 'RELATORIO',
        details: `Arquivo: ${log.fileType} (Espelho)`,
        ip: log.ip,
        type: 'DOWNLOAD'
      })),
      ...manualRecords.map(record => ({
        id: record.id,
        timestamp: record.updatedAt, // Use modification time
        user: userMap.get(record.editedById!) || 'Sistema',
        action: record.isManual ? 'INCLUSAO_MANUAL' : 'EDICAO',
        entity: 'PONTO',
        details: `${record.type} - ${format(record.timestamp, 'dd/MM/yyyy HH:mm')} - ${record.justification || 'Sem justificativa'}`,
        ip: record.ip,
        type: 'TIME_RECORD'
      }))
    ];

    // Sort by date desc
    return normalizedLogs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  async getFinancialReport() {
    // Active Clients
    const activeClientsCount = await this.prisma.client.count({ where: { status: 'ATIVO' } });

    // Billable Employees (Total active employees across all active clients)
    // Assuming billing is per employee, or based on SaaS Contract quantity
    const activeEmployeesCount = await this.prisma.employee.count({ where: { status: 'ATIVO' } });

    // MRR (Monthly Recurring Revenue)
    const activeContracts = await this.prisma.saaSContract.findMany({
        where: { status: 'ATIVO' }
    });

    let mrr = 0;
    activeContracts.forEach(contract => {
        const value = Number(contract.price) * contract.quantity;
        if (contract.billingCycle === 'ANUAL') {
            mrr += value / 12;
        } else {
            mrr += value;
        }
    });

    // Inadimplência (Overdue Invoices)
    const overdueInvoices = await this.prisma.invoice.findMany({
        where: { status: 'VENCIDO' }
    });
    const overdueAmount = overdueInvoices.reduce((acc, inv) => acc + Number(inv.amount), 0);
    const overdueCount = overdueInvoices.length;

    // Detailed Client List for Table
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
        clients: clients.map(c => ({
            id: c.id,
            name: c.name,
            plan: c.subscription?.plan || 'Sem Plano',
            value: c.subscription ? Number(c.subscription.price) : 0,
            status: c.status,
            overdueInvoices: c._count.invoices
        }))
    };
  }

  async getSchedulesReport() {
    // ... (existing code)
    // 1. Fetch all schedules
    const schedules = await this.prisma.workSchedule.findMany({
        include: {
            _count: { select: { employees: true } }
        }
    });

    // 2. Fetch all employees with schedules
    const employees = await this.prisma.employee.findMany({
        where: { status: 'ATIVO' },
        include: { schedule: true }
    });

    // 3. Calculate Night Shift (Estimated from Schedule)
    // Night shift is typically 22:00 - 05:00
    // We check if schedule overlaps with this range
    const nightShiftSchedules = schedules.filter(s => {
        const start = parseInt(s.startTime.split(':')[0]);
        const end = parseInt(s.endTime.split(':')[0]);
        // Simple check: if start is late or end is early morning (crosses midnight)
        return start >= 22 || end <= 5 || (start > end); 
    });

    const employeesOnNightShift = employees.filter(e => 
        e.schedule && nightShiftSchedules.some(s => s.id === e.scheduleId)
    ).length;

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

  async getLocationPoints(filters: { date?: string; employeeId?: string }) {
    const where: any = {};
    
    if (filters.date) {
        const date = new Date(filters.date);
        where.timestamp = {
            gte: startOfDay(date),
            lte: endOfDay(date),
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

  async logDownload(data: { mirrorId?: string, userId?: string, fileType: string, ip?: string, userAgent?: string }) {
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
}
