import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UseInterceptors, UploadedFile, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { TransferEmployeeDto } from './dto/transfer-employee.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CompanyActiveGuard } from '../auth/company-active.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Funcionários', 'Colaboradores')
@ApiBearerAuth()
@UseGuards(AuthGuard, CompanyActiveGuard)
@Controller(['colaboradores', 'funcionarios'])
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar colaborador' })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Post('importar')
  @ApiOperation({ summary: 'Importar colaboradores via planilha' })
  @UseInterceptors(FileInterceptor('file'))
  importEmployees(@UploadedFile() file: Express.Multer.File) {
    return this.employeesService.importEmployees(file);
  }

  @Get()
  @ApiOperation({ summary: 'Listar colaboradores da empresa' })
  findAll(
    @Req() req: any,
    @Query('contractId') contractId?: string,
    @Query('clientId') clientId?: string,
    @Query('status') status?: string,
    @Query('search') search?: string,
    @Query('position') position?: string,
    @Query('workLocationId') workLocationId?: string,
    @Query('scheduleId') scheduleId?: string,
    @Query('missingPoint') missingPoint?: string,
  ) {
    const user = req.user;
    const effectiveClientId =
      user && user.role !== 'SUPER_ADMIN' ? user.clientId : clientId;

    return this.employeesService.findAll({ 
      contractId, 
      clientId: effectiveClientId, 
      status, 
      search, 
      position, 
      workLocationId, 
      scheduleId,
      missingPoint: missingPoint === 'true',
    });
  }

  @Get('jornadas/listar')
  @ApiOperation({ summary: 'Listar jornadas de trabalho disponíveis' })
  getSchedules() {
    return this.employeesService.getSchedules();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes do colaborador' })
  async findOne(@Req() req: any, @Param('id') id: string) {
    const employee = await this.employeesService.findOne(id);
    const user = req.user;

    if (
      user &&
      user.role !== 'SUPER_ADMIN' &&
      employee.contract?.clientId &&
      user.clientId !== employee.contract.clientId
    ) {
      throw new ForbiddenException('Acesso negado a este colaborador');
    }

    return employee;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar dados do colaborador' })
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover colaborador' })
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }

  @Post(':id/transferir')
  @ApiOperation({ summary: 'Transferir colaborador entre contratos/unidades' })
  transfer(
    @Param('id') id: string,
    @Body() transferDto: TransferEmployeeDto,
  ) {
    return this.employeesService.transfer(id, transferDto);
  }

  @Get(':id/dashboard')
  @ApiOperation({ summary: 'Dashboard resumido do colaborador' })
  getDashboard(@Param('id') id: string) {
    return this.employeesService.getDashboard(id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Atualizar status do colaborador' })
  updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.employeesService.updateStatus(id, body.status);
  }

  @Post(':id/jornada')
  @ApiOperation({ summary: 'Vincular jornada de trabalho ao colaborador' })
  linkSchedule(@Param('id') id: string, @Body() body: { jornada_id: string, tolerancia_min: number, banco_horas: boolean }) {
     return this.employeesService.linkSchedule(id, body);
  }

  @Get(':id/clt/resumo')
  @ApiOperation({ summary: 'Resumo CLT do colaborador' })
  getCltSummary(@Param('id') id: string) {
    return this.employeesService.getCltSummary(id);
  }

  @Get(':id/pontos')
  @ApiOperation({ summary: 'Listar registros de ponto do colaborador' })
  getPoints(@Param('id') id: string) {
    return this.employeesService.getPoints(id);
  }

  @Post(':id/documentos')
  @ApiOperation({ summary: 'Enviar documento do colaborador' })
  uploadDocument(@Param('id') id: string, @Body() body: any) {
    return this.employeesService.uploadDocument(id, body);
  }

  @Get(':id/auditoria')
  @ApiOperation({ summary: 'Listar logs de auditoria do colaborador' })
  getAuditLogs(@Param('id') id: string) {
    return this.employeesService.getAuditLogs(id);
  }
}
