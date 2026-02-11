"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidation = exports.blogNameValidation = exports.blogIdValidation = exports.contentValidation = exports.shortDescriptionValidation = exports.titleValidation = exports.idValidation = void 0;
const express_validator_1 = require("express-validator");
const input_model_validation_1 = require("../middlewares/input-model-validation/input-model-validation");
const blog_repository_1 = require("../repositories/blog-repository");
exports.idValidation = (0, express_validator_1.body)('id')
    .optional()
    .isString().trim()
    .withMessage('Incorrect id');
exports.titleValidation = (0, express_validator_1.body)('title').exists().isString().trim().isLength({
    min: 1,
    max: 30
}).withMessage('Incorrect title');
exports.shortDescriptionValidation = (0, express_validator_1.body)('shortDescription').exists()
    .isString().trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Incorrect URL shortDescription');
exports.contentValidation = (0, express_validator_1.body)('content')
    .exists()
    .isString().trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage('Incorrect URL content');
exports.blogIdValidation = (0, express_validator_1.body)('blogId')
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .custom(async (value) => {
    const blog = await blog_repository_1.BlogRepository.getBlogById(value);
    if (!blog) {
        throw new Error('Blog is not exists');
    }
    return true;
})
    .withMessage('Incorrect URL blogId');
exports.blogNameValidation = (0, express_validator_1.body)('blogName')
    .optional()
    .isString().trim()
    .withMessage('Incorrect URL blogName');
const postValidation = () => [
    exports.idValidation,
    exports.titleValidation,
    exports.shortDescriptionValidation,
    exports.contentValidation,
    exports.blogIdValidation,
    exports.blogNameValidation,
    input_model_validation_1.inputModelValidation
];
exports.postValidation = postValidation;
//# sourceMappingURL=post-validator.js.map