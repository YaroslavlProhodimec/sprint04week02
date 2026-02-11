export declare const idParamsValidation: import("express-validator").ValidationChain;
export declare const nameValidation: import("express-validator").ValidationChain;
export declare const descriptionValidation: import("express-validator").ValidationChain;
export declare const websiteUrlValidation: import("express-validator").ValidationChain;
export declare const blogPostValidation: () => (((req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => import("express").Response<any, Record<string, any>> | undefined) | import("express-validator").ValidationChain)[];
