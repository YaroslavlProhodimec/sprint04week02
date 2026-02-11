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
exports.PostLikeSchema = exports.PostLike = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let PostLike = class PostLike {
    postId;
    userId;
    likeStatus;
    addedAt;
};
exports.PostLike = PostLike;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PostLike.prototype, "postId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PostLike.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['Like', 'Dislike'] }),
    __metadata("design:type", String)
], PostLike.prototype, "likeStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => new Date() }),
    __metadata("design:type", Date)
], PostLike.prototype, "addedAt", void 0);
exports.PostLike = PostLike = __decorate([
    (0, mongoose_1.Schema)({ collection: 'postLikes', timestamps: false })
], PostLike);
exports.PostLikeSchema = mongoose_1.SchemaFactory.createForClass(PostLike);
exports.PostLikeSchema.index({ postId: 1, userId: 1 }, { unique: true });
//# sourceMappingURL=postLike.schema.js.map