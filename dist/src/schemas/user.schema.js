"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class AccountData {
    passwordSalt;
    passwordHash;
    login;
    email;
    createdAt;
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AccountData.prototype, "passwordSalt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AccountData.prototype, "passwordHash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], AccountData.prototype, "login", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], AccountData.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], AccountData.prototype, "createdAt", void 0);
class EmailConfirmation {
    confirmationCode;
    isConfirmed;
    expirationDate;
}
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Object)
], EmailConfirmation.prototype, "confirmationCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], EmailConfirmation.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Object)
], EmailConfirmation.prototype, "expirationDate", void 0);
let User = class User {
    accountData;
    emailConfirmation;
    recoveryCode;
    recoveryCodeExpiration;
    isConfirmed;
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ type: AccountData, _id: false }),
    __metadata("design:type", AccountData)
], User.prototype, "accountData", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: EmailConfirmation, _id: false, default: () => ({}) }),
    __metadata("design:type", EmailConfirmation)
], User.prototype, "emailConfirmation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Object)
], User.prototype, "recoveryCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Object)
], User.prototype, "recoveryCodeExpiration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isConfirmed", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.index({ 'accountData.email': 1 }, { unique: true });
//# sourceMappingURL=user.schema.js.map