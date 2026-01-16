import { PrismaService } from '../prisma/prisma.service';
import { PaymentsService } from '../payments/payments.service';
import { NfeService } from './nfe.service';
export declare class BillingService {
    private prisma;
    private paymentsService;
    private nfeService;
    private readonly logger;
    constructor(prisma: PrismaService, paymentsService: PaymentsService, nfeService: NfeService);
    handleRecurringBilling(): Promise<void>;
    checkOverdueAccounts(): Promise<void>;
    emitNfeForMirrorClosure(mirrorId: string): Promise<void>;
    generateMonthlyInvoice(clientId: string): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date;
        paidAt: Date | null;
        method: string | null;
        reference: string | null;
        transactionId: string | null;
        url: string | null;
        qrCode: string | null;
        qrCodeBase64: string | null;
    }>;
    processInvoicePayment(invoiceId: string, method: string): Promise<import("../payments/interfaces/payment-gateway.interface").PaymentResult>;
    confirmPayment(invoiceId: string, transactionId: string): Promise<void>;
    findInvoiceByTransactionId(transactionId: string): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date;
        paidAt: Date | null;
        method: string | null;
        reference: string | null;
        transactionId: string | null;
        url: string | null;
        qrCode: string | null;
        qrCodeBase64: string | null;
    }>;
    checkAndConfirmPayment(method: string, externalId: string): Promise<void>;
}
