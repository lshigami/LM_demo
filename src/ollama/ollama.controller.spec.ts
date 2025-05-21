import { Test, TestingModule } from '@nestjs/testing';
import { OllamaController } from './ollama.controller';
import { OllamaService } from './ollama.service';

describe('OllamaController', () => {
  let controller: OllamaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OllamaController],
      providers: [OllamaService],
    }).compile();

    controller = module.get<OllamaController>(OllamaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
