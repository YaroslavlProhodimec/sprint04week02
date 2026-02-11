import { ResendEmailError } from "./ResendEmailError";
export declare class EmailAlreadyConfirmedError extends ResendEmailError {
    message: string;
    field: string;
    constructor();
    getResult(): void;
}
