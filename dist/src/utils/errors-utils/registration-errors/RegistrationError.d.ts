import { CommonErrorResponse } from "../CommonErrorResponse";
export declare class RegistrationError extends CommonErrorResponse {
    message: string;
    field: string;
    constructor();
    getResult(): void;
}
