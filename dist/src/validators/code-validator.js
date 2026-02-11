"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmationCodeValidator = exports.stringInputValidatorCommon = void 0;
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
const confirmationCodeValidator = () => [(0, exports.stringInputValidatorCommon)("code")];
exports.confirmationCodeValidator = confirmationCodeValidator;
//# sourceMappingURL=code-validator.js.map