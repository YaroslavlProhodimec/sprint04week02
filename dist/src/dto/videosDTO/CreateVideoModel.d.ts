import { TResolutionsArray } from "./ResolutionsVideoModel";
import { TUpdateVideoInputModel } from "./UpdateVideoModel";
export type RequiredVideoBodyProperties = {
    title: string;
    author: string;
};
export type TCreateVideoInputModel = Required<RequiredVideoBodyProperties> & {
    availableResolutions: TResolutionsArray;
};
export type TVideo = TUpdateVideoInputModel & {
    id: number;
    createdAt: string;
};
