import { Document } from 'mongoose';
export type UserDocument = User & Document;
declare class AccountData {
    passwordSalt: string;
    passwordHash: string;
    login: string;
    email: string;
    createdAt: Date;
}
export declare class User {
    accountData: AccountData;
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
