"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHandler = paginationHandler;
function paginationHandler(pageNumber, pageSize) {
    const skip = ((pageNumber || 1) - 1) * (pageSize || 10);
    return skip;
}
//# sourceMappingURL=paginationHandler.js.map