import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { jwtService } from '../../application/jwt-service';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access-secret';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException();
    }

    const token = authHeader.slice(7);
    const payload = await jwtService.getJwtPayloadResult(
      token,
      ACCESS_TOKEN_SECRET,
    );

    if (!payload?.userId) {
      throw new UnauthorizedException();
    }

    request.user = { userId: payload.userId };
    return true;
  }
}
