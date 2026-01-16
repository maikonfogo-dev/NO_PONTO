export declare class CreateClientDto {
    name: string;
    tradeName?: string;
    cnpj: string;
    address?: string;
    stateRegistration?: string;
    financialContact?: string;
    operationalContact?: string;
    plan: string;
    price: number;
    quantity: number;
    billingCycle: string;
    units?: {
        name: string;
        address: string;
        latitude: number;
        longitude: number;
        radius: number;
    }[];
    adminUser: {
        name: string;
        email: string;
    };
}
