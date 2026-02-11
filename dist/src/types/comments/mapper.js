"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsMapper = void 0;
const commentsMapper = (comment, myStatus = "None", likesCount = 0, dislikesCount = 0) => {
    console.log(comment._id, 'comment._id');
    console.log(comment.id, 'comment.id');
    return {
        id: comment._id ? comment._id.toString() : comment.id?.toString(),
        content: comment.content,
        commentatorInfo: {
            userId: comment.commentatorInfo.userId,
            userLogin: comment.commentatorInfo.userLogin,
        },
        createdAt: comment.createdAt,
        likesInfo: {
            likesCount,
            dislikesCount,
            myStatus
        }
    };
};
exports.commentsMapper = commentsMapper;
//# sourceMappingURL=mapper.js.map