"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeStatusValidation = exports.likeStatusFieldValidation = void 0;
const express_validator_1 = require("express-validator");
const input_model_validation_1 = require("../middlewares/input-model-validation/input-model-validation");
exports.likeStatusFieldValidation = (0, express_validator_1.body)('likeStatus')
    .isString()
    .custom((value) => ["Like", "Dislike", "None"].includes(value))
    .withMessage("likeStatus must be 'Like', 'Dislike' or 'None'");
const likeStatusValidation = () => [
    exports.likeStatusFieldValidation,
    input_model_validation_1.inputModelValidation
];
exports.likeStatusValidation = likeStatusValidation;
//# sourceMappingURL=like-status.js.map