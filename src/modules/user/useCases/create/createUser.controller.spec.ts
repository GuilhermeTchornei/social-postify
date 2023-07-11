import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserController } from './createUser.controller';
import { CreateUserService } from './createUser.service';

describe('UserController', () => {
  let controller: CreateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [CreateUserService],
    }).compile();

    controller = module.get<CreateUserController>(CreateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
