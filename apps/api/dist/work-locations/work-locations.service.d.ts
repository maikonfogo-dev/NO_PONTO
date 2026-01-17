import { PrismaService } from '../prisma/prisma.service';
export declare class WorkLocationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import(".prisma/client").Prisma.Prisma__WorkLocationClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string | null;
        address: string;
        contractId: string;
        latitude: number;
        longitude: number;
        radius: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(contractId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        contract: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            code: string | null;
            startDate: Date;
            endDate: Date | null;
            active: boolean;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string | null;
        address: string;
        contractId: string;
        latitude: number;
        longitude: number;
        radius: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__WorkLocationClient<{
        contract: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            code: string | null;
            startDate: Date;
            endDate: Date | null;
            active: boolean;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string | null;
        address: string;
        contractId: string;
        latitude: number;
        longitude: number;
        radius: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
