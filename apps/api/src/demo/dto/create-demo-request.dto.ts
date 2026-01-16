import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateDemoRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  employees: string;

  @IsString()
  @IsNotEmpty()
  captchaToken: string;
}
