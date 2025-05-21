import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class OllamaService {
  private readonly baseUrl = 'https://api.distl.space/api';

  constructor(private readonly httpService: HttpService) {}

  async generateText(
    prompt: string,
    model?: string,
    stream?: boolean,
  ): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/generate`, {
          model: model || 'qwen:4b',
          prompt,
          stream: stream || false,
        }),
      );

      return response.data.response || '';
    } catch (error) {
      console.error('Error calling Ollama API:', error);
      throw new Error('Failed to generate text');
    }
  }
}
