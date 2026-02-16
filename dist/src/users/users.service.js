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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getAllUsers(sortData) {
        return this.usersRepository.getAllUsers(sortData);
    }
    async createUser(login, email, password) {
        return this.usersRepository.createUser(login, email, password);
    }
    async deleteUser(id) {
        return this.usersRepository.deleteUser(id);
    }
    async findById(userId) {
        return this.usersRepository.findById(userId);
    }
    async findByEmail(email) {
        return this.usersRepository.findByEmail(email);
    }
    async findByLogin(login) {
        return this.usersRepository.findByLogin(login);
    }
    async findByConfirmationCode(code) {
        return this.usersRepository.findByConfirmationCode(code);
    }
    async findByRecoveryCode(recoveryCode) {
        return this.usersRepository.findByRecoveryCode(recoveryCode);
    }
    async createForRegistration(login, email, passwordHash, confirmationCode, expirationDate) {
        return this.usersRepository.createForRegistration(login, email, passwordHash, confirmationCode, expirationDate);
    }
    async confirmUser(userId) {
        return this.usersRepository.confirmUser(userId);
    }
    async updateConfirmationCode(userId, confirmationCode, expirationDate) {
        return this.usersRepository.updateConfirmationCode(userId, confirmationCode, expirationDate);
    }
    async setRecoveryCode(userId, recoveryCode, expirationDate) {
        return this.usersRepository.setRecoveryCode(userId, recoveryCode, expirationDate);
    }
    async setNewPassword(userId, passwordHash) {
        return this.usersRepository.setNewPassword(userId, passwordHash);
    }
    async deleteById(id) {
        return this.usersRepository.deleteById(id);
    }
    async checkCredentials(loginOrEmail, password) {
        const user = await this.usersRepository.findByLogin(loginOrEmail) ??
            await this.usersRepository.findByEmail(loginOrEmail);
        if (!user)
            return null;
        const isValid = await bcrypt.compare(password, user.accountData.passwordHash);
        if (!isValid)
            return null;
        const isConfirmed = user.emailConfirmation?.isConfirmed ?? user.isConfirmed ?? false;
        if (!isConfirmed)
            return null;
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map