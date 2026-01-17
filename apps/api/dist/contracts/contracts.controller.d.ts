import { ContractsService } from './contracts.service';
export declare class ContractsController {
    private readonly contractsService;
    constructor(contractsService: ContractsService);
    create(req: any, createContractDto: any): import(".prisma/client").Prisma.Prisma__ContractClient<{
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
    findAll(req: any, clientId?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    findOne(req: any, id: string): Promise<{
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
    }>;
    getWorkLocations(req: any, id: string): Promise<{
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
    update(req: any, id: string, updateContractDto: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        code: string | null;
        startDate: Date;
        endDate: Date | null;
        active: boolean;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        code: string | null;
        startDate: Date;
        endDate: Date | null;
        active: boolean;
    }>;
}
