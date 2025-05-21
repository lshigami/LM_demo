import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OllamaService } from './ollama.service';
import { GenerateRequestDto } from 'src/lm-studio/generate-request.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('ollama')
@Controller('ollama')
export class OllamaController {
  constructor(private readonly ollamaService: OllamaService) {}

  @Post('/generate')
  async generateText(@Body() generateRequest: GenerateRequestDto) {
    const { prompt, model, stream } = generateRequest;
    return this.ollamaService.generateText(prompt, model, stream);
  }
}
