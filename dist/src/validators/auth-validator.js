"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLoginValidation = void 0;
const express_validator_1 = require("express-validator");
const input_model_validation_1 = require("../middlewares/input-model-validation/input-model-validation");
const loginOrEmailValidation = (0, express_validator_1.body)('loginOrEmail')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Invalid loginOrEmail');
const passwordValidation = (0, express_validator_1.body)('password')
    .isString()
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage('Invalid password');
const authLoginValidation = () => [loginOrEmailValidation, passwordValidation, input_model_validation_1.inputModelValidation];
exports.authLoginValidation = authLoginValidation;
//# sourceMappingURL=auth-validator.js.map