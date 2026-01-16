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
var WebhooksController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const billing_service_1 = require("./billing.service");
let WebhooksController = WebhooksController_1 = class WebhooksController {
    constructor(billingService) {
        this.billingService = billingService;
        this.logger = new common_1.Logger(WebhooksController_1.name);
    }
    async handleStripe(body) {
        var _a;
        const event = body;
        this.logger.log(`Received Stripe event: ${event.type}`);
        if (event.type === 'checkout.session.completed' || event.type === 'invoice.payment_succeeded') {
            const object = event.data.object;
            const invoiceId = (_a = object.metadata) === null || _a === void 0 ? void 0 : _a.invoiceId;
            const transactionId = object.id;
            if (invoiceId) {
                await this.billingService.confirmPayment(invoiceId, transactionId);
            }
            else {
                this.logger.warn('Stripe event missing invoiceId metadata');
            }
        }
        return { received: true };
    }
    async handleMercadoPago(body, query) {
        var _a;
        this.logger.log('Received Mercado Pago Webhook');
        console.log('Body:', body);
        console.log('Query:', query);
        const topic = body.topic || body.type;
        const id = ((_a = body.data) === null || _a === void 0 ? void 0 : _a.id) || body.id;
        if (topic === 'payment' && id) {
            await this.billingService.checkAndConfirmPayment('PIX', String(id));
        }
        return { status: 'OK' };
    }
};
exports.WebhooksController = WebhooksController;
__decorate([
    (0, common_1.Post)('stripe'),
    (0, swagger_1.ApiOperation)({ summary: 'Receber notificação do Stripe' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebhooksController.prototype, "handleStripe", null);
__decorate([
    (0, common_1.Post)('mercadopago'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Receber notificação do Mercado Pago' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WebhooksController.prototype, "handleMercadoPago", null);
exports.WebhooksController = WebhooksController = WebhooksController_1 = __decorate([
    (0, swagger_1.ApiTags)('Webhooks'),
    (0, common_1.Controller)('webhooks'),
    __metadata("design:paramtypes", [billing_service_1.BillingService])
], WebhooksController);
//# sourceMappingURL=webhooks.controller.js.map