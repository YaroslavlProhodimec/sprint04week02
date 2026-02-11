"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonErrorResponse = void 0;
class CommonErrorResponse {
    constructor() { }
    getErrorObject(message, field) {
        return {
            message,
            field,
        };
    }
}
exports.CommonErrorResponse = CommonErrorResponse;
//# sourceMappingURL=CommonErrorResponse.js.map