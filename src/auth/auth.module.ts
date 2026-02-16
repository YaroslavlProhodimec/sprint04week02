import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BasicAuthGuard } from './guards/basic-auth.guard';
import { UsersModule } from '../users/users.module';
import { EmailModule } from '../common/email/email.module';

@Module({
  imports: [UsersModule, EmailModule],
  controllers: [AuthController],
  providers: [AuthService, BasicAuthGuard],
  exports: [AuthService, BasicAuthGuard],
})
export class AuthModule {}
