import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateUnitDto, CreateClientUserDto, UpdateClientStatusDto, UpdateClientPlanDto } from './dto/additional-client.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BillingService } from '../billing/billing.service';
import * as bcrypt from 'bcrypt';
import { startOfMonth, endOfMonth } from 'date-fns';

@Injectable()
export class ClientsService {
  private s3Client: S3Client;
  private bucketName: string;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    private billingService: BillingService
  ) {
    this.bucketName = this.configService.get('AWS_BUCKET_NAME') || 'noponto-docs';
    
    this.s3Client = new S3Client({
      region: this.configService.get('AWS_REGION') || 'us-east-1',
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID') || 'minioadmin',
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY') || 'minioadmin',
      },
      endpoint: this.configService.get('AWS_ENDPOINT'), // Optional
      forcePathStyle: true, // Needed for MinIO
    });
  }

  private async logAudit(action: string, entity: string, entityId: string, context?: { userId?: string, ip?: string }, details?: string) {
    try {
        await this.prisma.auditLog.create({
            data: {
                action,
                entity,
                entityId,
                userId: context?.userId,
                ip: context?.ip,
                details
            }
        });
    } catch (e) {
        console.error('Failed to create audit log', e);
    }
  }

  async create(createClientDto: CreateClientDto, context?: { userId?: string, ip?: string }) {
    const existingClient = await this.prisma.client.findUnique({
      where: { cnpj: createClientDto.cnpj },
    });

    if (existingClient) {
      throw new ConflictException('CNPJ já cadastrado');
    }

    const defaultPassword = await bcrypt.hash('mudar123', 10);

    const client = await this.prisma.$transaction(async (tx) => {
      // 1. Create Client
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

      // 2. Create Subscription
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

      // 3. Create Units
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
          data: createClientDto.units.map(unit => ({
            ...unit,
            clientId: client.id,
            contractId: defaultContract.id,
          })),
        });
      }

      // 4. Create Admin User
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

  async findAll(params?: { search?: string; status?: string; plan?: string; inadimplente?: string; clientId?: string }) {
    const where: any = {};
    if (params?.search) {
      where.OR = [
        { name: { contains: params.search } },
        { tradeName: { contains: params.search } },
        { cnpj: { contains: params.search } },
      ];
    }
    if (params?.status && params.status !== 'TODOS') {
      where.status = params.status;
    }
    
    // Filter by plan (requires joining with subscription)
    if (params?.plan) {
        where.subscription = {
            plan: params.plan
        };
    }

    // Filter by inadimplente (special status or flag)
    if (params?.inadimplente === 'true') {
        where.status = 'INADIMPLENTE';
    }

    if (params?.clientId) {
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

    // Populate active employees count
    return Promise.all(clients.map(async (client) => {
        const activeEmployees = await this.prisma.employee.count({
            where: {
                contract: { clientId: client.id },
                status: 'ATIVO'
            }
        });
        return { ...client, activeEmployees };
    }));
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({
      where: { id },
      include: {
        subscription: true,
        contracts: true,
        workLocations: true,
        users: true,
      },
    });

    if (!client) throw new NotFoundException('Cliente não encontrado');
    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto, context?: { userId?: string, ip?: string }) {
    const client = await this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });
    await this.logAudit('ATUALIZACAO', 'CLIENTE', id, context, 'Dados cadastrais atualizados');
    return client;
  }

  async remove(id: string, context?: { userId?: string, ip?: string }) {
    // Soft delete or hard delete? Usually hard delete is dangerous.
    // Let's assume hard delete for now as per previous code, but typically we'd just set status to INACTIVE.
    const client = await this.prisma.client.delete({
      where: { id },
    });
    await this.logAudit('EXCLUSAO', 'CLIENTE', id, context);
    return client;
  }

  // --- Specific Endpoints Logic ---

  async updateStatus(id: string, dto: UpdateClientStatusDto, context?: { userId?: string, ip?: string }) {
    const client = await this.prisma.client.update({
      where: { id },
      data: { status: dto.status },
    });
    await this.logAudit('ALTERACAO_STATUS', 'CLIENTE', id, context, `Status alterado para ${dto.status}`);
    return client;
  }

  async updatePlan(id: string, dto: UpdateClientPlanDto, context?: { userId?: string, ip?: string }) {
    // Upsert subscription
    const sub = await this.prisma.saaSContract.upsert({
        where: { clientId: id },
        create: {
            clientId: id,
            plan: dto.plan,
            price: dto.price || 0,
            quantity: dto.quantity,
            billingCycle: 'MENSAL', // Default if not provided
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

  async getUsage(id: string) {
    const now = new Date();
    const start = startOfMonth(now);
    const end = endOfMonth(now);

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
    const limit = subscription?.quantity || 0;

    return {
        activeEmployees,
        limitEmployees: limit,
        usagePercent: limit > 0 ? (activeEmployees / limit) * 100 : 0,
        totalRecords,
        units,
        users
    };
  }

  async createUnit(id: string, dto: CreateUnitDto, context?: { userId?: string, ip?: string }) {
    // Find a default contract or create one if none exists
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
        data: {
            ...dto,
            clientId: id,
            contractId: contract.id
        }
    });

    await this.logAudit('CRIACAO_UNIDADE', 'CLIENTE', id, context, `Unidade ${unit.name} criada`);
    return unit;
  }

  async createUser(id: string, dto: CreateClientUserDto, context?: { userId?: string, ip?: string }) {
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

  async getAuditLogs(id: string) {
    return this.prisma.auditLog.findMany({
        where: { 
            OR: [
                { entityId: id },
                { details: { contains: id } } // Weak correlation, but useful
            ]
        },
        orderBy: { createdAt: 'desc' },
        take: 50
    });
  }

  // --- Billing & Documents ---

  async getInvoices(id: string) {
    return this.prisma.invoice.findMany({
      where: { clientId: id },
      orderBy: { createdAt: 'desc' }
    });
  }

  async createInvoice(id: string, dto: { amount: number; method: string; reference: string }, context?: { userId?: string, ip?: string }) {
    const invoice = await this.prisma.invoice.create({
      data: {
        clientId: id,
        amount: dto.amount,
        method: dto.method,
        status: 'PENDENTE',
        dueDate: new Date(new Date().setDate(new Date().getDate() + 5)), // +5 days
        reference: dto.reference
      }
    });
    
    // Process payment immediately
    try {
        const paymentResult = await this.billingService.processInvoicePayment(invoice.id, dto.method);
        await this.logAudit('CRIACAO_FATURA', 'CLIENTE', id, context, `Fatura ${invoice.reference} gerada e processada via ${dto.method}`);
        return { ...invoice, paymentInfo: paymentResult };
    } catch (error) {
        console.error('Payment processing failed', error);
        // Return invoice created but with error in payment
        return { ...invoice, paymentError: error.message };
    }
  }
  
  async getDocuments(id: string) {
      return this.prisma.clientDocument.findMany({
          where: { clientId: id },
          orderBy: { createdAt: 'desc' }
      });
  }

  async uploadDocument(id: string, file: Express.Multer.File, type: string, context?: { userId?: string, ip?: string }) {
      const fileKey = `clients/${id}/${Date.now()}_${file.originalname}`;
      
      try {
        await this.s3Client.send(new PutObjectCommand({
            Bucket: this.bucketName,
            Key: fileKey,
            Body: file.buffer,
            ContentType: file.mimetype,
            // ACL: 'public-read', // Commented out as some S3 setups block ACLs by default
        }));
      } catch (error) {
        console.error('S3 Upload Error:', error);
        throw new Error('Falha no upload do arquivo para o storage');
      }

      const endpoint = this.configService.get('AWS_ENDPOINT');
      let url = '';
      if (endpoint && endpoint.includes('localhost')) {
          url = `${endpoint}/${this.bucketName}/${fileKey}`;
      } else {
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
}
