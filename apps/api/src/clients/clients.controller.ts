import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { 
  UpdateClientStatusDto, 
  UpdateClientPlanDto, 
  CreateUnitDto, 
  CreateClientUserDto 
} from './dto/additional-client.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Clientes')
@ApiBearerAuth()
@Controller('clientes')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso.' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar clientes' })
  findAll(
    @Query('search') search?: string,
    @Query('status') status?: string,
    @Query('plan') plan?: string,
    @Query('inadimplente') inadimplente?: string,
  ) {
    return this.clientsService.findAll({ search, status, plan, inadimplente });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter perfil completo do cliente' })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados básicos do cliente' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover cliente' })
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Atualizar status do cliente (Bloqueio/Desbloqueio)' })
  updateStatus(@Param('id') id: string, @Body() dto: UpdateClientStatusDto) {
    return this.clientsService.updateStatus(id, dto);
  }

  @Patch(':id/plano')
  @ApiOperation({ summary: 'Atualizar plano e cobrança' })
  updatePlan(@Param('id') id: string, @Body() dto: UpdateClientPlanDto) {
    return this.clientsService.updatePlan(id, dto);
  }

  @Get(':id/uso')
  @ApiOperation({ summary: 'Obter métricas de uso do sistema' })
  getUsage(@Param('id') id: string) {
    return this.clientsService.getUsage(id);
  }

  @Post(':id/unidades')
  @ApiOperation({ summary: 'Criar unidade/posto para o cliente' })
  createUnit(@Param('id') id: string, @Body() dto: CreateUnitDto) {
    return this.clientsService.createUnit(id, dto);
  }

  @Post(':id/usuarios')
  @ApiOperation({ summary: 'Criar usuário gestor para o cliente' })
  createUser(@Param('id') id: string, @Body() dto: CreateClientUserDto) {
    return this.clientsService.createUser(id, dto);
  }

  @Get(':id/auditoria')
  @ApiOperation({ summary: 'Listar logs de auditoria do cliente' })
  getAuditLogs(@Param('id') id: string) {
    return this.clientsService.getAuditLogs(id);
  }

  @Post(':id/cobranca')
  @ApiOperation({ summary: 'Gerar cobrança avulsa (Pix/Boleto)' })
  createInvoice(@Param('id') id: string, @Body() dto: { amount: number; method: string; reference: string }) {
    return this.clientsService.createInvoice(id, dto);
  }

  @Get(':id/faturas')
  @ApiOperation({ summary: 'Listar histórico de cobranças' })
  getInvoices(@Param('id') id: string) {
    return this.clientsService.getInvoices(id);
  }

  @Post(':id/documentos')
  @ApiOperation({ summary: 'Upload de documento' })
  @UseInterceptors(FileInterceptor('file'))
  uploadDocument(
      @Param('id') id: string, 
      @UploadedFile() file: Express.Multer.File,
      @Body('type') type: string
  ) {
    return this.clientsService.uploadDocument(id, file, type);
  }

  @Get(':id/documentos')
  @ApiOperation({ summary: 'Listar documentos do cliente' })
  getDocuments(@Param('id') id: string) {
    return this.clientsService.getDocuments(id);
  }
}
