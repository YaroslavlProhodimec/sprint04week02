import { ObjectId } from "mongodb";
import { PaginationSortingQueryParams } from "../common/SortPaginatorQueryParamsType";
export type UserInputModel = {
    login: string;
    password: string;
    email: string;
};
export type UserViewModel = {
    id: string;
    login: string;
    email: string;
    createdAt: string;
};
export type UserDBType = {
    _id?: ObjectId;
    accountData: {
        login: string;
        email: string;
        createdAt: string;
        passwordHash: string;
        passwordSalt: string;
    };
    emailConfirmation: {
        isConfirmed: boolean;
        confirmationCode: string | null;
        expirationDate: string | null;
    };
};
export type UsersQueryParams = PaginationSortingQueryParams & {
    searchLoginTerm: string;
    searchEmailTerm: string;
};
