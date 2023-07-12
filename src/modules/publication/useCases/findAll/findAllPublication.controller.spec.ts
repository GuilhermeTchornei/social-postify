import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPublicationController } from './findAllPublication.controller';
import { FindAllPublicationService } from './findAllPublication.service';

describe('PublicationController', () => {
  let controller: FindAllPublicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllPublicationController],
      providers: [FindAllPublicationService],
    }).compile();

    controller = module.get<FindAllPublicationController>(FindAllPublicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
