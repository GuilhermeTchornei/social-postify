import { Injectable } from '@nestjs/common';
import PublicationRepositorySignature from '../../repository/signature.repository';
import { PublicationPayloadDto } from '../../dto/publicationPayload.dto';

@Injectable()
export class FindAllPublicationService {
  constructor(private readonly publicationRepository: PublicationRepositorySignature) { };

  async findAll() {
    const publications = await this.publicationRepository.findAllPublications();

    const publicationPayload: PublicationPayloadDto[] = publications.map(p => ({
      id: p.id,
      image: p.image,
      dateToPublish: p.date_to_publish,
      published: p.published,
      socialMedia: p.social_media,
      text: p.text,
      userId: p.user_id,
      owner: {
        avatar: p.user.avatar,
        name: p.user.name
      }
    }));
    return publicationPayload;
  }
}
