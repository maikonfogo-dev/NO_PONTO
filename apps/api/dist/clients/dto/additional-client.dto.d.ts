export declare class UpdateClientStatusDto {
    status: string;
}
export declare class UpdateClientPlanDto {
    plan: string;
    price?: number;
    quantity: number;
}
export declare class CreateUnitDto {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    radius: number;
}
export declare class CreateClientUserDto {
    name: string;
    email: string;
    role?: string;
}
