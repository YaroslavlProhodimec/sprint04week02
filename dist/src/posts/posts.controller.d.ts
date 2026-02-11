import { CreatePostDto, UpdatePostDto } from '../types/post/input';
import { OutputPostType } from '../types/post/output';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(query: any): Promise<{
        pagesCount: number;
        page: any;
        pageSize: any;
        totalCount: number;
        items: {
            id: any;
            title: any;
            shortDescription: any;
            content: any;
            blogId: any;
            blogName: any;
            createdAt: string;
            extendedLikesInfo: {
                likesCount: number;
                dislikesCount: number;
                myStatus: "Like" | "Dislike" | "None";
                newestLikes: {
                    addedAt: string;
                    userId: string;
                    login: string;
                }[];
            };
        }[];
    }>;
    getPost(id: string): Promise<OutputPostType>;
    createPost(createPostDto: CreatePostDto): Promise<OutputPostType>;
    updatePost(id: string, updatePostDto: UpdatePostDto): Promise<void>;
    deletePost(id: string): Promise<void>;
}
