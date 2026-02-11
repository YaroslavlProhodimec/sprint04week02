import { WithId } from "mongodb";
import { UserDBType } from "../../dto/usersDTO/usersDTO";
export declare const getCurrentUserInfo: (user: WithId<UserDBType>) => {
    email: string;
    login: string;
    userId: string;
};
