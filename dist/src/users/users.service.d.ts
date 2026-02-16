import { UsersRepository } from './users.repository';
import type { UserDocument } from '../schemas/user.schema';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getAllUsers(sortData: any): Promise<{
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
    findById(userId: string): Promise<UserDocument | null>;
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
    checkCredentials(loginOrEmail: string, password: string): Promise<UserDocument | null>;
}
