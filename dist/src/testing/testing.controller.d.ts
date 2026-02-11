import { Model } from 'mongoose';
import { BlogDocument } from '../schemas/blog.schema';
import { PostDocument } from '../schemas/post.schema';
import { UserDocument } from '../schemas/user.schema';
import { PostLikeDocument } from '../schemas/postLike.schema';
export declare class TestingController {
    private blogModel;
    private postModel;
    private userModel;
    private postLikeModel;
    constructor(blogModel: Model<BlogDocument>, postModel: Model<PostDocument>, userModel: Model<UserDocument>, postLikeModel: Model<PostLikeDocument>);
    deleteAllData(): Promise<void>;
}
