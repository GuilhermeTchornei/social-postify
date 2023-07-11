import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import TokenPayloadDto from "../dto/tokenPayload.dto";
import UserRepositorySignature from "src/modules/user/repository/signature.repository";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: UserRepositorySignature) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException();

    try {
      const payload: TokenPayloadDto = await this.jwtService.verifyAsync(token);
      const user = await this.userRepository.findUserById(+payload.sub);
      if (user.email !== payload.email) throw new UnauthorizedException();

      request['user'] = user;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}