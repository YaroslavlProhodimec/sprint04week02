"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRecoveryValidation = void 0;
const express_validator_1 = require("express-validator");
const input_model_validation_1 = require("../middlewares/input-model-validation/input-model-validation");
const passwordValidation = (0, express_validator_1.body)('newPassword')
    .isString()
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage('Invalid password');
const passwordRecoveryValidation = () => [passwordValidation, input_model_validation_1.inputModelValidation];
exports.passwordRecoveryValidation = passwordRecoveryValidation;
//# sourceMappingURL=password-recovery.js.map