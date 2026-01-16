import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { WorkLocationsService } from './work-locations.service';

@Controller('postos')
export class WorkLocationsController {
  constructor(private readonly workLocationsService: WorkLocationsService) {}

  @Post()
  create(@Body() createDto: any) {
    return this.workLocationsService.create(createDto);
  }

  @Get()
  findAll(@Query('contractId') contractId?: string) {
    return this.workLocationsService.findAll(contractId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workLocationsService.findOne(id);
  }
}
