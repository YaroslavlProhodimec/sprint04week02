"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersMapper = void 0;
const usersMapper = (user) => {
    return {
        id: user._id.toString(),
        login: user.accountData.login,
        email: user.accountData.email,
        createdAt: user.accountData.createdAt,
    };
};
exports.usersMapper = usersMapper;
//# sourceMappingURL=mapper.js.map