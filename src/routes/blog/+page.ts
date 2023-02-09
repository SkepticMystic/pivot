import type { getAllBlogPosts } from "$lib/utils/blog";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
    const response = await fetch(`/api/posts`)
    const posts = await response.json() as ReturnType<typeof getAllBlogPosts>

    return { posts }
}) satisfies PageLoad