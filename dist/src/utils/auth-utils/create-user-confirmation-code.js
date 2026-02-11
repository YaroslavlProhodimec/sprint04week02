"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfirmationCode = void 0;
const crypto_1 = __importDefault(require("crypto"));
const createConfirmationCode = () => {
    return crypto_1.default.randomUUID();
};
exports.createConfirmationCode = createConfirmationCode;
//# sourceMappingURL=create-user-confirmation-code.js.map