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
exports.WorkLocationsController = void 0;
const common_1 = require("@nestjs/common");
const work_locations_service_1 = require("./work-locations.service");
let WorkLocationsController = class WorkLocationsController {
    constructor(workLocationsService) {
        this.workLocationsService = workLocationsService;
    }
    create(createDto) {
        return this.workLocationsService.create(createDto);
    }
    findAll(contractId) {
        return this.workLocationsService.findAll(contractId);
    }
    findOne(id) {
        return this.workLocationsService.findOne(id);
    }
};
exports.WorkLocationsController = WorkLocationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkLocationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('contractId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkLocationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkLocationsController.prototype, "findOne", null);
exports.WorkLocationsController = WorkLocationsController = __decorate([
    (0, common_1.Controller)('postos'),
    __metadata("design:paramtypes", [work_locations_service_1.WorkLocationsService])
], WorkLocationsController);
//# sourceMappingURL=work-locations.controller.js.map