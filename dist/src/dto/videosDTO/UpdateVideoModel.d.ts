import { TCreateVideoInputModel } from "./CreateVideoModel";
export type TUpdatePartialFields = {
    canBeDownloaded: boolean;
    minAgeRestriction: number | null;
    publicationDate: string;
};
export type TUpdateVideoInputModel = TCreateVideoInputModel & Partial<TUpdatePartialFields>;
