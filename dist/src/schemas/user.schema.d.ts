import { Document } from 'mongoose';
export type UserDocument = User & Document;
declare class AccountData {
    passwordSalt: string;
    passwordHash: string;
    login: string;
    email: string;
    createdAt: Date;
}
declare class EmailConfirmation {
    confirmationCode: string | null;
    isConfirmed: boolean;
    expirationDate: Date | null;
}
export declare class User {
    accountData: AccountData;
    emailConfirmation: EmailConfirmation;
    recoveryCode: string | null;
    recoveryCodeExpiration: Date | null;
    isConfirmed: boolean;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export {};
