import { UsersRepository } from './users.repository';
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
}
