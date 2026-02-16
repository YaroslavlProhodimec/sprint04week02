import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-basic';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy, 'basic') {
  constructor() {
    super((username: string, password: string, done: (err: Error | null, user?: boolean) => void) => {
      const validUser = process.env.BASIC_AUTH_USER || 'admin';
      const validPass = process.env.BASIC_AUTH_PASS || 'qwerty';
      if (username === validUser && password === validPass) {
        return done(null, true);
      }
      return done(null, false);
    });
  }
}
