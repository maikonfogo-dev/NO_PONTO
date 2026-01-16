import { Module } from '@nestjs/common';
import { TimeRecordsService } from './time-records.service';
import { TimeRecordsController } from './time-records.controller';

@Module({
  providers: [TimeRecordsService],
  controllers: [TimeRecordsController],
  exports: [TimeRecordsService]
})
export class TimeRecordsModule {}
