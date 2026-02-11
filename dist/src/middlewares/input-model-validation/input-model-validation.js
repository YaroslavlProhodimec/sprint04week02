"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputModelValidation = void 0;
const express_validator_1 = require("express-validator");
const inputModelValidation = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => ({
            message: error.msg,
            field: error.path || error.param || 'unknown'
        }));
        return res.status(400).json({
            errorsMessages: errorMessages
        });
    }
    next();
};
exports.inputModelValidation = inputModelValidation;
//# sourceMappingURL=input-model-validation.js.map