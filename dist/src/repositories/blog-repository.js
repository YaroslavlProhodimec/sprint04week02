"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepository = void 0;
exports.setBlogsRepository = setBlogsRepository;
let blogsRepositoryInstance = null;
function setBlogsRepository(instance) {
    blogsRepositoryInstance = instance;
}
exports.BlogRepository = {
    getBlogById: async (id) => {
        if (!blogsRepositoryInstance) {
            throw new Error('BlogsRepository not initialized. Make sure to call setBlogsRepository first.');
        }
        return blogsRepositoryInstance.getBlogById(id);
    }
};
//# sourceMappingURL=blog-repository.js.map