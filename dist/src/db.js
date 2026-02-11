"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCollection = exports.postLikesCollection = void 0;
exports.setConnection = setConnection;
let mongooseConnection = null;
function setConnection(connection) {
    mongooseConnection = connection;
}
function getPostLikesCollection() {
    if (!mongooseConnection || !mongooseConnection.db) {
        throw new Error('Mongoose connection not initialized');
    }
    return mongooseConnection.db.collection('postLikes');
}
function getUsersCollection() {
    if (!mongooseConnection || !mongooseConnection.db) {
        throw new Error('Mongoose connection not initialized');
    }
    return mongooseConnection.db.collection('users');
}
exports.postLikesCollection = {
    find: (filter) => getPostLikesCollection().find(filter),
    findOne: (filter) => getPostLikesCollection().findOne(filter),
    countDocuments: (filter) => getPostLikesCollection().countDocuments(filter)
};
exports.usersCollection = {
    find: (filter) => getUsersCollection().find(filter),
    findOne: (filter) => getUsersCollection().findOne(filter),
    countDocuments: (filter) => getUsersCollection().countDocuments(filter)
};
//# sourceMappingURL=db.js.map