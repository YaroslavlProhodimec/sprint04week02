import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import type { UserDocument } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAllUsers(sortData: any) {
    return this.usersRepository.getAllUsers(sortData);
  }

  async createUser(login: string, email: string, password: string) {
    return this.usersRepository.createUser(login, email, password);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.usersRepository.deleteUser(id);
  }

  // --- Методы для Auth (делегирование в репозиторий) ---

  async findById(userId: string): Promise<UserDocument | null> {
    return this.usersRepository.findById(userId);
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.usersRepository.findByEmail(email);
  }

  async findByLogin(login: string): Promise<UserDocument | null> {
    return this.usersRepository.findByLogin(login);
  }

  async findByConfirmationCode(code: string): Promise<UserDocument | null> {
    return this.usersRepository.findByConfirmationCode(code);
  }

  async findByRecoveryCode(recoveryCode: string): Promise<UserDocument | null> {
    return this.usersRepository.findByRecoveryCode(recoveryCode);
  }

  async createForRegistration(
    login: string,
    email: string,
    password: string,
    confirmationCode: string,
    expirationDate: Date,
  ): Promise<UserDocument> {
    return this.usersRepository.createForRegistration(
      login,
      email,
      password,
      confirmationCode,
      expirationDate,
    );
  }

  async confirmUser(userId: any): Promise<UserDocument | null> {
    return this.usersRepository.confirmUser(userId);
  }

  async updateConfirmationCode(
    userId: string,
    confirmationCode: string,
    expirationDate: Date,
  ): Promise<boolean> {
    return this.usersRepository.updateConfirmationCode(
      userId,
      confirmationCode,
      expirationDate,
    );
  }

  async setRecoveryCode(
    userId: string,
    recoveryCode: string,
    expirationDate: Date,
  ): Promise<boolean> {
    return this.usersRepository.setRecoveryCode(userId, recoveryCode, expirationDate);
  }

  async setNewPassword(userId: string, newPassword: string): Promise<boolean> {
    return this.usersRepository.setNewPassword(userId, newPassword);
  }

  async deleteById(id: string): Promise<boolean> {
    return this.usersRepository.deleteById(id);
  }

  async checkCredentials(
    loginOrEmail: string,
    password: string,
  ): Promise<UserDocument | null> {
    const user = await this.usersRepository.findByLogin(loginOrEmail) ??
      await this.usersRepository.findByEmail(loginOrEmail);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.accountData.passwordHash);
    if (!isValid) return null;

    const isConfirmed = user.emailConfirmation?.isConfirmed ?? user.isConfirmed ?? false;
    if (!isConfirmed) return null;

    return user;
  }
}