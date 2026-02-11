"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidation = exports.emailValidator = void 0;
const regexes_1 = require("../common-utils/regexes");
const code_validator_1 = require("../../validators/code-validator");
const input_model_validation_1 = require("../../middlewares/input-model-validation/input-model-validation");
const express_validator_1 = require("express-validator");
exports.emailValidator = [
    (0, code_validator_1.stringInputValidatorCommon)("email")
        .matches(regexes_1.userEmailRegex)
        .withMessage(`Email doesn't match this regular expression: ${regexes_1.userEmailRegex}`),
];
const emailVal = (0, express_validator_1.body)('email')
    .isString()
    .trim()
    .withMessage('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .withMessage('Invalid email');
const emailValidation = () => [emailVal, input_model_validation_1.inputModelValidation];
exports.emailValidation = emailValidation;
//# sourceMappingURL=emailValidator.js.map