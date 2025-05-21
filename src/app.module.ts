import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LmStudioModule } from './lm-studio/lm-studio.module';

@Module({
  imports: [LmStudioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
