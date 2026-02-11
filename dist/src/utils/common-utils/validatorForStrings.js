"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsInputValidatorWithLength = exports.stringInputValidatorCommon = void 0;
const express_validator_1 = require("express-validator");
const stringInputValidatorCommon = (field) => {
    return (0, express_validator_1.body)(field)
        .exists()
        .withMessage(`${field} field is required`)
        .isString()
        .trim()
        .withMessage(`${field} should be of type String`)
        .notEmpty()
        .withMessage(`${field} must be included in request body`);
};
exports.stringInputValidatorCommon = stringInputValidatorCommon;
const stringsInputValidatorWithLength = (field, maxLength, minLength) => {
    return (0, exports.stringInputValidatorCommon)(field)
        .isLength({ max: maxLength })
        .withMessage(`${field}'s max length is ${maxLength}`)
        .isLength({ min: minLength })
        .withMessage(`${field}'s min length is ${minLength}`);
};
exports.stringsInputValidatorWithLength = stringsInputValidatorWithLength;
//# sourceMappingURL=validatorForStrings.js.map