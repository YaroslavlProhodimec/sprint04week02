"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectConfirmationCodeError = void 0;
const RegistrationConfirmationError_1 = require("./RegistrationConfirmationError");
class IncorrectConfirmationCodeError extends RegistrationConfirmationError_1.RegistrationConfirmationError {
    message;
    field;
    constructor() {
        super();
        this.message = "Confirmation code is incorrect or user has already been confirmed";
        this.field = super.getField;
    }
    getResult() {
        return super.getErrorObject(this.message, this.field);
    }
}
exports.IncorrectConfirmationCodeError = IncorrectConfirmationCodeError;
//# sourceMappingURL=IncorrectConfirmationCodeError.js.map