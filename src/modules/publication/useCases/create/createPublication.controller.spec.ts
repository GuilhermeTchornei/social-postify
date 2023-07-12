import { Test, TestingModule } from '@nestjs/testing';
import { CreatePublicationController } from './createPublication.controller';
import { CreatePublicationService } from './createPublication.service';

describe('PublicationController', () => {
  let controller: CreatePublicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatePublicationController],
      providers: [CreatePublicationService],
    }).compile();

    controller = module.get<CreatePublicationController>(CreatePublicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
