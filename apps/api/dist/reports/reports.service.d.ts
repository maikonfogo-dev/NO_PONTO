import { PrismaService } from '../prisma/prisma.service';
import { TimeRecordsService } from '../time-records/time-records.service';
export declare class ReportsService {
    private prisma;
    private timeRecordsService;
    constructor(prisma: PrismaService, timeRecordsService: TimeRecordsService);
    generateEspelhoPdf(employeeId: string, month: number, year: number): Promise<Buffer>;
    getEmployees(): Promise<{
        id: string;
        name: string;
        cpf: string;
    }[]>;
    getEspelhoPonto(employeeId: string, month: number, year: number): Promise<{
        employee: {
            schedule: {
                id: string;
                type: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                startTime: string;
                endTime: string;
                lunchStart: string | null;
                lunchEnd: string | null;
                tolerance: number;
                allowOvertime: boolean;
            };
        } & {
            function: string | null;
            id: string;
            address: string | null;
            photoUrl: string | null;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            cpf: string;
            matricula: string | null;
            userId: string | null;
            position: string;
            contractType: string;
            admissionDate: Date;
            contractId: string | null;
            workLocationId: string | null;
            scheduleId: string | null;
            supervisorId: string | null;
            rg: string | null;
            birthDate: Date | null;
            phone: string | null;
            email: string | null;
            department: string | null;
            requirePhoto: boolean;
            requireGPS: boolean;
            allowManualEntry: boolean;
        };
        period: {
            month: number;
            year: number;
        };
        days: {
            date: string;
            punches: {
                id: string;
                timestamp: Date;
                type: string;
                latitude: number | null;
                longitude: number | null;
                accuracy: number | null;
                address: string | null;
                photoUrl: string | null;
                deviceId: string | null;
                ip: string | null;
                integrityHash: string | null;
                isGeofenceViolation: boolean;
                isManual: boolean;
                justification: string | null;
                originalTimestamp: Date | null;
                editedById: string | null;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                employeeId: string;
            }[];
            workedHours: string;
            expectedHours: string;
            balance: string;
            status: string;
        }[];
    }>;
    getDashboardData(month: number, year: number): Promise<{
        kpis: {
            activeEmployees: number;
            totalEmployees: number;
            totalWorkedHours: number;
            inconsistencies: number;
            geofenceViolations: number;
            absences: number;
        };
        charts: {
            hoursPerDay: {
                date: string;
                hours: number;
            }[];
            extrasByUnit: {
                name: string;
                value: number;
            }[];
            absencesByUnit: {
                name: string;
                value: number;
            }[];
        };
    }>;
    getAuditLogs(filters: {
        startDate?: string;
        endDate?: string;
        userId?: string;
        action?: string;
    }): Promise<{
        id: string;
        timestamp: Date;
        user: string;
        action: string;
        entity: string;
        details: string;
        ip: string;
        type: string;
    }[]>;
    getFinancialReport(): Promise<{
        kpis: {
            activeClients: number;
            billableEmployees: number;
            mrr: number;
            overdueAmount: number;
            overdueCount: number;
        };
        clients: {
            id: string;
            name: string;
            plan: string;
            value: number;
            status: string;
            overdueInvoices: number;
        }[];
    }>;
    getSchedulesReport(): Promise<{
        kpis: {
            totalSchedules: number;
            employeesWithSchedule: number;
            employeesWithoutSchedule: number;
            employeesOnNightShift: number;
        };
        schedules: {
            id: string;
            name: string;
            time: string;
            employeesCount: number;
            isNightShift: boolean;
        }[];
        employeesWithoutScheduleList: {
            id: string;
            name: string;
            position: string;
        }[];
    }>;
    getLocationPoints(filters: {
        date?: string;
        employeeId?: string;
    }): Promise<{
        id: string;
        latitude: number;
        longitude: number;
        timestamp: string;
        type: string;
        employee: {
            name: string;
            cpf: string;
            position: string;
        };
    }[]>;
    logDownload(data: {
        mirrorId?: string;
        userId?: string;
        fileType: string;
        ip?: string;
        userAgent?: string;
    }): Promise<{
        id: string;
        ip: string | null;
        createdAt: Date;
        userId: string | null;
        userAgent: string | null;
        mirrorId: string | null;
        fileType: string;
    }>;
}
