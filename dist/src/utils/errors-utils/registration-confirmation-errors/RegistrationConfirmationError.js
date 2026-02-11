"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationConfirmationError = void 0;
const CommonErrorResponse_1 = require("../CommonErrorResponse");
class RegistrationConfirmationError extends CommonErrorResponse_1.CommonErrorResponse {
    field;
    constructor() {
        super();
        this.field = "code";
    }
    get getField() {
        return this.field;
    }
}
exports.RegistrationConfirmationError = RegistrationConfirmationError;
//# sourceMappingURL=RegistrationConfirmationError.js.map