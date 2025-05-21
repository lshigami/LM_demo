import { IsString, IsOptional } from 'class-validator';

export class GenerateRequestDto {
  @IsString()
  prompt: string;

  @IsString()
  @IsOptional()
  model?: string;
}