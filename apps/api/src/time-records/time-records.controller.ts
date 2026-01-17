import { Controller, Post, Body, Req, Get, Param, Query, UseInterceptors, UploadedFile, BadRequestException, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { TimeRecordsService } from './time-records.service';
import { AuthGuard } from '../auth/auth.guard';
import { CompanyActiveGuard } from '../auth/company-active.guard';

@ApiTags('Ponto')
@UseGuards(AuthGuard, CompanyActiveGuard)
@Controller('ponto')
export class TimeRecordsController {
  constructor(private readonly timeRecordsService: TimeRecordsService) {}

  @Get('hoje')
  @ApiOperation({ summary: 'Status do dia atual do colaborador' })
  async getDailyStatus(@Query('employeeId') employeeId: string) {
      if (!employeeId) throw new BadRequestException('Employee ID is required');
      return this.timeRecordsService.getDailySummary(employeeId);
  }

  @Get('espelho')
  @ApiOperation({ summary: 'Espelho de ponto mensal' })
  async getMirror(
      @Query('employeeId') employeeId: string,
      @Query('month') month: string,
      @Query('year') year: string
  ) {
      if (!employeeId || !month || !year) throw new BadRequestException('EmployeeID, Month and Year are required');
      return this.timeRecordsService.getMirror(employeeId, Number(month), Number(year));
  }

  @Get('historico/:employeeId')
  @ApiOperation({ summary: 'Histórico de batidas (Listagem simples)' })
  async findAllByEmployee(
    @Param('employeeId') employeeId: string,
    @Query('limit') limit?: string
  ) {
    return this.timeRecordsService.findAllByEmployee(employeeId, limit ? parseInt(limit) : 20);
  }

  @Post('registrar')
  @ApiOperation({ summary: 'Registrar batida de ponto' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        employeeId: { type: 'string', description: 'ID do colaborador' },
        type: { type: 'string', description: 'Tipo de batida (ENTRADA, SAIDA, etc.)' },
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        accuracy: { type: 'number', nullable: true },
        address: { type: 'string', nullable: true },
        deviceId: { type: 'string', nullable: true },
        file: { type: 'string', format: 'binary', description: 'Foto do colaborador' },
      },
      required: ['employeeId', 'type'],
    },
  })
  @ApiOkResponse({ description: 'Batida registrada com sucesso.' })
  @UseInterceptors(FileInterceptor('file'))
  async registrar(
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any
  ) {
    // Extract IP
    const ip = body.ip || req.ip || req.connection.remoteAddress;

    // Upload photo if present
    let photoUrl = body.photoUrl;
    if (file) {
        photoUrl = await this.timeRecordsService.uploadPhoto(file);
    }

    // Parse numeric fields (multipart/form-data sends everything as strings)
    const latitude = parseFloat(body.latitude);
    const longitude = parseFloat(body.longitude);
    const accuracy = body.accuracy ? parseFloat(body.accuracy) : undefined;

    return this.timeRecordsService.create({
      employeeId: body.employeeId,
      type: body.type,
      latitude,
      longitude,
      accuracy,
      address: body.address,
      photoUrl,
      deviceId: body.deviceId,
      ip,
    });
  }
}
