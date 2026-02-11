import { RegistrationConfirmationError } from "./RegistrationConfirmationError";
export declare class UserIsConfirmedError extends RegistrationConfirmationError {
    message: string;
    field: string;
    constructor();
    getResult(): {
        message: string;
        field: string;
    };
}
