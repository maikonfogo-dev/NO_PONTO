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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthGuard = class AuthGuard {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        var _a;
        const request = context.switchToHttp().getRequest();
        const authHeader = (_a = (request.headers['authorization'] ||
            request.headers['Authorization'])) !== null && _a !== void 0 ? _a : '';
        if (!authHeader || typeof authHeader !== 'string') {
            throw new common_1.UnauthorizedException('Token de autenticação não informado');
        }
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer' || !token) {
            throw new common_1.UnauthorizedException('Formato de token inválido');
        }
        if (!token.startsWith('mock_')) {
            throw new common_1.UnauthorizedException('Token inválido');
        }
        const userId = token.substring('mock_'.length);
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Usuário não encontrado');
        }
        request.user = user;
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map