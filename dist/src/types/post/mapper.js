"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMapper = postMapper;
async function postMapper(post, userId, deps) {
    const postId = post.id ?? post._id?.toString() ?? '';
    const [likesCount, dislikesCount] = await Promise.all([
        deps.postLikesRepository.countByPostAndStatus(postId, 'Like'),
        deps.postLikesRepository.countByPostAndStatus(postId, 'Dislike'),
    ]);
    let myStatus = 'None';
    if (userId) {
        const status = await deps.postLikesRepository.findMyStatus(postId, userId);
        if (status)
            myStatus = status;
    }
    const newestLikesRaw = await deps.postLikesRepository.findNewestLikes(postId, 3);
    const newestLikes = await Promise.all(newestLikesRaw.map(async (like) => {
        const login = await deps.usersRepository.getLoginByUserId(like.userId);
        return {
            addedAt: like.addedAt instanceof Date ? like.addedAt.toISOString() : String(like.addedAt),
            userId: like.userId,
            login: login ?? 'unknown',
        };
    }));
    const rawCreatedAt = post.createdAt;
    const createdAt = rawCreatedAt instanceof Date
        ? rawCreatedAt.toISOString()
        : typeof rawCreatedAt === 'string'
            ? rawCreatedAt
            : String(rawCreatedAt ?? '');
    return {
        id: postId,
        title: post.title,
        shortDescription: post.shortDescription,
        content: post.content,
        blogId: post.blogId,
        blogName: post.blogName,
        createdAt,
        extendedLikesInfo: {
            likesCount,
            dislikesCount,
            myStatus,
            newestLikes,
        },
    };
}
//# sourceMappingURL=mapper.js.map