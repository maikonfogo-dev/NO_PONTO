import { PrismaService } from '../prisma/prisma.service';
export declare class WorkLocationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import(".prisma/client").Prisma.Prisma__WorkLocationClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(contractId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        contract: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            startDate: Date;
            endDate: Date | null;
            code: string | null;
            active: boolean;
        };
    } & {
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
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__WorkLocationClient<{
        contract: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            startDate: Date;
            endDate: Date | null;
            code: string | null;
            active: boolean;
        };
    } & {
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
