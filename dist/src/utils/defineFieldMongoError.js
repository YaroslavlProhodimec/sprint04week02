"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineFieldMongoError = void 0;
const defineFieldMongoError = (error) => {
    let result;
    if (error.includes("email")) {
        result = "email";
    }
    else {
        result = "login";
    }
    return result;
};
exports.defineFieldMongoError = defineFieldMongoError;
//# sourceMappingURL=defineFieldMongoError.js.map