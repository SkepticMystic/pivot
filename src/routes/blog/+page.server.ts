import { getAllBlogPosts } from "$lib/utils/blog";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const posts = await getAllBlogPosts()

    posts.sort((a, b) => new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime())

    return { posts }
}) satisfies PageServerLoad