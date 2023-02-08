import { readFile } from "fs/promises";

const readBlog = (slug: string) => readFile(`src/lib/assets/blogs/${slug}.md`, 'utf-8');

export const blogLoad = (async ({ url }: { url: URL }) => {
    const slug = url.pathname.split('blogs/')[1]
    const blog = await readBlog(slug)
    return { blog }
}) 