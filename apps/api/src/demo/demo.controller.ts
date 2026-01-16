import { Body, Controller, Get, Param, Patch, Query, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { DemoService } from './demo.service';
import { CreateDemoRequestDto } from './dto/create-demo-request.dto';
import { UpdateDemoStatusDto } from './dto/update-demo-status.dto';

@Controller('demo-requests')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Post()
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  create(@Body() createDemoRequestDto: CreateDemoRequestDto) {
    return this.demoService.create(createDemoRequestDto);
  }

  @Get()
  findAll(@Query('status') status?: string) {
    return this.demoService.findAll(status);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() updateDemoStatusDto: UpdateDemoStatusDto,
  ) {
    return this.demoService.updateStatus(id, updateDemoStatusDto);
  }
}
