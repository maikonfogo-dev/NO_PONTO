import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TimeRecordsModule } from '../time-records/time-records.module';

@Module({
  imports: [TimeRecordsModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
