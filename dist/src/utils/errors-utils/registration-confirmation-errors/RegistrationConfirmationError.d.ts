import { CommonErrorResponse } from "../CommonErrorResponse";
export declare class RegistrationConfirmationError extends CommonErrorResponse {
    field: string;
    constructor();
    get getField(): string;
}
