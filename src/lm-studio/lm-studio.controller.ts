import { Controller, Post, Body } from '@nestjs/common';
import { LmStudioService } from './lm-studio.service';
import { GenerateRequestDto } from './generate-request.dto';

@Controller('generate')
export class LmStudioController {
  constructor(private readonly lmStudioService: LmStudioService) {}

  @Post()
  async generateText(@Body() generateRequest: GenerateRequestDto) {
    const { prompt, model } = generateRequest;
    return this.lmStudioService.generateText(prompt, model);
  }
}