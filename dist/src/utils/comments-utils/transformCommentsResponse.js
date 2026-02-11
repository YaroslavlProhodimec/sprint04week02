"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCommentsResponse = void 0;
const transformCommentsResponse = (newComment) => {
    return {
        id: newComment._id.toString(),
        content: newComment.content,
        createdAt: newComment.createdAt,
        commentatorInfo: newComment.commentatorInfo,
    };
};
exports.transformCommentsResponse = transformCommentsResponse;
//# sourceMappingURL=transformCommentsResponse.js.map