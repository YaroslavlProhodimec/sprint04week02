"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const express_validator_1 = require("express-validator");
const input_model_validation_1 = require("../middlewares/input-model-validation/input-model-validation");
const loginValidation = (0, express_validator_1.body)('login')
    .isString()
    .trim()
    .isLength({ min: 3, max: 10 })
    .withMessage('Invalid login')
    .matches(/^[a-zA-Z0-9_-]*$/)
    .withMessage('Invalid login');
const passwordValidation = (0, express_validator_1.body)('password')
    .isString()
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage('Invalid password');
const emailValidation = (0, express_validator_1.body)('email')
    .isString()
    .trim()
    .withMessage('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .withMessage('Invalid email');
const userValidation = () => [loginValidation, passwordValidation, emailValidation, input_model_validation_1.inputModelValidation];
exports.userValidation = userValidation;
//# sourceMappingURL=users-validator.js.map