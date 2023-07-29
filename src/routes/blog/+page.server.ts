import type { SortByCount } from "$lib/interfaces";
import { PostViews } from "$lib/models/postViews";
import { _idToString } from "$lib/utils";
import { getAllBlogPosts } from "$lib/utils/blog";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const [posts, views] = await Promise.all([
        getAllBlogPosts(),
        PostViews.aggregate([
            { $sortByCount: "$slug" },
        ]) as unknown as Promise<SortByCount[]>
    ])

    return {
        posts,
        views: views.map(_idToString)
    }
}) satisfies PageServerLoad