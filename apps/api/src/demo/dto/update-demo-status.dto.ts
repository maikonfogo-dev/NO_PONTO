import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class UpdateDemoStatusDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['PENDENTE', 'CONTATADO', 'CONVERTIDO'])
  status: string;
}
