import { CommonErrorResponse } from "../CommonErrorResponse";
export declare class ResendEmailError extends CommonErrorResponse {
    field: string;
    constructor();
    get getField(): string;
}
