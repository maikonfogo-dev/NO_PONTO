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
var MercadoPagoAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoAdapter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mercadopago_1 = require("mercadopago");
let MercadoPagoAdapter = MercadoPagoAdapter_1 = class MercadoPagoAdapter {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(MercadoPagoAdapter_1.name);
        const accessToken = this.configService.get('MERCADOPAGO_ACCESS_TOKEN');
        if (accessToken) {
            this.client = new mercadopago_1.MercadoPagoConfig({ accessToken: accessToken });
            this.payment = new mercadopago_1.Payment(this.client);
        }
        else {
            this.logger.warn('MERCADOPAGO_ACCESS_TOKEN not found. MercadoPago adapter will not work.');
        }
    }
    async createCustomer(name, email) {
        return email;
    }
    async createPayment(intent) {
        var _a;
        if (!this.client) {
            return {
                id: `mock-mp-${Date.now()}`,
                status: 'pending',
                qrCode: 'mock-qr-code-content',
                qrCodeBase64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII='
            };
        }
        try {
            const result = await this.payment.create({
                body: {
                    transaction_amount: intent.amount,
                    description: intent.description,
                    payment_method_id: 'pix',
                    payer: {
                        email: intent.customerId
                    },
                    metadata: intent.metadata
                }
            });
            const pointOfInteraction = result.point_of_interaction;
            const transactionData = pointOfInteraction === null || pointOfInteraction === void 0 ? void 0 : pointOfInteraction.transaction_data;
            return {
                id: (_a = result.id) === null || _a === void 0 ? void 0 : _a.toString(),
                status: result.status === 'approved' ? 'succeeded' : 'pending',
                qrCode: transactionData === null || transactionData === void 0 ? void 0 : transactionData.qr_code,
                qrCodeBase64: transactionData === null || transactionData === void 0 ? void 0 : transactionData.qr_code_base64,
                url: transactionData === null || transactionData === void 0 ? void 0 : transactionData.ticket_url
            };
        }
        catch (error) {
            this.logger.error(`Error creating MercadoPago payment: ${error.message}`);
            throw error;
        }
    }
    async getPaymentStatus(id) {
        var _a;
        if (!this.client)
            return { id, status: 'succeeded' };
        try {
            const result = await this.payment.get({ id });
            return {
                id: (_a = result.id) === null || _a === void 0 ? void 0 : _a.toString(),
                status: result.status === 'approved' ? 'succeeded' :
                    result.status === 'rejected' ? 'failed' : 'pending'
            };
        }
        catch (error) {
            this.logger.error(`Error retrieving MercadoPago payment: ${error.message}`);
            throw error;
        }
    }
};
exports.MercadoPagoAdapter = MercadoPagoAdapter;
exports.MercadoPagoAdapter = MercadoPagoAdapter = MercadoPagoAdapter_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MercadoPagoAdapter);
//# sourceMappingURL=mercadopago.adapter.js.map