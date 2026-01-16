import { ContractsService } from './contracts.service';
export declare class ContractsController {
    private readonly contractsService;
    constructor(contractsService: ContractsService);
    create(createContractDto: any): import(".prisma/client").Prisma.Prisma__ContractClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        startDate: Date;
        endDate: Date | null;
        code: string | null;
        active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(clientId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        client: {
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
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        startDate: Date;
        endDate: Date | null;
        code: string | null;
        active: boolean;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ContractClient<{
        employees: {
            function: string | null;
            id: string;
            name: string;
            cpf: string;
            matricula: string | null;
            position: string;
            contractType: string;
            admissionDate: Date;
            status: string;
            userId: string | null;
            contractId: string | null;
            workLocationId: string | null;
            scheduleId: string | null;
            supervisorId: string | null;
            photoUrl: string | null;
            rg: string | null;
            birthDate: Date | null;
            phone: string | null;
            email: string | null;
            address: string | null;
            department: string | null;
            requirePhoto: boolean;
            requireGPS: boolean;
            allowManualEntry: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        client: {
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
        };
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
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        startDate: Date;
        endDate: Date | null;
        code: string | null;
        active: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getWorkLocations(id: string): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    update(id: string, updateContractDto: any): import(".prisma/client").Prisma.Prisma__ContractClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        startDate: Date;
        endDate: Date | null;
        code: string | null;
        active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ContractClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        startDate: Date;
        endDate: Date | null;
        code: string | null;
        active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
