import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorkSchedulesService } from './work-schedules.service';

@Controller('escalas')
export class WorkSchedulesController {
  constructor(private readonly workSchedulesService: WorkSchedulesService) {}

  @Post()
  create(@Body() createDto: any) {
    return this.workSchedulesService.create(createDto);
  }

  @Get()
  findAll() {
    return this.workSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workSchedulesService.findOne(id);
  }
}
