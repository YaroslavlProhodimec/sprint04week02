import { BlogsRepository } from './blogs.repository';
import { CreateBlogDto, SortDataType, UpdateBlogDto } from '../types/blog/input';
import { PostsRepository } from '../posts/posts.repository';
export declare class BlogsService {
    private readonly blogsRepository;
    private readonly postsRepository;
    constructor(blogsRepository: BlogsRepository, postsRepository: PostsRepository);
    getAllBlogs(sortData: SortDataType): Promise<{
        pagesCount: number;
        page: number;
        pageSize: number;
        totalCount: number;
        items: import("../types/blog/output").BlogType[];
    }>;
    getBlogById(id: string): Promise<import("../types/blog/output").BlogType | null>;
    createBlog(createBlogDto: CreateBlogDto): Promise<import("../types/blog/output").BlogType>;
    updateBlog(id: string, updateBlogDto: UpdateBlogDto): Promise<boolean>;
    deleteBlog(id: string): Promise<boolean>;
    getPostsByBlogId(blogId: string, sortData: any, userId?: string): Promise<{
        pagesCount: number;
        page: number;
        pageSize: number;
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
    createPostForBlog(blogId: string, postData: any): Promise<import("../types/post/output").OutputPostType>;
}
