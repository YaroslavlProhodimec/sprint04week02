"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsValidation = exports.titleValidation = void 0;
const express_validator_1 = require("express-validator");
const input_model_validation_1 = require("../middlewares/input-model-validation/input-model-validation");
exports.titleValidation = (0, express_validator_1.body)('content')
    .isString()
    .trim()
    .isLength({
    min: 20,
    max: 300
}).withMessage('Incorrect xaxa content');
const commentsValidation = () => [
    exports.titleValidation,
    input_model_validation_1.inputModelValidation
];
exports.commentsValidation = commentsValidation;
//# sourceMappingURL=comments-validator.js.map