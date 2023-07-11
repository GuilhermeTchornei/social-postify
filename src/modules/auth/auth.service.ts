import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import TokenPayloadDto from './dto/tokenPayload.dto';
import { JwtService } from '@nestjs/jwt';
import UserRepositorySignature from '../user/repository/signature.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepositorySignature,
    private readonly jwtService: JwtService
  ) { }

  async signIn({ email, password }: AuthDto) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) throw new UnauthorizedException("Email/Senha incorretos");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException("Email/Senha incorretos");

    const payload: TokenPayloadDto = {
      email: user.email,
      username: user.name,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, { expiresIn: '1 day', subject: String(user.id)}),
    }
  }
}
