import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LmStudioService {
  private readonly baseUrl = 'http://127.0.0.1:1234/v1';

  constructor(private readonly httpService: HttpService) {}

  async generateText(prompt: string, model: string = 'deepseek-r1-distill-open-7b'): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}/chat/completions`, {
          model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        })
      );

      return response.data.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('Error calling LM Studio API:', error);
      throw new Error('Failed to generate text');
    }
  }

}