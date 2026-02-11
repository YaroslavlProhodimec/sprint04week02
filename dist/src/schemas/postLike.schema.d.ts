import { Document } from 'mongoose';
export type PostLikeDocument = PostLike & Document;
export declare class PostLike {
    postId: string;
    userId: string;
    likeStatus: 'Like' | 'Dislike';
    addedAt: Date;
}
export declare const PostLikeSchema: import("mongoose").Schema<PostLike, import("mongoose").Model<PostLike, any, any, any, Document<unknown, any, PostLike, any> & PostLike & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PostLike, Document<unknown, {}, import("mongoose").FlatRecord<PostLike>, {}> & import("mongoose").FlatRecord<PostLike> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
