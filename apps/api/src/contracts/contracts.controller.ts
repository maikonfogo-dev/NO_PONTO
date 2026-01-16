import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller('contratos')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  create(@Body() createContractDto: any) {
    return this.contractsService.create(createContractDto);
  }

  @Get()
  findAll(@Query('clientId') clientId?: string) {
    return this.contractsService.findAll(clientId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractsService.findOne(id);
  }

  @Get(':id/postos')
  getWorkLocations(@Param('id') id: string) {
    return this.contractsService.getWorkLocations(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContractDto: any) {
    return this.contractsService.update(id, updateContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractsService.remove(id);
  }
}
