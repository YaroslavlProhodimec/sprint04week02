import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

const VALID_USER = process.env.BASIC_AUTH_USER || 'admin';
const VALID_PASS = process.env.BASIC_AUTH_PASS || 'qwerty';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      throw new UnauthorizedException();
    }

    try {
      const base64 = authHeader.slice(6);
      const decoded = Buffer.from(base64, 'base64').toString('utf-8');
      const [username, password] = decoded.split(':');

      if (username === VALID_USER && password === VALID_PASS) {
        return true;
      }
    } catch {
      // ignore parse errors
    }

    throw new UnauthorizedException();
  }
}
