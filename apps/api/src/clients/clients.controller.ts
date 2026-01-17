import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, UseGuards, Req, ForbiddenException } from '@nestjs/common';
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
import { AuthGuard } from '../auth/auth.guard';
import { CompanyActiveGuard } from '../auth/company-active.guard';

@ApiTags('Empresas', 'Clientes')
@ApiBearerAuth()
@UseGuards(AuthGuard, CompanyActiveGuard)
@Controller(['clientes', 'empresas'])
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
    @Req() req: any,
    @Query('search') search?: string,
    @Query('status') status?: string,
    @Query('plan') plan?: string,
    @Query('inadimplente') inadimplente?: string,
  ) {
    const user = req.user;
    const clientId = user && user.role !== 'SUPER_ADMIN' ? user.clientId : undefined;
    return this.clientsService.findAll({ search, status, plan, inadimplente, clientId });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter perfil completo do cliente' })
  async findOne(@Req() req: any, @Param('id') id: string) {
    const user = req.user;
    if (user && user.role !== 'SUPER_ADMIN' && user.clientId !== id) {
      throw new ForbiddenException('Acesso negado a este cliente');
    }
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados básicos do cliente' })
  update(@Req() req: any, @Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    const user = req.user;
    if (user && user.role !== 'SUPER_ADMIN' && user.clientId !== id) {
      throw new ForbiddenException('Apenas gestores do cliente podem editar seus dados');
    }
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover cliente' })
  remove(@Req() req: any, @Param('id') id: string) {
    const user = req.user;
    if (user && user.role !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Apenas o dono do SaaS pode remover clientes');
    }
    return this.clientsService.remove(id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Atualizar status do cliente (Bloqueio/Desbloqueio)' })
  updateStatus(@Req() req: any, @Param('id') id: string, @Body() dto: UpdateClientStatusDto) {
    const user = req.user;
    if (user && user.role !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Apenas o dono do SaaS pode alterar o status de clientes');
    }
    return this.clientsService.updateStatus(id, dto);
  }

  @Patch(':id/plano')
  @ApiOperation({ summary: 'Atualizar plano e cobrança' })
  updatePlan(@Req() req: any, @Param('id') id: string, @Body() dto: UpdateClientPlanDto) {
    const user = req.user;
    if (user && user.role !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Apenas o dono do SaaS pode alterar plano de clientes');
    }
    return this.clientsService.updatePlan(id, dto);
  }

  @Get(':id/uso')
  @ApiOperation({ summary: 'Obter métricas de uso do sistema' })
  getUsage(@Req() req: any, @Param('id') id: string) {
    const user = req.user;
    if (user && user.role !== 'SUPER_ADMIN' && user.clientId !== id) {
      throw new ForbiddenException('Acesso negado às métricas deste cliente');
    }
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
  @ApiOperation({ summary: 'Listar histórico de cobranças da empresa' })
  getInvoices(@Param('id') id: string) {
    return this.clientsService.getInvoices(id);
  }

  @Get(':id/pagamentos')
  @ApiOperation({ summary: 'Listar pagamentos da empresa' })
  getPayments(@Param('id') id: string) {
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
