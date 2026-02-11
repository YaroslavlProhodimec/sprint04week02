import { OnModuleInit } from '@nestjs/common';
import { BlogsRepository } from './blogs/blogs.repository';
export declare class AppModule implements OnModuleInit {
    private blogsRepository;
    constructor(blogsRepository: BlogsRepository);
    onModuleInit(): void;
}
