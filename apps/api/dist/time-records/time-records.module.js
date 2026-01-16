"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRecordsModule = void 0;
const common_1 = require("@nestjs/common");
const time_records_service_1 = require("./time-records.service");
const time_records_controller_1 = require("./time-records.controller");
let TimeRecordsModule = class TimeRecordsModule {
};
exports.TimeRecordsModule = TimeRecordsModule;
exports.TimeRecordsModule = TimeRecordsModule = __decorate([
    (0, common_1.Module)({
        providers: [time_records_service_1.TimeRecordsService],
        controllers: [time_records_controller_1.TimeRecordsController],
        exports: [time_records_service_1.TimeRecordsService]
    })
], TimeRecordsModule);
//# sourceMappingURL=time-records.module.js.map