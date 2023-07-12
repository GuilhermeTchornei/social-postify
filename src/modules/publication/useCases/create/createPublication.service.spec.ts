import { Test, TestingModule } from '@nestjs/testing';
import { CreatePublicationService } from './createPublication.service';

describe('PublicationService', () => {
  let service: CreatePublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePublicationService],
    }).compile();

    service = module.get<CreatePublicationService>(CreatePublicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
