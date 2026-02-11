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
exports.BlogsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const blog_schema_1 = require("../schemas/blog.schema");
const uuid_1 = require("uuid");
const posts_repository_1 = require("../posts/posts.repository");
function toBlogType(blogObj) {
    return {
        id: blogObj.id ?? blogObj._id?.toString?.() ?? '',
        name: blogObj.name,
        description: blogObj.description,
        websiteUrl: blogObj.websiteUrl,
        createdAt: blogObj.createdAt instanceof Date
            ? blogObj.createdAt.toISOString()
            : blogObj.createdAt,
        isMembership: Boolean(blogObj.isMembership),
    };
}
let BlogsRepository = class BlogsRepository {
    blogModel;
    postsRepository;
    constructor(blogModel, postsRepository) {
        this.blogModel = blogModel;
        this.postsRepository = postsRepository;
    }
    async getBlogs(sortData = {}) {
        const { searchNameTerm, sortBy = 'createdAt', sortDirection = 'desc', pageNumber = 1, pageSize = 10 } = sortData;
        const filter = searchNameTerm
            ? { name: { $regex: searchNameTerm, $options: 'i' } }
            : {};
        const blogs = await this.blogModel
            .find(filter, { _id: 0 })
            .sort({ [sortBy]: sortDirection === 'desc' ? -1 : 1 })
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize)
            .exec();
        const totalCount = await this.blogModel.countDocuments(filter);
        const pagesCount = Math.ceil(totalCount / pageSize);
        return {
            pagesCount,
            page: pageNumber,
            pageSize,
            totalCount,
            items: blogs.map((blog) => toBlogType(blog.toObject({ versionKey: false }))),
        };
    }
    async getBlogById(id) {
        const blog = await this.blogModel
            .findOne({ id }, { _id: 0 })
            .exec();
        if (!blog)
            return null;
        const blogObj = blog.toObject({ versionKey: false });
        return toBlogType(blogObj);
    }
    async createBlog(createBlogDto) {
        const blogData = {
            id: (0, uuid_1.v4)(),
            ...createBlogDto,
            createdAt: new Date().toISOString(),
            isMembership: false
        };
        const newBlog = new this.blogModel(blogData);
        await newBlog.save();
        const blogObj = newBlog.toObject({ versionKey: false });
        return toBlogType(blogObj);
    }
    async updateBlog(id, updateBlogDto) {
        const result = await this.blogModel
            .updateOne({ id }, updateBlogDto)
            .exec();
        return result.matchedCount === 1;
    }
    async deleteBlog(id) {
        const result = await this.blogModel
            .deleteOne({ id })
            .exec();
        return result.deletedCount === 1;
    }
    async findBlogForPost(blogId) {
        return this.getBlogById(blogId);
    }
    async getPostsByBlogId(blogId, sortData, userId) {
        return this.postsRepository.getPostsByBlogId(blogId, sortData, userId);
    }
    async createPostForBlog(blogId, postData) {
        const blog = await this.getBlogById(blogId);
        return {
            id: (0, uuid_1.v4)(),
            ...postData,
            blogId: blogId,
            blogName: blog?.name || '',
            createdAt: new Date().toISOString()
        };
    }
};
exports.BlogsRepository = BlogsRepository;
exports.BlogsRepository = BlogsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_schema_1.Blog.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => posts_repository_1.PostsRepository))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        posts_repository_1.PostsRepository])
], BlogsRepository);
//# sourceMappingURL=blogs.repository.js.map