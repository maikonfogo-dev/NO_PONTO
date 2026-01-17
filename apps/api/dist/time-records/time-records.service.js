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
var TimeRecordsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRecordsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const crypto = require("crypto");
const date_fns_1 = require("date-fns");
const fs = require("fs");
const path = require("path");
let TimeRecordsService = TimeRecordsService_1 = class TimeRecordsService {
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
        this.logger = new common_1.Logger(TimeRecordsService_1.name);
        this.bucketName = this.configService.get('AWS_BUCKET_NAME') || 'noponto-docs';
        this.s3Client = new client_s3_1.S3Client({
            region: this.configService.get('AWS_REGION') || 'us-east-1',
            credentials: {
                accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID') || 'minioadmin',
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY') || 'minioadmin',
            },
            endpoint: this.configService.get('AWS_ENDPOINT'),
            forcePathStyle: true,
        });
    }
    async uploadPhoto(file) {
        const fileKey = `punches/${Date.now()}_${file.originalname}`;
        try {
            await this.s3Client.send(new client_s3_1.PutObjectCommand({
                Bucket: this.bucketName,
                Key: fileKey,
                Body: file.buffer,
                ContentType: file.mimetype,
            }));
            const endpoint = this.configService.get('AWS_ENDPOINT');
            if (endpoint && endpoint.includes('localhost')) {
                return `${endpoint}/${this.bucketName}/${fileKey}`;
            }
            else {
                return `https://${this.bucketName}.s3.${this.configService.get('AWS_REGION')}.amazonaws.com/${fileKey}`;
            }
        }
        catch (error) {
            this.logger.warn('S3 Upload Error, falling back to local storage:', error);
            const uploadDir = path.join(process.cwd(), 'uploads', 'punches');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const localPath = path.join(uploadDir, `${Date.now()}_${file.originalname}`);
            fs.writeFileSync(localPath, file.buffer);
            return `http://localhost:4000/uploads/punches/${path.basename(localPath)}`;
        }
    }
    async create(data) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: data.employeeId },
            include: {
                workLocation: true,
                contract: {
                    include: {
                        client: true
                    }
                }
            }
        });
        if (!employee)
            throw new common_1.NotFoundException('Colaborador não encontrado');
        if (employee.contract && employee.contract.client && employee.contract.client.status !== 'ATIVO') {
            throw new Error('Empresa bloqueada ou inadimplente. Registro de ponto não permitido.');
        }
        const status = 'PENDENTE';
        let isGeofenceViolation = false;
        if (employee.workLocation && employee.workLocation.latitude && employee.workLocation.longitude) {
            if (employee.requireGPS && (!data.latitude || !data.longitude)) {
                throw new Error('Localização obrigatória para este colaborador');
            }
            const distance = this.calculateDistance(data.latitude, data.longitude, employee.workLocation.latitude, employee.workLocation.longitude);
            const radius = employee.workLocation.radius || 50;
            if (distance > radius) {
                isGeofenceViolation = true;
                this.logger.warn(`[GEOFENCE ALERT] Employee ${employee.name} is ${distance}m away (Limit: ${radius}m)`);
            }
        }
        if (employee.requirePhoto && !data.photoUrl) {
            throw new Error('Foto obrigatória para registro de ponto');
        }
        const timestamp = new Date();
        const hashPayload = `${data.employeeId}-${data.type}-${timestamp.toISOString()}-${data.latitude}-${data.longitude}-NO_PONTO_SECRET`;
        const integrityHash = crypto.createHash('sha256').update(hashPayload).digest('hex');
        return this.prisma.timeRecord.create({
            data: {
                employeeId: data.employeeId,
                type: data.type,
                timestamp: timestamp,
                latitude: data.latitude,
                longitude: data.longitude,
                accuracy: data.accuracy,
                address: data.address,
                photoUrl: data.photoUrl,
                deviceId: data.deviceId,
                ip: data.ip,
                integrityHash: integrityHash,
                status: status,
                isGeofenceViolation: isGeofenceViolation
            }
        });
    }
    timeToMinutes(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }
    calculateExpectedMinutes(schedule) {
        if (!schedule)
            return 480;
        try {
            const start = this.timeToMinutes(schedule.startTime);
            const end = this.timeToMinutes(schedule.endTime);
            let total = end - start;
            if (schedule.lunchStart && schedule.lunchEnd) {
                const lunchStart = this.timeToMinutes(schedule.lunchStart);
                const lunchEnd = this.timeToMinutes(schedule.lunchEnd);
                const lunchDuration = lunchEnd - lunchStart;
                total -= lunchDuration;
            }
            return total > 0 ? total : 480;
        }
        catch (e) {
            this.logger.error('Error calculating schedule minutes', e);
            return 480;
        }
    }
    async getDailySummary(employeeId) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId },
            include: { schedule: true, workLocation: true }
        });
        const today = new Date();
        const start = new Date(today.setHours(0, 0, 0, 0));
        const end = new Date(today.setHours(23, 59, 59, 999));
        const punches = await this.prisma.timeRecord.findMany({
            where: {
                employeeId,
                timestamp: {
                    gte: start,
                    lte: end
                }
            },
            orderBy: { timestamp: 'asc' }
        });
        const lastPunch = punches[punches.length - 1];
        let isWorking = false;
        if (lastPunch) {
            if (['ENTRADA', 'VOLTA_ALMOCO'].includes(lastPunch.type)) {
                isWorking = true;
            }
        }
        let workedMinutes = 0;
        for (let i = 0; i < punches.length; i += 2) {
            const entry = punches[i];
            const exit = punches[i + 1];
            if (entry && exit) {
                const diff = (exit.timestamp.getTime() - entry.timestamp.getTime()) / 1000 / 60;
                workedMinutes += diff;
            }
        }
        const expectedMinutes = this.calculateExpectedMinutes(employee === null || employee === void 0 ? void 0 : employee.schedule);
        const balance = workedMinutes - expectedMinutes;
        const punchesWithDistance = punches.map((punch) => {
            let distanceFromLocationMeters = null;
            if ((employee === null || employee === void 0 ? void 0 : employee.workLocation) &&
                typeof employee.workLocation.latitude === 'number' &&
                typeof employee.workLocation.longitude === 'number' &&
                typeof punch.latitude === 'number' &&
                typeof punch.longitude === 'number') {
                distanceFromLocationMeters = Math.round(this.calculateDistance(punch.latitude, punch.longitude, employee.workLocation.latitude, employee.workLocation.longitude));
            }
            return Object.assign(Object.assign({}, punch), { distanceFromLocationMeters });
        });
        return {
            date: (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd'),
            punches: punchesWithDistance,
            lastPunch,
            isWorking,
            workedHours: (workedMinutes / 60).toFixed(2),
            balance: (balance / 60).toFixed(2),
            workLocation: (employee === null || employee === void 0 ? void 0 : employee.workLocation)
                ? {
                    latitude: employee.workLocation.latitude,
                    longitude: employee.workLocation.longitude,
                    radius: employee.workLocation.radius || 50,
                }
                : null,
        };
    }
    async getMirror(employeeId, month, year) {
        const start = (0, date_fns_1.startOfMonth)(new Date(year, month - 1));
        const end = (0, date_fns_1.endOfMonth)(new Date(year, month - 1));
        const punches = await this.prisma.timeRecord.findMany({
            where: {
                employeeId,
                timestamp: {
                    gte: start,
                    lte: end
                }
            },
            orderBy: { timestamp: 'asc' }
        });
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId },
            include: { schedule: true }
        });
        const days = (0, date_fns_1.eachDayOfInterval)({ start, end });
        const report = days.map(day => {
            const dayPunches = punches.filter(p => (0, date_fns_1.isSameDay)(p.timestamp, day));
            let workedMinutes = 0;
            for (let i = 0; i < dayPunches.length; i += 2) {
                const entry = dayPunches[i];
                const exit = dayPunches[i + 1];
                if (entry && exit) {
                    const diff = (exit.timestamp.getTime() - entry.timestamp.getTime()) / 1000 / 60;
                    workedMinutes += diff;
                }
            }
            let expectedMinutes = this.calculateExpectedMinutes(employee === null || employee === void 0 ? void 0 : employee.schedule);
            const isWeekend = day.getDay() === 0 || day.getDay() === 6;
            const isFuture = day > new Date();
            if (isWeekend) {
                expectedMinutes = 0;
            }
            let balance = 0;
            if (!isFuture) {
                balance = workedMinutes - expectedMinutes;
            }
            let status = 'OK';
            if (!isWeekend && !isFuture) {
                if (dayPunches.length % 2 !== 0) {
                    status = 'INCONSISTENTE';
                }
                else if (dayPunches.length === 0 && expectedMinutes > 0) {
                    status = 'FALTA';
                }
                else if (balance < 0) {
                }
            }
            return {
                date: (0, date_fns_1.format)(day, 'yyyy-MM-dd'),
                punches: dayPunches,
                workedHours: (workedMinutes / 60).toFixed(2),
                expectedHours: (expectedMinutes / 60).toFixed(2),
                balance: (balance / 60).toFixed(2),
                status
            };
        });
        return {
            employee,
            period: { month, year },
            days: report
        };
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371e3;
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    async findAllByEmployee(employeeId, limit = 20) {
        return this.prisma.timeRecord.findMany({
            where: { employeeId },
            orderBy: { timestamp: 'desc' },
            take: limit
        });
    }
};
exports.TimeRecordsService = TimeRecordsService;
exports.TimeRecordsService = TimeRecordsService = TimeRecordsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], TimeRecordsService);
//# sourceMappingURL=time-records.service.js.map