import { Controller, Get, Post, Body, Param, Delete, Query, Put, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { AuthGuard } from '../auth/auth.guard';
import { CompanyActiveGuard } from '../auth/company-active.guard';

@UseGuards(AuthGuard, CompanyActiveGuard)
@Controller('contratos')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  create(@Req() req: any, @Body() createContractDto: any) {
    const user = req.user;
    const clientId =
      user && user.role !== 'SUPER_ADMIN'
        ? user.clientId
        : createContractDto.clientId;

    return this.contractsService.create({
      ...createContractDto,
      clientId,
    });
  }

  @Get()
  findAll(@Req() req: any, @Query('clientId') clientId?: string) {
    const user = req.user;
    const effectiveClientId =
      user && user.role !== 'SUPER_ADMIN' ? user.clientId : clientId;

    return this.contractsService.findAll(effectiveClientId);
  }

  @Get(':id')
  async findOne(@Req() req: any, @Param('id') id: string) {
    const contract = await this.contractsService.findOne(id);
    const user = req.user;

    if (
      user &&
      user.role !== 'SUPER_ADMIN' &&
      contract.clientId &&
      user.clientId !== contract.clientId
    ) {
      throw new ForbiddenException('Acesso negado a este contrato');
    }

    return contract;
  }

  @Get(':id/postos')
  async getWorkLocations(@Req() req: any, @Param('id') id: string) {
    const contract = await this.contractsService.findOne(id);
    const user = req.user;

    if (
      user &&
      user.role !== 'SUPER_ADMIN' &&
      contract.clientId &&
      user.clientId !== contract.clientId
    ) {
      throw new ForbiddenException('Acesso negado aos postos deste contrato');
    }

    return this.contractsService.getWorkLocations(id);
  }

  @Put(':id')
  async update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateContractDto: any,
  ) {
    const contract = await this.contractsService.findOne(id);
    const user = req.user;

    if (
      user &&
      user.role !== 'SUPER_ADMIN' &&
      contract.clientId &&
      user.clientId !== contract.clientId
    ) {
      throw new ForbiddenException(
        'Apenas gestores do cliente podem editar este contrato',
      );
    }

    const data =
      user && user.role !== 'SUPER_ADMIN'
        ? { ...updateContractDto, clientId: contract.clientId }
        : updateContractDto;

    return this.contractsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Req() req: any, @Param('id') id: string) {
    const contract = await this.contractsService.findOne(id);
    const user = req.user;

    if (
      user &&
      user.role !== 'SUPER_ADMIN' &&
      contract.clientId &&
      user.clientId !== contract.clientId
    ) {
      throw new ForbiddenException('Acesso negado a este contrato');
    }

    return this.contractsService.remove(id);
  }
}
