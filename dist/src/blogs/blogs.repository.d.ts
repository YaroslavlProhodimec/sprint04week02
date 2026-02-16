import { Model } from 'mongoose';
import { BlogDocument } from '../schemas/blog.schema';
import { CreateBlogDto, UpdateBlogDto, SortDataType } from '../types/blog/input';
import { BlogType } from '../types/blog/output';
import { PostsRepository } from '../posts/posts.repository';
export declare class BlogsRepository {
    private blogModel;
    private postsRepository;
    constructor(blogModel: Model<BlogDocument>, postsRepository: PostsRepository);
    getBlogs(sortData?: SortDataType): Promise<{
        pagesCount: number;
        page: number;
        pageSize: number;
        totalCount: number;
        items: BlogType[];
    }>;
    getBlogById(id: string): Promise<BlogType | null>;
    createBlog(createBlogDto: CreateBlogDto): Promise<BlogType>;
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
}
