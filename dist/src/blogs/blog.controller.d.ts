import { CreateBlogDto, UpdateBlogDto, SortDataType } from '../types/blog/input';
import { BlogType } from '../types/blog/output';
import { BlogsService } from './blog.service';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    getBlogs(query: SortDataType): Promise<{
        pagesCount: number;
        page: number;
        pageSize: number;
        totalCount: number;
        items: BlogType[];
    }>;
    getBlog(id: string): Promise<BlogType>;
    createBlog(createBlogDto: CreateBlogDto): Promise<BlogType>;
    updateBlog(id: string, updateBlogDto: UpdateBlogDto): Promise<void>;
    deleteBlog(id: string): Promise<void>;
    getBlogPosts(blogId: string, query: any): Promise<any>;
    createPostForBlog(blogId: string, postData: any): Promise<import("../types/post/output").OutputPostType>;
}
