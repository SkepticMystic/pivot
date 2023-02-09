import type { BlogPost } from "$lib/interfaces/blog"

export const getAllBlogPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    return await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as BlogPost

            // Slice the path to remove the `/src/routes` and `.md`
            const postPath = path.slice(11, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )
}