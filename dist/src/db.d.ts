import { Connection } from 'mongoose';
export declare function setConnection(connection: Connection): void;
export declare const postLikesCollection: {
    find: (filter: any) => any;
    findOne: (filter: any) => any;
    countDocuments: (filter: any) => any;
};
export declare const usersCollection: {
    find: (filter: any) => any;
    findOne: (filter: any) => any;
    countDocuments: (filter: any) => any;
};
