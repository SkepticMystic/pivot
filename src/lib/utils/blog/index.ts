import { dev } from "$app/environment"
import type { BlogPost } from "$lib/interfaces/blog"

export const getAllBlogPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const posts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as BlogPost

            return {
                meta: metadata,
                path: path.slice(11, -3), // Slice the path to remove the `/src/routes` and `.md`
            }
        })
    )

    // If we're in dev mode, show all posts, otherwise hide posts with `hide: true`
    return posts.filter((post) => dev ? true : !post.meta.hide)
}