import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  @IsOptional()
  matricula?: string;

  @IsString()
  @IsOptional()
  position?: string;

  @IsString()
  @IsOptional()
  contractType?: string;

  @IsDateString()
  @IsOptional()
  admissionDate?: string;

  @IsString()
  contractId: string;

  @IsString()
  @IsOptional()
  scheduleId?: string;

  @IsString()
  @IsOptional()
  workLocationId?: string;

  // New Fields
  @IsString()
  @IsOptional()
  rg?: string;

  @IsDateString()
  @IsOptional()
  birthDate?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  personalEmail?: string;

  @IsString()
  @IsOptional()
  department?: string;

  @IsString()
  @IsOptional()
  function?: string;

  @IsOptional()
  requirePhoto?: boolean;

  @IsOptional()
  requireGPS?: boolean;

  @IsOptional()
  allowManualEntry?: boolean;
}
