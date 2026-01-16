import { ConfigService } from '@nestjs/config';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateUnitDto, CreateClientUserDto, UpdateClientStatusDto, UpdateClientPlanDto } from './dto/additional-client.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BillingService } from '../billing/billing.service';
export declare class ClientsService {
    private prisma;
    private configService;
    private billingService;
    private s3Client;
    private bucketName;
    constructor(prisma: PrismaService, configService: ConfigService, billingService: BillingService);
    private logAudit;
    create(createClientDto: CreateClientDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        name: string;
        status: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tradeName: string | null;
        cnpj: string;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    findAll(params?: {
        search?: string;
        status?: string;
        plan?: string;
        inadimplente?: string;
    }): Promise<{
        activeEmployees: number;
        _count: {
            contracts: number;
            users: number;
            workLocations: number;
        };
        subscription: {
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            plan: string;
            price: import("@prisma/client/runtime/library").Decimal;
            quantity: number;
            billingCycle: string;
            startDate: Date;
            endDate: Date | null;
        };
        id: string;
        name: string;
        status: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tradeName: string | null;
        cnpj: string;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }[]>;
    findOne(id: string): Promise<{
        contracts: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            startDate: Date;
            endDate: Date | null;
            code: string | null;
            active: boolean;
        }[];
        users: {
            id: string;
            name: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            password: string;
            role: string;
            clientId: string | null;
        }[];
        workLocations: {
            id: string;
            name: string;
            contractId: string;
            address: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            clientId: string | null;
            radius: number;
        }[];
        subscription: {
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            plan: string;
            price: import("@prisma/client/runtime/library").Decimal;
            quantity: number;
            billingCycle: string;
            startDate: Date;
            endDate: Date | null;
        };
    } & {
        id: string;
        name: string;
        status: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tradeName: string | null;
        cnpj: string;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    update(id: string, updateClientDto: UpdateClientDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        name: string;
        status: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tradeName: string | null;
        cnpj: string;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    remove(id: string, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        name: string;
        status: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tradeName: string | null;
        cnpj: string;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    updateStatus(id: string, dto: UpdateClientStatusDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        name: string;
        status: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tradeName: string | null;
        cnpj: string;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    updatePlan(id: string, dto: UpdateClientPlanDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        plan: string;
        price: import("@prisma/client/runtime/library").Decimal;
        quantity: number;
        billingCycle: string;
        startDate: Date;
        endDate: Date | null;
    }>;
    getUsage(id: string): Promise<{
        activeEmployees: number;
        limitEmployees: number;
        usagePercent: number;
        totalRecords: number;
        units: number;
        users: number;
    }>;
    createUnit(id: string, dto: CreateUnitDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        name: string;
        contractId: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        clientId: string | null;
        radius: number;
    }>;
    createUser(id: string, dto: CreateClientUserDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        password: string;
        role: string;
        clientId: string | null;
    }>;
    getAuditLogs(id: string): Promise<{
        id: string;
        userId: string | null;
        createdAt: Date;
        ip: string | null;
        entity: string;
        entityId: string | null;
        action: string;
        details: string | null;
        userAgent: string | null;
    }[]>;
    getInvoices(id: string): Promise<{
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
    }[]>;
    createInvoice(id: string, dto: {
        amount: number;
        method: string;
        reference: string;
    }, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        paymentInfo: import("../payments/interfaces/payment-gateway.interface").PaymentResult;
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
    } | {
        paymentError: any;
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
    getDocuments(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        clientId: string;
        url: string;
        fileKey: string | null;
    }[]>;
    uploadDocument(id: string, file: Express.Multer.File, type: string, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        clientId: string;
        url: string;
        fileKey: string | null;
    }>;
}
