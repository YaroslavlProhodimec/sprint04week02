"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlreadyConfirmedError = void 0;
const ResendEmailError_1 = require("./ResendEmailError");
class EmailAlreadyConfirmedError extends ResendEmailError_1.ResendEmailError {
    message;
    field;
    constructor() {
        super();
        this.message =
            "Email is already confirmed";
        this.field = super.getField;
    }
    getResult() {
        super.getErrorObject(this.message, this.field);
    }
}
exports.EmailAlreadyConfirmedError = EmailAlreadyConfirmedError;
//# sourceMappingURL=EmailAlreadyConfirmedError.js.map