import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('signin')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() auth: AuthDto) {
    return await this.authService.signIn(auth);
  }
}
