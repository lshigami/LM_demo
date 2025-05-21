import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GenerateRequestDto {
  @ApiProperty({
    description: 'The prompt text to generate a response for',
    example: 'What is the capital of France?',
  })
  @IsString()
  prompt: string;

  @ApiProperty({
    description: 'The model to use for generation',
    example: 'qwen:4b',
    required: false,
  })
  @IsString()
  @IsOptional()
  model?: string;

  @ApiProperty({
    description: 'Whether to stream the response',
    example: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  stream?: boolean;
}
