"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const blogs_repository_1 = require("./blogs.repository");
const posts_repository_1 = require("../posts/posts.repository");
let BlogsService = class BlogsService {
    blogsRepository;
    postsRepository;
    constructor(blogsRepository, postsRepository) {
        this.blogsRepository = blogsRepository;
        this.postsRepository = postsRepository;
    }
    async getAllBlogs(sortData) {
        return this.blogsRepository.getBlogs(sortData);
    }
    async getBlogById(id) {
        return this.blogsRepository.getBlogById(id);
    }
    async createBlog(createBlogDto) {
        return this.blogsRepository.createBlog(createBlogDto);
    }
    async updateBlog(id, updateBlogDto) {
        return this.blogsRepository.updateBlog(id, updateBlogDto);
    }
    async deleteBlog(id) {
        return this.blogsRepository.deleteBlog(id);
    }
    async getPostsByBlogId(blogId, sortData, userId) {
        return this.blogsRepository.getPostsByBlogId(blogId, sortData, userId);
    }
    async createPostForBlog(blogId, postData) {
        return this.postsRepository.createPostForBlog(blogId, postData);
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => posts_repository_1.PostsRepository))),
    __metadata("design:paramtypes", [blogs_repository_1.BlogsRepository,
        posts_repository_1.PostsRepository])
], BlogsService);
//# sourceMappingURL=blog.service.js.map