"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlEmailPasswordRecoveryLetter = exports.htmlEmailConfirmationCodeLetter = void 0;
const htmlEmailConfirmationCodeLetter = (code) => {
    return `
<h1>Thank for your registration</h1>
<p>To finish registration please follow the link below:
    <a href='https://google.com?code=${code}'>complete registration</a>
</p>
`;
};
exports.htmlEmailConfirmationCodeLetter = htmlEmailConfirmationCodeLetter;
const htmlEmailPasswordRecoveryLetter = (recoveryLink) => {
    return `
<h1>Password recovery</h1>
<p>To finish password recovery please follow the link below:
    <a href='${recoveryLink}'>recovery password</a>
</p>
`;
};
exports.htmlEmailPasswordRecoveryLetter = htmlEmailPasswordRecoveryLetter;
//# sourceMappingURL=html-email.js.map