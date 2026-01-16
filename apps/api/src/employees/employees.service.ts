import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { TransferEmployeeDto } from './dto/transfer-employee.dto';
import * as ExcelJS from 'exceljs';
import { Readable } from 'stream';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    // Basic password generation (should be handled better in prod)
    const defaultPassword = 'changeMe123!';
    
    // Create User first
    const user = await this.prisma.user.create({
      data: {
        email: createEmployeeDto.email,
        name: createEmployeeDto.name,
        password: defaultPassword,
        role: 'EMPLOYEE',
      },
    });

    // Then Create Employee linked to User
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
        // New fields
        rg: createEmployeeDto.rg,
        birthDate: createEmployeeDto.birthDate ? new Date(createEmployeeDto.birthDate) : null,
        phone: createEmployeeDto.phone,
        email: createEmployeeDto.personalEmail,
        address: createEmployeeDto.address,
        department: createEmployeeDto.department,
        function: createEmployeeDto.function,
        requirePhoto: createEmployeeDto.requirePhoto ?? true,
        requireGPS: createEmployeeDto.requireGPS ?? true,
        allowManualEntry: createEmployeeDto.allowManualEntry ?? false,
      },
      include: {
        user: true,
        contract: true,
      },
    });
  }

  async findAll(params: { 
    contractId?: string; 
    clientId?: string; 
    status?: string;
    search?: string;
    position?: string;
    workLocationId?: string;
    scheduleId?: string;
    missingPoint?: boolean;
  }) {
    const where: any = {};
    
    if (params.contractId) where.contractId = params.contractId;
    if (params.clientId) where.contract = { clientId: params.clientId };
    if (params.status) where.status = params.status;
    if (params.workLocationId) where.workLocationId = params.workLocationId;
    if (params.scheduleId) where.scheduleId = params.scheduleId;
    
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

  async findOne(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      include: {
        user: true,
        contract: { include: { client: true } },
        schedule: true,
        documents: true,
      },
    });

    if (!employee) throw new NotFoundException(`Employee with ID ${id} not found`);
    return employee;
  }

  async getSchedules() {
    return this.prisma.workSchedule.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const { personalEmail, admissionDate, birthDate, ...rest } = updateEmployeeDto;
    
    const data: any = { ...rest };
    
    if (personalEmail) data.email = personalEmail;
    if (admissionDate) data.admissionDate = new Date(admissionDate);
    if (birthDate) data.birthDate = new Date(birthDate);

    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.employee.update({
      where: { id },
      data: { status: 'DESLIGADO' },
    });
  }

  async transfer(id: string, transferDto: TransferEmployeeDto) {
    // Simplified transfer: just update contractId
    return this.prisma.employee.update({
      where: { id },
      data: { contractId: transferDto.novo_contrato_id },
    });
  }

  async getDashboard(id: string) {
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

  async updateStatus(id: string, status: string) {
    await this.logAudit(id, 'ATUALIZACAO_STATUS', `Status alterado para ${status}`);
    return this.prisma.employee.update({
      where: { id },
      data: { status },
    });
  }

  async linkSchedule(id: string, data: any) {
    await this.logAudit(id, 'VINCULO_JORNADA', `Jornada vinculada: ${data.jornada_id}`);
    return this.prisma.employee.update({
      where: { id },
      data: { 
        scheduleId: data.jornada_id,
        // tolerance and banco_horas could be stored in Employee or specific settings table if needed
      }, 
    });
  }

  async getCltSummary(_id: string) {
    // Mock calculation
    return {
      horas_trabalhadas: 176,
      horas_extras: 12,
      faltas: 1,
      atrasos: 3,
      adicional_noturno: 4,
      banco_horas_saldo: 24,
    };
  }

  async getPoints(id: string) {
    return this.prisma.timeRecord.findMany({
      where: { employeeId: id },
      orderBy: { timestamp: 'desc' },
      take: 20,
    });
  }

  async importEmployees(file: Express.Multer.File) {
    const stream = new Readable();
    stream.push(file.buffer);
    stream.push(null);

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.read(stream);
    
    const worksheet = workbook.getWorksheet(1);
    if (!worksheet) throw new Error('No worksheet found');

    let successCount = 0;
    let failureCount = 0;
    const errors: any[] = [];

    // Iterate rows, starting from 2 (skip header)
    // Assume columns: Name, Email, CPF, Matricula, Position, ContractId
    for (let i = 2; i <= worksheet.rowCount; i++) {
        const row = worksheet.getRow(i);
        if (!row.hasValues) continue;

        try {
            const name = row.getCell(1).text;
            const email = row.getCell(2).text;
            const cpf = row.getCell(3).text;
            const matricula = row.getCell(4).text;
            const position = row.getCell(5).text;
            const contractId = row.getCell(6).text; // Optional in excel, but required by schema

            if (!name || !email || !cpf) {
                failureCount++;
                errors.push({ row: i, error: 'Missing required fields' });
                continue;
            }

            // Reuse create logic or call this.create (but create needs DTO)
            // For simplicity, direct prisma call or map to DTO
            const dto = new CreateEmployeeDto();
            dto.name = name;
            dto.email = email;
            dto.cpf = cpf;
            dto.matricula = matricula;
            dto.position = position;
            dto.contractId = contractId; // Need to validate if contract exists or handle empty
            
            // If contractId is missing, maybe assign a default or skip?
            // For now, let's assume valid ID provided or fail
            
            await this.create(dto);
            successCount++;
        } catch (e) {
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

  async uploadDocument(id: string, data: any) {
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

  async getAuditLogs(id: string) {
    return this.prisma.auditLog.findMany({
      where: { entity: 'colaborador', entityId: id },
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { name: true } } }
    });
  }

  private async logAudit(entityId: string, action: string, details: string) {
     // In a real app, userId should be extracted from context
     await this.prisma.auditLog.create({
       data: {
         entity: 'colaborador',
         entityId,
         action,
         details,
         // userId: ... (system action)
       }
     });
  }
}
