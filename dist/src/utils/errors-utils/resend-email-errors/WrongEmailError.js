"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongEmailError = void 0;
const ResendEmailError_1 = require("./ResendEmailError");
class WrongEmailError extends ResendEmailError_1.ResendEmailError {
    message;
    field;
    constructor() {
        super();
        this.message = "User with such email doesn't exist";
        this.field = super.getField;
    }
    getResult() {
        super.getErrorObject(this.message, this.field);
    }
}
exports.WrongEmailError = WrongEmailError;
//# sourceMappingURL=WrongEmailError.js.map