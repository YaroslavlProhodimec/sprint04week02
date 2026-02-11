"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentValidator = void 0;
const validatorForStrings_1 = require("../common-utils/validatorForStrings");
exports.commentValidator = [
    (0, validatorForStrings_1.stringsInputValidatorWithLength)("content", 300, 20),
];
//# sourceMappingURL=commentValidator.js.map