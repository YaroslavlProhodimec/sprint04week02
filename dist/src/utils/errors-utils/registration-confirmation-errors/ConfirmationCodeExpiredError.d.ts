import { RegistrationConfirmationError } from "./RegistrationConfirmationError";
export declare class ConfirmationCodeExpiredError extends RegistrationConfirmationError {
    message: string;
    field: string;
    constructor();
    getResult(): {
        message: string;
        field: string;
    };
}
