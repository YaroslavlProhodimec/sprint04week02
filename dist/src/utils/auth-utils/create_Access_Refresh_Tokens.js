"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_access_refresh_tokens = void 0;
const jwt_service_1 = require("../../application/jwt-service");
const create_access_refresh_tokens = async (userId, deviceId) => {
    const accessToken = await jwt_service_1.jwtService.createJWT({ userId }, process.env.ACCESS_TOKEN_SECRET, 60);
    const refreshToken = await jwt_service_1.jwtService.createJWT({ userId, deviceId }, process.env.REFRESH_TOKEN_SECRET, 20);
    return {
        accessToken,
        refreshToken,
    };
};
exports.create_access_refresh_tokens = create_access_refresh_tokens;
//# sourceMappingURL=create_Access_Refresh_Tokens.js.map