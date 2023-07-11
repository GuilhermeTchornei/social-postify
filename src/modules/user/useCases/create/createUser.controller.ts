import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserService } from './createUser.service';
import { CreateUserDto } from '../../dto/create-user.dto';

@Controller('signup')
export class CreateUserController {
  constructor(private readonly userService: CreateUserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }
}
