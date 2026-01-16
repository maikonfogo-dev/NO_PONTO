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
var StripeAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeAdapter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const stripe_1 = require("stripe");
let StripeAdapter = StripeAdapter_1 = class StripeAdapter {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(StripeAdapter_1.name);
        const apiKey = this.configService.get('STRIPE_SECRET_KEY');
        if (apiKey) {
            this.stripe = new stripe_1.default(apiKey, {
                apiVersion: '2024-12-18.acacia',
            });
        }
        else {
            this.logger.warn('STRIPE_SECRET_KEY not found. Stripe adapter will not work.');
        }
    }
    async createCustomer(name, email) {
        if (!this.stripe)
            return 'mock-stripe-customer-id';
        try {
            const existingCustomers = await this.stripe.customers.list({ email, limit: 1 });
            if (existingCustomers.data.length > 0) {
                return existingCustomers.data[0].id;
            }
            const customer = await this.stripe.customers.create({
                name,
                email,
            });
            return customer.id;
        }
        catch (error) {
            this.logger.error(`Error creating Stripe customer: ${error.message}`);
            throw error;
        }
    }
    async createPayment(intent) {
        if (!this.stripe) {
            return {
                id: 'mock-stripe-payment-id',
                status: 'succeeded',
            };
        }
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: Math.round(intent.amount * 100),
                currency: intent.currency,
                description: intent.description,
                payment_method: intent.paymentMethodId,
                customer: intent.customerId,
                confirm: true,
                metadata: intent.metadata,
                automatic_payment_methods: {
                    enabled: true,
                    allow_redirects: 'never'
                }
            });
            return {
                id: paymentIntent.id,
                status: paymentIntent.status === 'succeeded' ? 'succeeded' : 'pending',
                clientSecret: paymentIntent.client_secret,
            };
        }
        catch (error) {
            this.logger.error(`Error creating Stripe payment: ${error.message}`);
            throw error;
        }
    }
    async getPaymentStatus(id) {
        if (!this.stripe)
            return { id, status: 'succeeded' };
        try {
            const paymentIntent = await this.stripe.paymentIntents.retrieve(id);
            return {
                id: paymentIntent.id,
                status: paymentIntent.status === 'succeeded' ? 'succeeded' :
                    paymentIntent.status === 'requires_payment_method' ? 'failed' : 'pending',
            };
        }
        catch (error) {
            this.logger.error(`Error retrieving Stripe payment: ${error.message}`);
            throw error;
        }
    }
};
exports.StripeAdapter = StripeAdapter;
exports.StripeAdapter = StripeAdapter = StripeAdapter_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StripeAdapter);
//# sourceMappingURL=stripe.adapter.js.map