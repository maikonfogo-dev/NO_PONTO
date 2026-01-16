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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const axios_1 = require("axios");
let DemoService = class DemoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    get demoRequest() {
        return this.prisma.demoRequest;
    }
    async create(createDemoRequestDto) {
        const isCaptchaValid = await this.validateCaptcha(createDemoRequestDto.captchaToken);
        if (!isCaptchaValid) {
            throw new common_1.BadRequestException('Invalid captcha token');
        }
        const { captchaToken: _captchaToken } = createDemoRequestDto, data = __rest(createDemoRequestDto, ["captchaToken"]);
        return this.demoRequest.create({
            data: Object.assign(Object.assign({}, data), { status: 'PENDENTE' }),
        });
    }
    async validateCaptcha(token) {
        const secretKey = process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
        const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        try {
            const response = await axios_1.default.post(url, {
                secret: secretKey,
                response: token,
            });
            return response.data.success;
        }
        catch (error) {
            console.error('Captcha validation failed:', error);
            return false;
        }
    }
    async findAll(status) {
        return this.demoRequest.findMany({
            where: status ? { status } : undefined,
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateStatus(id, updateDemoStatusDto) {
        return this.demoRequest.update({
            where: { id },
            data: { status: updateDemoStatusDto.status },
        });
    }
};
exports.DemoService = DemoService;
exports.DemoService = DemoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DemoService);
//# sourceMappingURL=demo.service.js.map