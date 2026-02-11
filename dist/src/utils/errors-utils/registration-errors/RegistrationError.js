"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationError = void 0;
const CommonErrorResponse_1 = require("../CommonErrorResponse");
class RegistrationError extends CommonErrorResponse_1.CommonErrorResponse {
    message;
    field;
    constructor() {
        super();
        this.message =
            "Something went wrong with registration/ User was not created";
        this.field = "registration";
    }
    getResult() {
        super.getErrorObject(this.message, this.field);
    }
}
exports.RegistrationError = RegistrationError;
//# sourceMappingURL=RegistrationError.js.map