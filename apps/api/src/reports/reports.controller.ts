import { Controller, Post, Body, Get, Res, Query, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { Response } from 'express';
import { ReportsService } from './reports.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { CompanyActiveGuard } from '../auth/company-active.guard';

@ApiTags('Reports')
@UseGuards(AuthGuard, CompanyActiveGuard)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get Dashboard KPIs and Chart Data' })
  async getDashboardData(
    @Req() req: any,
    @Query('month') month?: string,
    @Query('year') year?: string,
    @Query('clientId') clientId?: string,
  ) {
    const date = new Date();
    const currentMonth = month ? parseInt(month) : date.getMonth() + 1;
    const currentYear = year ? parseInt(year) : date.getFullYear();
    const user = req.user;
    const effectiveClientId =
      user && user.role !== 'SUPER_ADMIN' ? user.clientId : clientId;
    
    return this.reportsService.getDashboardData(
      currentMonth,
      currentYear,
      effectiveClientId,
    );
  }

  @Get('saas-dashboard')
  @ApiOperation({ summary: 'Get SaaS Dashboard KPIs (Super Admin)' })
  async getSaaSDashboard() {
    return this.reportsService.getSaaSDashboard();
  }

  @Get('employees')
  @ApiOperation({ summary: 'Get Employees list for filters' })
  async getEmployees() {
    return this.reportsService.getEmployees();
  }

  @Get('espelho')
  @ApiOperation({ summary: 'Get Espelho de Ponto detailed report' })
  async getEspelhoPonto(
    @Query('employeeId') employeeId: string,
    @Query('month') month?: string, 
    @Query('year') year?: string
  ) {
    const date = new Date();
    const currentMonth = month ? parseInt(month) : date.getMonth() + 1;
    const currentYear = year ? parseInt(year) : date.getFullYear();

    if (!employeeId) {
        throw new Error('Employee ID is required');
    }

    return this.reportsService.getEspelhoPonto(employeeId, currentMonth, currentYear);
  }

  @Get('espelho/pdf')
  @ApiOperation({ summary: 'Get Espelho de Ponto PDF' })
  async getEspelhoPdf(
      @Query('employeeId') employeeId: string,
      @Query('month') month: string,
      @Query('year') year: string,
      @Res() res: Response
  ) {
      const buffer = await this.reportsService.generateEspelhoPdf(
          employeeId,
          parseInt(month),
          parseInt(year)
      );

      res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename=espelho-${employeeId}.pdf`,
          'Content-Length': buffer.length,
      });

      res.end(buffer);
  }

  @Get('audit-logs')
  @ApiOperation({ summary: 'Get Audit Logs' })
  async getAuditLogs(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('userId') userId?: string,
    @Query('action') action?: string,
  ) {
    return this.reportsService.getAuditLogs({ startDate, endDate, userId, action });
  }

  @Get('financial')
  @ApiOperation({ summary: 'Get Financial SaaS Report' })
  async getFinancialReport(@Req() req: any, @Query('clientId') clientId?: string) {
    const user = req.user;
    const effectiveClientId =
      user && user.role !== 'SUPER_ADMIN' ? user.clientId : clientId;

    return this.reportsService.getFinancialReport(effectiveClientId);
  }

  @Get('saas-overview')
  @ApiOperation({ summary: 'Get SaaS Owner Overview' })
  async getSaasOverview(@Req() req: any) {
    if (!req.user || req.user.role !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Apenas o dono do SaaS pode acessar esta visão');
    }

    return this.reportsService.getSaasOverview();
  }

  @Get('schedules')
  @ApiOperation({ summary: 'Get Schedules Report' })
  async getSchedulesReport() {
    return this.reportsService.getSchedulesReport();
  }

  @Get('locations')
  getLocations(@Query() query: { date?: string; employeeId?: string }) {
    return this.reportsService.getLocationPoints(query);
  }

  @Post('generate')

  @Post('log-download')
  @ApiOperation({ summary: 'Log Report Download' })
  async logDownload(@Body() data: { mirrorId?: string, userId?: string, fileType: string, ip?: string, userAgent?: string }) {
    return this.reportsService.logDownload(data);
  }
}
