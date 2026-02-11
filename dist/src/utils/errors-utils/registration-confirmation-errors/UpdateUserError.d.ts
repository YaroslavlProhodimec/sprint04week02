import { RegistrationConfirmationError } from "./RegistrationConfirmationError";
export declare class UpdateUserError extends RegistrationConfirmationError {
    message: string;
    field: string;
    constructor(field: string);
    getResult(): {
        message: string;
        field: string;
    };
}
