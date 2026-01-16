import { IsString, IsDateString, IsOptional } from 'class-validator';

export class TransferEmployeeDto {
  @IsString()
  novo_contrato_id: string;

  @IsDateString()
  data_inicio: string;

  @IsString()
  @IsOptional()
  observacao?: string;
}
