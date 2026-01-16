import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { TransferEmployeeDto } from './dto/transfer-employee.dto';

@Controller('colaboradores')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Post('importar')
  @UseInterceptors(FileInterceptor('file'))
  importEmployees(@UploadedFile() file: Express.Multer.File) {
    return this.employeesService.importEmployees(file);
  }

  @Get()
  findAll(
    @Query('contractId') contractId?: string,
    @Query('clientId') clientId?: string,
    @Query('status') status?: string,
    @Query('search') search?: string,
    @Query('position') position?: string,
    @Query('workLocationId') workLocationId?: string,
    @Query('scheduleId') scheduleId?: string,
    @Query('missingPoint') missingPoint?: string,
  ) {
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

  @Get('jornadas/listar')
  getSchedules() {
    return this.employeesService.getSchedules();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }

  @Post(':id/transferir')
  transfer(
    @Param('id') id: string,
    @Body() transferDto: TransferEmployeeDto,
  ) {
    return this.employeesService.transfer(id, transferDto);
  }

  @Get(':id/dashboard')
  getDashboard(@Param('id') id: string) {
    return this.employeesService.getDashboard(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.employeesService.updateStatus(id, body.status);
  }

  @Post(':id/jornada')
  linkSchedule(@Param('id') id: string, @Body() body: { jornada_id: string, tolerancia_min: number, banco_horas: boolean }) {
     return this.employeesService.linkSchedule(id, body);
  }

  @Get(':id/clt/resumo')
  getCltSummary(@Param('id') id: string) {
    return this.employeesService.getCltSummary(id);
  }

  @Get(':id/pontos')
  getPoints(@Param('id') id: string) {
    return this.employeesService.getPoints(id);
  }

  @Post(':id/documentos')
  uploadDocument(@Param('id') id: string, @Body() body: any) {
    return this.employeesService.uploadDocument(id, body);
  }

  @Get(':id/auditoria')
  getAuditLogs(@Param('id') id: string) {
    return this.employeesService.getAuditLogs(id);
  }
}
