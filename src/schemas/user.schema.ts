import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

// Класс для вложенных данных
class AccountData {
  @Prop({ required: true })
  passwordSalt: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true, unique: true })
  login: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

// Подтверждение email
class EmailConfirmation {
  @Prop({ type: String, default: null })
  confirmationCode: string | null;

  @Prop({ default: false })
  isConfirmed: boolean;

  @Prop({ type: Date, default: null })
  expirationDate: Date | null;
}

// Основная схема пользователя
@Schema()
export class User {
  @Prop({ type: AccountData, _id: false })
  accountData: AccountData;

  @Prop({ type: EmailConfirmation, _id: false, default: () => ({}) })
  emailConfirmation: EmailConfirmation;

  @Prop({ type: String, default: null })
  recoveryCode: string | null;

  @Prop({ type: Date, default: null })
  recoveryCodeExpiration: Date | null;

  /** @deprecated используйте emailConfirmation.isConfirmed */
  @Prop({ default: false })
  isConfirmed: boolean;
}

// Создаем схему Mongoose
export const UserSchema = SchemaFactory.createForClass(User);

// Можно добавить индексы
UserSchema.index({ 'accountData.email': 1 }, { unique: true });