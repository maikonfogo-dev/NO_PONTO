import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService implements OnModuleInit {
    private prisma;
    constructor(prisma: PrismaService);
    onModuleInit(): Promise<void>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        password: string;
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string | null;
    }>;
}
