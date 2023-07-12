import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPublicationService } from './findAllPublication.service';

describe('PublicationService', () => {
  let service: FindAllPublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllPublicationService],
    }).compile();

    service = module.get<FindAllPublicationService>(FindAllPublicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
