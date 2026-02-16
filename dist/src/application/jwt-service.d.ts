import { JwtPayloadResult } from '../dto/common/jwt/JwtPayloadResult';
type JwtPayload = {
    userId: string;
    deviceId?: string;
};
export declare const jwtService: {
    createJWT(payload: JwtPayload, secret: string, expiresIn: number): Promise<string>;
    getJwtPayloadResult(token: string, secret: string): Promise<JwtPayloadResult | null>;
};
export {};
