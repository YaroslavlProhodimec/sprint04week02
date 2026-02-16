"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const date_fns_1 = require("date-fns");
const uuid_1 = require("uuid");
const email_service_1 = require("../common/email/email.service");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    usersService;
    jwtService;
    emailService;
    constructor(usersService, jwtService, emailService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.emailService = emailService;
    }
    async register(login, email, password) {
        const [existingByEmail, existingByLogin] = await Promise.all([
            this.usersService.findByEmail(email),
            this.usersService.findByLogin(login),
        ]);
        if (existingByLogin || existingByEmail) {
            throw new common_1.BadRequestException({
                errorsMessages: [{ message: 'User with this login or email already exists', field: 'login' }],
            });
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const confirmationCode = (0, uuid_1.v4)();
        const expirationDate = (0, date_fns_1.add)(new Date(), { hours: 3, minutes: 3 });
        const created = await this.usersService.createForRegistration(login, email, passwordHash, confirmationCode, expirationDate);
        try {
            await this.emailService.sendConfirmationEmail(email, confirmationCode);
        }
        catch (e) {
            await this.usersService.deleteById(created._id.toString());
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Registration failed', field: 'email' }] });
        }
    }
    async confirmCode(code) {
        const user = await this.usersService.findByConfirmationCode(code);
        const emailConf = user?.emailConfirmation;
        if (!user || !emailConf || emailConf.confirmationCode !== code) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Incorrect confirmation code', field: 'code' }] });
        }
        if (emailConf.isConfirmed) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'User is already confirmed', field: 'code' }] });
        }
        if (emailConf.expirationDate && new Date(emailConf.expirationDate) < new Date()) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Confirmation code expired', field: 'code' }] });
        }
        const updated = await this.usersService.confirmUser(user._id);
        if (!updated) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Update failed', field: 'code' }] });
        }
    }
    async resendEmail(email) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Wrong email', field: 'email' }] });
        }
        const isConfirmed = user.emailConfirmation?.isConfirmed ?? user.isConfirmed ?? false;
        if (isConfirmed) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Email already confirmed', field: 'email' }] });
        }
        const newCode = (0, uuid_1.v4)();
        const newExpirationDate = (0, date_fns_1.add)(new Date(), { hours: 3, minutes: 3 });
        await this.usersService.updateConfirmationCode(user._id.toString(), newCode, newExpirationDate);
        await this.emailService.sendConfirmationEmail(user.accountData.email, newCode);
    }
    async login(loginOrEmail, password) {
        const user = await this.usersService.checkCredentials(loginOrEmail, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const accessToken = this.jwtService.sign({ userId: user._id.toString() }, { secret: process.env.ACCESS_TOKEN_SECRET || 'access-secret', expiresIn: '60s' });
        return { accessToken };
    }
    async getMe(userId) {
        const user = await this.usersService.findById(userId);
        if (!user)
            return null;
        return {
            email: user.accountData.email,
            login: user.accountData.login,
            userId: user._id.toString(),
        };
    }
    async passwordRecovery(email) {
        const user = await this.usersService.findByEmail(email);
        if (user) {
            const recoveryCode = (0, uuid_1.v4)();
            const expirationDate = (0, date_fns_1.add)(new Date(), { hours: 24 });
            await this.usersService.setRecoveryCode(user._id.toString(), recoveryCode, expirationDate);
            const link = `https://somesite.com/password-recovery?recoveryCode=${recoveryCode}`;
            await this.emailService.sendPasswordRecoveryEmail(email, link);
        }
    }
    async newPassword(recoveryCode, newPassword) {
        const user = await this.usersService.findByRecoveryCode(recoveryCode);
        if (!user) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Recovery code is incorrect', field: 'recoveryCode' }] });
        }
        if (user.recoveryCodeExpiration && new Date(user.recoveryCodeExpiration) < new Date()) {
            throw new common_1.BadRequestException({ errorsMessages: [{ message: 'Recovery code expired', field: 'recoveryCode' }] });
        }
        const passwordHash = await bcrypt.hash(newPassword, 10);
        await this.usersService.setNewPassword(user._id.toString(), passwordHash);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, email_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map