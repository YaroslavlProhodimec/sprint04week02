import { BlogsRepository } from '../blogs/blogs.repository';
export declare function setBlogsRepository(instance: BlogsRepository): void;
export declare const BlogRepository: {
    getBlogById: (id: string) => Promise<import("../types/blog/output").BlogType | null>;
};
