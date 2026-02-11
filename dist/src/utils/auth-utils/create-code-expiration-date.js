"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCodeExpirationDate = createCodeExpirationDate;
function createCodeExpirationDate(hours = 24) {
    return new Date(Date.now() + hours * 60 * 60 * 1000);
}
//# sourceMappingURL=create-code-expiration-date.js.map