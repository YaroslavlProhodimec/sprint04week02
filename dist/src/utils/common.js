"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUSES = exports.createdNewId = void 0;
let counter = 0;
const createdNewId = (descriptor) => {
    counter++;
    return (+(new Date())) * Math.random() + descriptor + counter;
};
exports.createdNewId = createdNewId;
exports.HTTP_STATUSES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,
    UNAUTHORIZED_401: 401
};
//# sourceMappingURL=common.js.map