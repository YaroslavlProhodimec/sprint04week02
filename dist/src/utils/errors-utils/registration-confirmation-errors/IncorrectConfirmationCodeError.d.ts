import { RegistrationConfirmationError } from "./RegistrationConfirmationError";
export declare class IncorrectConfirmationCodeError extends RegistrationConfirmationError {
    message: string;
    field: string;
    constructor();
    getResult(): {
        message: string;
        field: string;
    };
}
