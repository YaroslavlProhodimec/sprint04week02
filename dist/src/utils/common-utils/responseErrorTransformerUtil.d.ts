import { Request } from "express";
import { TFieldError } from "../../dto/common/ErrorResponseModel";
export declare const responseErrorTransformerFunction: (request: Request) => TFieldError[];
