import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LmStudioModule } from './lm-studio/lm-studio.module';
import { OllamaModule } from './ollama/ollama.module';

@Module({
  imports: [LmStudioModule, OllamaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
