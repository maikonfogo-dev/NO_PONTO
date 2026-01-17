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
        status: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        name: string;
        tradeName: string | null;
        address: string | null;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    findAll(params?: {
        search?: string;
        status?: string;
        plan?: string;
        inadimplente?: string;
        clientId?: string;
    }): Promise<{
        activeEmployees: number;
        subscription: {
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            planId: string | null;
            plan: string;
            price: import("@prisma/client/runtime/library").Decimal;
            quantity: number;
            billingCycle: string;
            startDate: Date;
            endDate: Date | null;
        };
        _count: {
            contracts: number;
            users: number;
            workLocations: number;
        };
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        name: string;
        tradeName: string | null;
        address: string | null;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }[]>;
    findOne(id: string): Promise<{
        contracts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            name: string;
            startDate: Date;
            endDate: Date | null;
            code: string | null;
            active: boolean;
        }[];
        users: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string | null;
            name: string;
            email: string;
            password: string;
            role: string;
        }[];
        workLocations: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string | null;
            name: string;
            address: string;
            latitude: number;
            longitude: number;
            radius: number;
            contractId: string;
        }[];
        subscription: {
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            planId: string | null;
            plan: string;
            price: import("@prisma/client/runtime/library").Decimal;
            quantity: number;
            billingCycle: string;
            startDate: Date;
            endDate: Date | null;
        };
    } & {
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        name: string;
        tradeName: string | null;
        address: string | null;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    update(id: string, updateClientDto: UpdateClientDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        name: string;
        tradeName: string | null;
        address: string | null;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    remove(id: string, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        name: string;
        tradeName: string | null;
        address: string | null;
        stateRegistration: string | null;
        financialContact: string | null;
        operationalContact: string | null;
    }>;
    updateStatus(id: string, dto: UpdateClientStatusDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        name: string;
        tradeName: string | null;
        address: string | null;
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
        planId: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        clientId: string | null;
        name: string;
        address: string;
        latitude: number;
        longitude: number;
        radius: number;
        contractId: string;
    }>;
    createUser(id: string, dto: CreateClientUserDto, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string | null;
        name: string;
        email: string;
        password: string;
        role: string;
    }>;
    getAuditLogs(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        entity: string;
        entityId: string | null;
        action: string;
        details: string | null;
        ip: string | null;
        userAgent: string | null;
    }[]>;
    getInvoices(id: string): Promise<{
        id: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        status: string;
        dueDate: Date;
        paidAt: Date | null;
        method: string | null;
        reference: string | null;
        transactionId: string | null;
        url: string | null;
        qrCode: string | null;
        qrCodeBase64: string | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
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
        amount: import("@prisma/client/runtime/library").Decimal;
        status: string;
        dueDate: Date;
        paidAt: Date | null;
        method: string | null;
        reference: string | null;
        transactionId: string | null;
        url: string | null;
        qrCode: string | null;
        qrCodeBase64: string | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
    } | {
        paymentError: any;
        id: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        status: string;
        dueDate: Date;
        paidAt: Date | null;
        method: string | null;
        reference: string | null;
        transactionId: string | null;
        url: string | null;
        qrCode: string | null;
        qrCodeBase64: string | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
    }>;
    getDocuments(id: string): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        clientId: string;
        name: string;
        type: string;
        fileKey: string | null;
    }[]>;
    uploadDocument(id: string, file: Express.Multer.File, type: string, context?: {
        userId?: string;
        ip?: string;
    }): Promise<{
        id: string;
        url: string;
        createdAt: Date;
        clientId: string;
        name: string;
        type: string;
        fileKey: string | null;
    }>;
}
