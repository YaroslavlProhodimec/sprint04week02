export declare const create_access_refresh_tokens: (userId: string, deviceId?: string) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
