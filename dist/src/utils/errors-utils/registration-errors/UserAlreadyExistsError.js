"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsError = void 0;
const CommonErrorResponse_1 = require("../CommonErrorResponse");
class UserAlreadyExistsError extends CommonErrorResponse_1.CommonErrorResponse {
    message;
    field;
    constructor(field, message) {
        super();
        this.field = field;
        this.message = message;
    }
    getResult() {
        return super.getErrorObject(this.message, this.field);
    }
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
//# sourceMappingURL=UserAlreadyExistsError.js.map