import { TFieldError } from "../../dto/common/ErrorResponseModel";
export declare const creationDate: () => string;
export declare const publicationVideoDate: () => string;
export declare const dateISOPattern: RegExp;
export declare const dateValidator: (publicationDate: string) => TFieldError[];
