"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserInfo = void 0;
const getCurrentUserInfo = (user) => {
    return {
        email: user.accountData.email,
        login: user.accountData.login,
        userId: user._id.toString(),
    };
};
exports.getCurrentUserInfo = getCurrentUserInfo;
//# sourceMappingURL=getCurrentUserInfo.js.map