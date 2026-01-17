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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const prisma_service_1 = require("../prisma/prisma.service");
const billing_service_1 = require("../billing/billing.service");
const bcrypt = require("bcrypt");
const date_fns_1 = require("date-fns");
let ClientsService = class ClientsService {
    constructor(prisma, configService, billingService) {
        this.prisma = prisma;
        this.configService = configService;
        this.billingService = billingService;
        this.bucketName = this.configService.get('AWS_BUCKET_NAME') || 'noponto-docs';
        this.s3Client = new client_s3_1.S3Client({
            region: this.configService.get('AWS_REGION') || 'us-east-1',
            credentials: {
                accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID') || 'minioadmin',
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY') || 'minioadmin',
            },
            endpoint: this.configService.get('AWS_ENDPOINT'),
            forcePathStyle: true,
        });
    }
    async logAudit(action, entity, entityId, context, details) {
        try {
            await this.prisma.auditLog.create({
                data: {
                    action,
                    entity,
                    entityId,
                    userId: context === null || context === void 0 ? void 0 : context.userId,
                    ip: context === null || context === void 0 ? void 0 : context.ip,
                    details
                }
            });
        }
        catch (e) {
            console.error('Failed to create audit log', e);
        }
    }
    async create(createClientDto, context) {
        const existingClient = await this.prisma.client.findUnique({
            where: { cnpj: createClientDto.cnpj },
        });
        if (existingClient) {
            throw new common_1.ConflictException('CNPJ já cadastrado');
        }
        const defaultPassword = await bcrypt.hash('mudar123', 10);
        const client = await this.prisma.$transaction(async (tx) => {
            const client = await tx.client.create({
                data: {
                    name: createClientDto.name,
                    tradeName: createClientDto.tradeName,
                    cnpj: createClientDto.cnpj,
                    address: createClientDto.address,
                    stateRegistration: createClientDto.stateRegistration,
                    financialContact: createClientDto.financialContact,
                    operationalContact: createClientDto.operationalContact,
                    status: 'ATIVO',
                },
            });
            await tx.saaSContract.create({
                data: {
                    clientId: client.id,
                    plan: createClientDto.plan,
                    price: createClientDto.price,
                    quantity: createClientDto.quantity,
                    billingCycle: createClientDto.billingCycle,
                    startDate: new Date(),
                    status: 'ATIVO',
                },
            });
            if (createClientDto.units && createClientDto.units.length > 0) {
                const defaultContract = await tx.contract.create({
                    data: {
                        name: 'Contrato Geral',
                        clientId: client.id,
                        startDate: new Date(),
                        active: true,
                    }
                });
                await tx.workLocation.createMany({
                    data: createClientDto.units.map(unit => (Object.assign(Object.assign({}, unit), { clientId: client.id, contractId: defaultContract.id }))),
                });
            }
            await tx.user.create({
                data: {
                    name: createClientDto.adminUser.name,
                    email: createClientDto.adminUser.email,
                    password: defaultPassword,
                    role: 'GESTOR_CLIENTE',
                    clientId: client.id,
                },
            });
            return client;
        });
        await this.logAudit('CRIACAO', 'CLIENTE', client.id, context, `Cliente ${client.name} criado`);
        return client;
    }
    async findAll(params) {
        const where = {};
        if (params === null || params === void 0 ? void 0 : params.search) {
            where.OR = [
                { name: { contains: params.search } },
                { tradeName: { contains: params.search } },
                { cnpj: { contains: params.search } },
            ];
        }
        if ((params === null || params === void 0 ? void 0 : params.status) && params.status !== 'TODOS') {
            where.status = params.status;
        }
        if (params === null || params === void 0 ? void 0 : params.plan) {
            where.subscription = {
                plan: params.plan
            };
        }
        if ((params === null || params === void 0 ? void 0 : params.inadimplente) === 'true') {
            where.status = 'INADIMPLENTE';
        }
        if (params === null || params === void 0 ? void 0 : params.clientId) {
            where.id = params.clientId;
        }
        const clients = await this.prisma.client.findMany({
            where,
            include: {
                subscription: true,
                _count: {
                    select: { contracts: true, workLocations: true, users: true }
                }
            },
            orderBy: { createdAt: 'desc' },
        });
        return Promise.all(clients.map(async (client) => {
            const activeEmployees = await this.prisma.employee.count({
                where: {
                    contract: { clientId: client.id },
                    status: 'ATIVO'
                }
            });
            return Object.assign(Object.assign({}, client), { activeEmployees });
        }));
    }
    async findOne(id) {
        const client = await this.prisma.client.findUnique({
            where: { id },
            include: {
                subscription: true,
                contracts: true,
                workLocations: true,
                users: true,
            },
        });
        if (!client)
            throw new common_1.NotFoundException('Cliente não encontrado');
        return client;
    }
    async update(id, updateClientDto, context) {
        const client = await this.prisma.client.update({
            where: { id },
            data: updateClientDto,
        });
        await this.logAudit('ATUALIZACAO', 'CLIENTE', id, context, 'Dados cadastrais atualizados');
        return client;
    }
    async remove(id, context) {
        const client = await this.prisma.client.delete({
            where: { id },
        });
        await this.logAudit('EXCLUSAO', 'CLIENTE', id, context);
        return client;
    }
    async updateStatus(id, dto, context) {
        const client = await this.prisma.client.update({
            where: { id },
            data: { status: dto.status },
        });
        await this.logAudit('ALTERACAO_STATUS', 'CLIENTE', id, context, `Status alterado para ${dto.status}`);
        return client;
    }
    async updatePlan(id, dto, context) {
        const sub = await this.prisma.saaSContract.upsert({
            where: { clientId: id },
            create: {
                clientId: id,
                plan: dto.plan,
                price: dto.price || 0,
                quantity: dto.quantity,
                billingCycle: 'MENSAL',
                startDate: new Date(),
                status: 'ATIVO'
            },
            update: {
                plan: dto.plan,
                price: dto.price,
                quantity: dto.quantity
            }
        });
        await this.logAudit('ALTERACAO_PLANO', 'CLIENTE', id, context, `Plano alterado para ${dto.plan} (${dto.quantity} vidas)`);
        return sub;
    }
    async getUsage(id) {
        const now = new Date();
        const start = (0, date_fns_1.startOfMonth)(now);
        const end = (0, date_fns_1.endOfMonth)(now);
        const [activeEmployees, totalRecords, units, users] = await Promise.all([
            this.prisma.employee.count({
                where: {
                    contract: { clientId: id },
                    status: 'ATIVO'
                }
            }),
            this.prisma.timeRecord.count({
                where: {
                    employee: { contract: { clientId: id } },
                    timestamp: { gte: start, lte: end }
                }
            }),
            this.prisma.workLocation.count({ where: { clientId: id } }),
            this.prisma.user.count({ where: { clientId: id } })
        ]);
        const subscription = await this.prisma.saaSContract.findUnique({ where: { clientId: id } });
        const limit = (subscription === null || subscription === void 0 ? void 0 : subscription.quantity) || 0;
        return {
            activeEmployees,
            limitEmployees: limit,
            usagePercent: limit > 0 ? (activeEmployees / limit) * 100 : 0,
            totalRecords,
            units,
            users
        };
    }
    async createUnit(id, dto, context) {
        let contract = await this.prisma.contract.findFirst({
            where: { clientId: id, active: true }
        });
        if (!contract) {
            contract = await this.prisma.contract.create({
                data: {
                    name: 'Contrato Geral',
                    clientId: id,
                    startDate: new Date(),
                    active: true
                }
            });
        }
        const unit = await this.prisma.workLocation.create({
            data: Object.assign(Object.assign({}, dto), { clientId: id, contractId: contract.id })
        });
        await this.logAudit('CRIACAO_UNIDADE', 'CLIENTE', id, context, `Unidade ${unit.name} criada`);
        return unit;
    }
    async createUser(id, dto, context) {
        const defaultPassword = await bcrypt.hash('mudar123', 10);
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: defaultPassword,
                role: dto.role || 'GESTOR_CLIENTE',
                clientId: id
            }
        });
        await this.logAudit('CRIACAO_USUARIO', 'CLIENTE', id, context, `Usuário ${user.email} criado`);
        return user;
    }
    async getAuditLogs(id) {
        return this.prisma.auditLog.findMany({
            where: {
                OR: [
                    { entityId: id },
                    { details: { contains: id } }
                ]
            },
            orderBy: { createdAt: 'desc' },
            take: 50
        });
    }
    async getInvoices(id) {
        return this.prisma.invoice.findMany({
            where: { clientId: id },
            orderBy: { createdAt: 'desc' }
        });
    }
    async createInvoice(id, dto, context) {
        const invoice = await this.prisma.invoice.create({
            data: {
                clientId: id,
                amount: dto.amount,
                method: dto.method,
                status: 'PENDENTE',
                dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
                reference: dto.reference
            }
        });
        try {
            const paymentResult = await this.billingService.processInvoicePayment(invoice.id, dto.method);
            await this.logAudit('CRIACAO_FATURA', 'CLIENTE', id, context, `Fatura ${invoice.reference} gerada e processada via ${dto.method}`);
            return Object.assign(Object.assign({}, invoice), { paymentInfo: paymentResult });
        }
        catch (error) {
            console.error('Payment processing failed', error);
            return Object.assign(Object.assign({}, invoice), { paymentError: error.message });
        }
    }
    async getDocuments(id) {
        return this.prisma.clientDocument.findMany({
            where: { clientId: id },
            orderBy: { createdAt: 'desc' }
        });
    }
    async uploadDocument(id, file, type, context) {
        const fileKey = `clients/${id}/${Date.now()}_${file.originalname}`;
        try {
            await this.s3Client.send(new client_s3_1.PutObjectCommand({
                Bucket: this.bucketName,
                Key: fileKey,
                Body: file.buffer,
                ContentType: file.mimetype,
            }));
        }
        catch (error) {
            console.error('S3 Upload Error:', error);
            throw new Error('Falha no upload do arquivo para o storage');
        }
        const endpoint = this.configService.get('AWS_ENDPOINT');
        let url = '';
        if (endpoint && endpoint.includes('localhost')) {
            url = `${endpoint}/${this.bucketName}/${fileKey}`;
        }
        else {
            url = `https://${this.bucketName}.s3.${this.configService.get('AWS_REGION')}.amazonaws.com/${fileKey}`;
        }
        const doc = await this.prisma.clientDocument.create({
            data: {
                clientId: id,
                name: file.originalname,
                type: type,
                url: url,
                fileKey: fileKey
            }
        });
        await this.logAudit('UPLOAD_DOCUMENTO', 'CLIENTE', id, context, `Documento ${file.originalname} enviado`);
        return doc;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService,
        billing_service_1.BillingService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map