import { ObjectId } from "mongodb";
export interface BlogDBType {
    _id?: ObjectId;
    name: string;
    description: string;
    websiteUrl: string;
    createdAt: string;
    isMembership: boolean;
}
export type BlogViewModel = {
    id?: string;
    name: string;
    description: string;
    websiteUrl: string;
    createdAt: string;
    isMembership: boolean;
};
export type BlogInputModel = {
    name: string;
    description: string;
    websiteUrl: string;
};
export type BlogPostInputModel = {
    title: string;
    shortDescription: string;
    content: string;
};
