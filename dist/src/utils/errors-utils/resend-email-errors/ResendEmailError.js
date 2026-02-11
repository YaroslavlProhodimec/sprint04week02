"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendEmailError = void 0;
const CommonErrorResponse_1 = require("../CommonErrorResponse");
class ResendEmailError extends CommonErrorResponse_1.CommonErrorResponse {
    field;
    constructor() {
        super();
        this.field = "email";
    }
    get getField() {
        return this.field;
    }
}
exports.ResendEmailError = ResendEmailError;
//# sourceMappingURL=ResendEmailError.js.map