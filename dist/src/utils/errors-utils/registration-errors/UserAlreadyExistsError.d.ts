import { CommonErrorResponse } from "../CommonErrorResponse";
export declare class UserAlreadyExistsError extends CommonErrorResponse {
    message: string;
    field: string;
    constructor(field: string, message: string);
    getResult(): {
        message: string;
        field: string;
    };
}
