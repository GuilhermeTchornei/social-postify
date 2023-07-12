import { Module } from '@nestjs/common';
import { CreatePublicationService } from './useCases/create/createPublication.service';
import PublicationRepositorySignature from './repository/signature.repository';
import PublicationRepository from './repository/implementation.repository';
import { FindAllPublicationController } from './useCases/findAll/findAllPublication.controller';
import { CreatePublicationController } from './useCases/create/createPublication.controller';
import { FindAllPublicationService } from './useCases/findAll/findAllPublication.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [
    CreatePublicationController,
    FindAllPublicationController
  ],
  providers: [
    CreatePublicationService,
    FindAllPublicationService,
    {
      provide: PublicationRepositorySignature,
      useClass: PublicationRepository,
    },
  ]
})
export class PublicationModule {}
