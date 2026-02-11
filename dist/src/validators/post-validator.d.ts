export declare const idValidation: import("express-validator").ValidationChain;
export declare const titleValidation: import("express-validator").ValidationChain;
export declare const shortDescriptionValidation: import("express-validator").ValidationChain;
export declare const contentValidation: import("express-validator").ValidationChain;
export declare const blogIdValidation: import("express-validator").ValidationChain;
export declare const blogNameValidation: import("express-validator").ValidationChain;
export declare const postValidation: () => (((req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => import("express").Response<any, Record<string, any>> | undefined) | import("express-validator").ValidationChain)[];
