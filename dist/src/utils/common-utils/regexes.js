"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlBlogsRegex = exports.userLoginRegex = exports.userEmailRegex = void 0;
exports.userEmailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
exports.userLoginRegex = new RegExp("^[a-zA-Z0-9_-]*$");
exports.urlBlogsRegex = new RegExp("^https://([a-zA-Z0-9_-]+.)+[a-zA-Z0-9_-]+(/[a-zA-Z0-9_-]+)*/?$");
//# sourceMappingURL=regexes.js.map