import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEmail } from 'class-validator';

export class UpdateClientStatusDto {
  @IsString()
  @IsNotEmpty()
  status: string; // ATIVO, SUSPENSO, INADIMPLENTE
}

export class UpdateClientPlanDto {
  @IsString()
  @IsNotEmpty()
  plan: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

export class CreateUnitDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsNumber()
  @IsOptional()
  radius: number;
}

export class CreateClientUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  role?: string; // GESTOR_CLIENTE default
}
