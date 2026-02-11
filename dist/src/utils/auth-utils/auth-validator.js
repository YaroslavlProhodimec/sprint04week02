"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidator = void 0;
const code_validator_1 = require("../../validators/code-validator");
exports.authValidator = [
    (0, code_validator_1.stringInputValidatorCommon)("loginOrEmail"),
    (0, code_validator_1.stringInputValidatorCommon)("password"),
];
//# sourceMappingURL=auth-validator.js.map