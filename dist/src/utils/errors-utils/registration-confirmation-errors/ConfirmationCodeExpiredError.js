"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationCodeExpiredError = void 0;
const RegistrationConfirmationError_1 = require("./RegistrationConfirmationError");
class ConfirmationCodeExpiredError extends RegistrationConfirmationError_1.RegistrationConfirmationError {
    message;
    field;
    constructor() {
        super();
        this.message = "Confirmation code is expired";
        this.field = super.getField;
    }
    getResult() {
        return super.getErrorObject(this.message, this.field);
    }
}
exports.ConfirmationCodeExpiredError = ConfirmationCodeExpiredError;
//# sourceMappingURL=ConfirmationCodeExpiredError.js.map