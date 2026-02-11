export declare class JwtService {
    createJWT(payload: any, secret: string, expiresIn: number): Promise<string>;
    verifyJWT(token: string, secret: string): Promise<any>;
}
export declare const jwtService: JwtService;
