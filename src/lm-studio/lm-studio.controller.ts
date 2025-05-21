import { Controller, Post, Body } from '@nestjs/common';
import { LmStudioService } from './lm-studio.service';
import { GenerateRequestDto } from './generate-request.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('lm-studio')
@Controller('lm-studio')
export class LmStudioController {
  constructor(private readonly lmStudioService: LmStudioService) {}

  @Post('/generate')
  async generateText(@Body() generateRequest: GenerateRequestDto) {
    const { prompt, model } = generateRequest;
    return this.lmStudioService.generateText(prompt, model);
  }
}
