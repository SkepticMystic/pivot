import { PostViews } from "$lib/models/postViews";
import { _idToString } from "$lib/utils";
import { getAllBlogPosts } from "$lib/utils/blog";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const [posts, views] = await Promise.all([
        getAllBlogPosts(),
        PostViews.find({}).lean()
    ])

    posts.sort((a, b) => new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime())

    return {
        posts,
        views: views.map(_idToString)
    }
}) satisfies PageServerLoad