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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const stripe_adapter_1 = require("./adapters/stripe.adapter");
const mercadopago_adapter_1 = require("./adapters/mercadopago.adapter");
let PaymentsService = class PaymentsService {
    constructor(stripeAdapter, mercadoPagoAdapter) {
        this.stripeAdapter = stripeAdapter;
        this.mercadoPagoAdapter = mercadoPagoAdapter;
    }
    getGateway(method) {
        switch (method.toUpperCase()) {
            case 'CARD':
            case 'CREDIT_CARD':
            case 'CARTAO':
                return this.stripeAdapter;
            case 'PIX':
                return this.mercadoPagoAdapter;
            default:
                throw new common_1.BadRequestException(`Payment method ${method} not supported`);
        }
    }
    async createCustomer(method, name, email) {
        return this.getGateway(method).createCustomer(name, email);
    }
    async processPayment(method, intent) {
        return this.getGateway(method).createPayment(intent);
    }
    async checkStatus(method, id) {
        return this.getGateway(method).getPaymentStatus(id);
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stripe_adapter_1.StripeAdapter,
        mercadopago_adapter_1.MercadoPagoAdapter])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map