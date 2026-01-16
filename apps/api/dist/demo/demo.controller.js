"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const demo_service_1 = require("./demo.service");
const create_demo_request_dto_1 = require("./dto/create-demo-request.dto");
const update_demo_status_dto_1 = require("./dto/update-demo-status.dto");
let DemoController = class DemoController {
    constructor(demoService) {
        this.demoService = demoService;
    }
    create(createDemoRequestDto) {
        return this.demoService.create(createDemoRequestDto);
    }
    findAll(status) {
        return this.demoService.findAll(status);
    }
    updateStatus(id, updateDemoStatusDto) {
        return this.demoService.updateStatus(id, updateDemoStatusDto);
    }
};
exports.DemoController = DemoController;
__decorate([
    (0, common_1.Post)(),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60000 } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_demo_request_dto_1.CreateDemoRequestDto]),
    __metadata("design:returntype", void 0)
], DemoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DemoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_demo_status_dto_1.UpdateDemoStatusDto]),
    __metadata("design:returntype", void 0)
], DemoController.prototype, "updateStatus", null);
exports.DemoController = DemoController = __decorate([
    (0, common_1.Controller)('demo-requests'),
    __metadata("design:paramtypes", [demo_service_1.DemoService])
], DemoController);
//# sourceMappingURL=demo.controller.js.map