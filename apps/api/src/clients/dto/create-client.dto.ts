export class CreateClientDto {
  // Step 1: Company Data
  name: string; // Razão Social
  tradeName?: string; // Nome Fantasia
  cnpj: string;
  address?: string;
  stateRegistration?: string;
  financialContact?: string;
  operationalContact?: string;

  // Step 2: Plan
  plan: string;
  price: number;
  quantity: number;
  billingCycle: string;
  
  // Step 3: Units (Optional array)
  units?: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    radius: number;
  }[];

  // Step 4: Admin User
  adminUser: {
    name: string;
    email: string;
  };
}
