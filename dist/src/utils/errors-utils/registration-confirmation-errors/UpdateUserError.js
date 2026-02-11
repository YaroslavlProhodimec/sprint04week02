"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserError = void 0;
const RegistrationConfirmationError_1 = require("./RegistrationConfirmationError");
class UpdateUserError extends RegistrationConfirmationError_1.RegistrationConfirmationError {
    message;
    field;
    constructor(field) {
        super();
        this.message = "Something went wrong with update operation";
        this.field = field;
    }
    getResult() {
        return super.getErrorObject(this.message, this.field);
    }
}
exports.UpdateUserError = UpdateUserError;
//# sourceMappingURL=UpdateUserError.js.map