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

type Heading = { text: string | null; level: number };
export type TableOfContents = (Heading & { children: Heading[] })[];

export const buildTOC = (contentEl: HTMLElement | null) => {
    const toc: TableOfContents = [];
    if (!contentEl) return toc;

    const headings = Array.from(contentEl.querySelectorAll('h2, h3'));

    headings.forEach((heading) => {
        const level = parseInt(heading.tagName[1]);
        const text = heading.textContent;

        if (level === 2) toc.push({ text, level, children: [] });
        else toc[toc.length - 1].children.push({ text, level });
    });

    return toc;
}