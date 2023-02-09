import type { BlogPost } from "$lib/interfaces/blog";
import type { PageLoad } from "./$types"

export const load = (async ({ fetch }) => {
    const response = await fetch(`/api/posts`)
    const posts = await response.json() as {
        meta: BlogPost['metadata'];
        path: string;
    }[]

    return { posts }
}) satisfies PageLoad