import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LmStudioService } from './lm-studio.service';
import { LmStudioController } from './lm-studio.controller';

@Module({
  imports: [HttpModule],
  providers: [LmStudioService],
  controllers: [LmStudioController],
  exports: [LmStudioService],
})
export class LmStudioModule {}