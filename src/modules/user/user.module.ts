import { Module } from '@nestjs/common';
import { CreateUserController } from './useCases/create/createUser.controller';
import { CreateUserService } from './useCases/create/createUser.service';
import UserRepositorySignature from './repository/signature.repository';
import { UserRepository } from './repository/implementation.repository';

@Module({
  controllers: [
    CreateUserController
  ],
  providers: [
    CreateUserService,
    {
      provide: UserRepositorySignature,
      useClass: UserRepository,
    }
  ]
})
export class UserModule {}
