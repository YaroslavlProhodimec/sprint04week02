import { Model } from 'mongoose';
import { UserDocument } from '../schemas/user.schema';
interface SortData {
    sortDirection?: 'asc' | 'desc';
    sortBy?: string;
    pageSize?: number;
    pageNumber?: number;
    searchLoginTerm?: string;
    searchEmailTerm?: string;
}
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAllUsers(sortData: SortData): Promise<{
        pagesCount: number;
        page: number;
        pageSize: number;
        totalCount: number;
        items: {
            id: any;
            login: string;
            email: string;
            createdAt: Date;
        }[];
    }>;
    createUser(login: string, email: string, password: string): Promise<any>;
    deleteUser(id: string): Promise<boolean>;
    getLoginByUserId(userId: string): Promise<string | null>;
    findById(id: string): Promise<UserDocument | null>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findByLogin(login: string): Promise<UserDocument | null>;
    findByConfirmationCode(code: string): Promise<UserDocument | null>;
    findByRecoveryCode(recoveryCode: string): Promise<UserDocument | null>;
    createForRegistration(login: string, email: string, passwordHash: string, confirmationCode: string, expirationDate: Date): Promise<UserDocument>;
    confirmUser(userId: any): Promise<UserDocument | null>;
    updateConfirmationCode(userId: string, confirmationCode: string, expirationDate: Date): Promise<boolean>;
    setRecoveryCode(userId: string, recoveryCode: string, expirationDate: Date): Promise<boolean>;
    setNewPassword(userId: string, passwordHash: string): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
export {};
