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
}
export {};
