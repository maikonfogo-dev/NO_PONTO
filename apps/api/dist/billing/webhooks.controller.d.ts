import { BillingService } from './billing.service';
export declare class WebhooksController {
    private billingService;
    private readonly logger;
    constructor(billingService: BillingService);
    handleStripe(body: any): Promise<{
        received: boolean;
    }>;
    handleMercadoPago(body: any, query: any): Promise<{
        status: string;
    }>;
}
