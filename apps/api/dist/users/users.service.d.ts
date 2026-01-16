import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UsersService implements OnModuleInit {
    private prisma;
    constructor(prisma: PrismaService);
    onModuleInit(): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}
