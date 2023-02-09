import type { BlogPost } from '$lib/interfaces/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    try {
        const post = await import(`../${params.slug}.md`)

        return {
            content: post.default,
            meta: post.metadata as BlogPost['metadata']
        }
    } catch (err) {
        console.log(err)
        throw error(404, 'Not found')
    }
}) satisfies PageLoad