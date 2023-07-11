import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import UserRepositorySignature from '../../repository/signature.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepositorySignature) { };

  async create(user: CreateUserDto) {
    const userExists = await this.userRepository.findUserByEmail(user.email);
    if (userExists) throw new ConflictException("Email já cadastrado");

    const hashPassword = await bcrypt.hash(user.password, 10)
    await this.userRepository.createUser({ ...user, password: hashPassword });
  }
}
