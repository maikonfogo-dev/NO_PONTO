import { PrismaService } from '../prisma/prisma.service';
export declare class ContractsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContractDto: any): import(".prisma/client").Prisma.Prisma__ContractClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        code: string | null;
        startDate: Date;
        endDate: Date | null;
        active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(clientId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        client: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            address: string | null;
            cnpj: string;
            tradeName: string | null;
            stateRegistration: string | null;
            financialContact: string | null;
            operationalContact: string | null;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        code: string | null;
        startDate: Date;
        endDate: Date | null;
        active: boolean;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ContractClient<{
        client: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            address: string | null;
            cnpj: string;
            tradeName: string | null;
            stateRegistration: string | null;
            financialContact: string | null;
            operationalContact: string | null;
        };
        employees: {
            function: string | null;
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            cpf: string;
            matricula: string | null;
            position: string;
            contractType: string;
            admissionDate: Date;
            status: string;
            photoUrl: string | null;
            rg: string | null;
            birthDate: Date | null;
            phone: string | null;
            address: string | null;
            department: string | null;
            requirePhoto: boolean;
            requireGPS: boolean;
            allowManualEntry: boolean;
            userId: string | null;
            contractId: string | null;
            workLocationId: string | null;
            scheduleId: string | null;
            supervisorId: string | null;
        }[];
        workLocations: {
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
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        code: string | null;
        startDate: Date;
        endDate: Date | null;
        active: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getWorkLocations(contractId: string): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    update(id: string, updateContractDto: any): import(".prisma/client").Prisma.Prisma__ContractClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        code: string | null;
        startDate: Date;
        endDate: Date | null;
        active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ContractClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        code: string | null;
        startDate: Date;
        endDate: Date | null;
        active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
