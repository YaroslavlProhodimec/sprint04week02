import { ResendEmailError } from "./ResendEmailError";
export declare class WrongEmailError extends ResendEmailError {
    message: string;
    field: string;
    constructor();
    getResult(): void;
}
