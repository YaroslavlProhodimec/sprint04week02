import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../common/email/email.service';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private emailService;
    constructor(usersService: UsersService, jwtService: JwtService, emailService: EmailService);
    register(login: string, email: string, password: string): Promise<void>;
    confirmCode(code: string): Promise<void>;
    resendEmail(email: string): Promise<void>;
    login(loginOrEmail: string, password: string): Promise<{
        accessToken: string;
    }>;
    getMe(userId: string): Promise<{
        email: string;
        login: string;
        userId: any;
    } | null>;
    passwordRecovery(email: string): Promise<void>;
    newPassword(recoveryCode: string, newPassword: string): Promise<void>;
}
