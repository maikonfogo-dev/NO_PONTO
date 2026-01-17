import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private usersService;
    private prisma;
    constructor(usersService: UsersService, prisma: PrismaService);
    signIn(email: string, pass: string): Promise<any>;
}
