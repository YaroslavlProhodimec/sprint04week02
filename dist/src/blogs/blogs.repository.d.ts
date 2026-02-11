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
    findBlogForPost(blogId: string): Promise<BlogType | null>;
    getPostsByBlogId(blogId: string, sortData: any, userId?: string): Promise<any>;
    createPostForBlog(blogId: string, postData: any): Promise<any>;
}
