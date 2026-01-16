"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const employees_module_1 = require("./employees/employees.module");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const contracts_module_1 = require("./contracts/contracts.module");
const reports_module_1 = require("./reports/reports.module");
const time_records_module_1 = require("./time-records/time-records.module");
const work_schedules_module_1 = require("./work-schedules/work-schedules.module");
const work_locations_module_1 = require("./work-locations/work-locations.module");
const clients_module_1 = require("./clients/clients.module");
const payments_module_1 = require("./payments/payments.module");
const billing_module_1 = require("./billing/billing.module");
const demo_module_1 = require("./demo/demo.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            schedule_1.ScheduleModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 100,
                }]),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            employees_module_1.EmployeesModule,
            contracts_module_1.ContractsModule,
            reports_module_1.ReportsModule,
            time_records_module_1.TimeRecordsModule,
            work_schedules_module_1.WorkSchedulesModule,
            work_locations_module_1.WorkLocationsModule,
            clients_module_1.ClientsModule,
            payments_module_1.PaymentsModule,
            billing_module_1.BillingModule,
            demo_module_1.DemoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map