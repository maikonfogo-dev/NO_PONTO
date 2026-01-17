import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as crypto from 'crypto';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TimeRecordsService {
  private s3Client: S3Client;
  private bucketName: string;
  private readonly logger = new Logger(TimeRecordsService.name);

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService
  ) {
    this.bucketName = this.configService.get('AWS_BUCKET_NAME') || 'noponto-docs';
    
    this.s3Client = new S3Client({
      region: this.configService.get('AWS_REGION') || 'us-east-1',
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID') || 'minioadmin',
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY') || 'minioadmin',
      },
      endpoint: this.configService.get('AWS_ENDPOINT'),
      forcePathStyle: true,
    });
  }

  async uploadPhoto(file: Express.Multer.File): Promise<string> {
      const fileKey = `punches/${Date.now()}_${file.originalname}`;
      
      try {
        // Try S3 First
        await this.s3Client.send(new PutObjectCommand({
            Bucket: this.bucketName,
            Key: fileKey,
            Body: file.buffer,
            ContentType: file.mimetype,
        }));

        const endpoint = this.configService.get('AWS_ENDPOINT');
        if (endpoint && endpoint.includes('localhost')) {
            return `${endpoint}/${this.bucketName}/${fileKey}`;
        } else {
            return `https://${this.bucketName}.s3.${this.configService.get('AWS_REGION')}.amazonaws.com/${fileKey}`;
        }
      } catch (error) {
        this.logger.warn('S3 Upload Error, falling back to local storage:', error);
        
        // Fallback: Save locally
        const uploadDir = path.join(process.cwd(), 'uploads', 'punches');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const localPath = path.join(uploadDir, `${Date.now()}_${file.originalname}`);
        fs.writeFileSync(localPath, file.buffer);
        
        // Return local URL (assumes static file serving is enabled)
        return `http://localhost:4000/uploads/punches/${path.basename(localPath)}`;
      }
  }

  async create(data: {
    employeeId: string;
    type: string;
    latitude: number;
    longitude: number;
    accuracy?: number;
    address?: string;
    photoUrl?: string;
    deviceId?: string;
    ip?: string;
  }) {
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

    if (!employee) throw new NotFoundException('Colaborador não encontrado');

    if (employee.contract && employee.contract.client && employee.contract.client.status !== 'ATIVO') {
      throw new Error('Empresa bloqueada ou inadimplente. Registro de ponto não permitido.');
    }

    // Geofencing Check
    const status = 'PENDENTE';
    let isGeofenceViolation = false;
    
    // Check if within radius
    if (employee.workLocation && employee.workLocation.latitude && employee.workLocation.longitude) {
        if (employee.requireGPS && (!data.latitude || !data.longitude)) {
             throw new Error('Localização obrigatória para este colaborador');
        }

        const distance = this.calculateDistance(
            data.latitude, 
            data.longitude, 
            employee.workLocation.latitude, 
            employee.workLocation.longitude
        );

        const radius = employee.workLocation.radius || 50; // Default 50m

        if (distance > radius) {
            isGeofenceViolation = true;
            this.logger.warn(`[GEOFENCE ALERT] Employee ${employee.name} is ${distance}m away (Limit: ${radius}m)`);
        }
    }

    if (employee.requirePhoto && !data.photoUrl) {
        throw new Error('Foto obrigatória para registro de ponto');
    }

    // Generate Integrity Hash
    // Hash includes: ID (generated later, so we use timestamp), EmployeeID, Type, Lat, Long, Secret
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

  // Helper to parse HH:mm to minutes from midnight
  private timeToMinutes(time: string): number {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
  }

  private calculateExpectedMinutes(schedule: any): number {
      if (!schedule) return 480; // Default 8h

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
      } catch (e) {
          this.logger.error('Error calculating schedule minutes', e);
          return 480;
      }
  }

  async getDailySummary(employeeId: string) {
      const employee = await this.prisma.employee.findUnique({
        where: { id: employeeId },
        include: { schedule: true, workLocation: true }
      });

      const today = new Date();
      const start = new Date(today.setHours(0,0,0,0));
      const end = new Date(today.setHours(23,59,59,999));

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

      // Calculate worked hours for today
      let workedMinutes = 0;
      for (let i = 0; i < punches.length; i += 2) {
          const entry = punches[i];
          const exit = punches[i+1];
          
          if (entry && exit) {
              const diff = (exit.timestamp.getTime() - entry.timestamp.getTime()) / 1000 / 60; // minutes
              workedMinutes += diff;
          }
      }

      const expectedMinutes = this.calculateExpectedMinutes(employee?.schedule);
      const balance = workedMinutes - expectedMinutes;

      const punchesWithDistance = punches.map((punch) => {
          let distanceFromLocationMeters: number | null = null;

          if (
            employee?.workLocation &&
            typeof employee.workLocation.latitude === 'number' &&
            typeof employee.workLocation.longitude === 'number' &&
            typeof punch.latitude === 'number' &&
            typeof punch.longitude === 'number'
          ) {
            distanceFromLocationMeters = Math.round(
              this.calculateDistance(
                punch.latitude,
                punch.longitude,
                employee.workLocation.latitude,
                employee.workLocation.longitude
              )
            );
          }

          return {
            ...punch,
            distanceFromLocationMeters,
          };
      });

      return {
          date: format(new Date(), 'yyyy-MM-dd'),
          punches: punchesWithDistance,
          lastPunch,
          isWorking,
          workedHours: (workedMinutes / 60).toFixed(2),
          balance: (balance / 60).toFixed(2),
          workLocation: employee?.workLocation
            ? {
                latitude: employee.workLocation.latitude,
                longitude: employee.workLocation.longitude,
                radius: employee.workLocation.radius || 50,
              }
            : null,
      };
  }

  async getMirror(employeeId: string, month: number, year: number) {
      const start = startOfMonth(new Date(year, month - 1));
      const end = endOfMonth(new Date(year, month - 1));

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

      // Generate days
      const days = eachDayOfInterval({ start, end });

      const report = days.map(day => {
          const dayPunches = punches.filter(p => isSameDay(p.timestamp, day));
          
          // Calculate worked hours
          let workedMinutes = 0;
          for (let i = 0; i < dayPunches.length; i += 2) {
              const entry = dayPunches[i];
              const exit = dayPunches[i+1];
              
              if (entry && exit) {
                  const diff = (exit.timestamp.getTime() - entry.timestamp.getTime()) / 1000 / 60;
                  workedMinutes += diff;
              }
          }

          // Schedule logic (Simplified)
          let expectedMinutes = this.calculateExpectedMinutes(employee?.schedule);
          
          // Check for Weekends (assuming 5x2 for now)
          // TODO: Check employee.schedule.type
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
               } else if (dayPunches.length === 0 && expectedMinutes > 0) {
                  status = 'FALTA';
               } else if (balance < 0) {
                  // status = 'ATRASO'; // Optional
               }
          }

          return {
              date: format(day, 'yyyy-MM-dd'),
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


  // Haversine Formula to calculate distance in meters
  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  }

  async findAllByEmployee(employeeId: string, limit: number = 20) {
    return this.prisma.timeRecord.findMany({
        where: { employeeId },
        orderBy: { timestamp: 'desc' },
        take: limit
    });
  }
}
