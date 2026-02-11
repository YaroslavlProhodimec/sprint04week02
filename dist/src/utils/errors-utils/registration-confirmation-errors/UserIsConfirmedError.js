"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIsConfirmedError = void 0;
const RegistrationConfirmationError_1 = require("./RegistrationConfirmationError");
class UserIsConfirmedError extends RegistrationConfirmationError_1.RegistrationConfirmationError {
    message;
    field;
    constructor() {
        super();
        this.message = "User was already confirmed";
        this.field = super.getField;
    }
    getResult() {
        return super.getErrorObject(this.message, this.field);
    }
}
exports.UserIsConfirmedError = UserIsConfirmedError;
//# sourceMappingURL=UserIsConfirmedError.js.map