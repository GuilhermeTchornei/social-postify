import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from '../../dto/create-publication.dto';
import PublicationRepositorySignature from '../../repository/signature.repository';

@Injectable()
export class CreatePublicationService {
  constructor(private readonly publicationRepository: PublicationRepositorySignature) { };

  async create(createPublicationDto: CreatePublicationDto, userId: number) {
    await this.publicationRepository.createPublication(createPublicationDto, userId);
  }
}
