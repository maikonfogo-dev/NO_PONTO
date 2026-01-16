import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContractsModule } from './contracts/contracts.module';
import { ReportsModule } from './reports/reports.module';
import { TimeRecordsModule } from './time-records/time-records.module';
import { WorkSchedulesModule } from './work-schedules/work-schedules.module';
import { WorkLocationsModule } from './work-locations/work-locations.module';
import { ClientsModule } from './clients/clients.module';
import { PaymentsModule } from './payments/payments.module';
import { BillingModule } from './billing/billing.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 100,
    }]),
    PrismaModule,
    AuthModule,
    UsersModule,
    EmployeesModule,
    ContractsModule,
    ReportsModule,
    TimeRecordsModule,
    WorkSchedulesModule,
    WorkLocationsModule,
    ClientsModule,
    PaymentsModule,
    BillingModule,
    DemoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
