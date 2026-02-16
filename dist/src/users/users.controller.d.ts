import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(query: any): Promise<{
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
    createUser(dto: CreateUserDto): Promise<any>;
    deleteUser(id: string): Promise<void>;
}
