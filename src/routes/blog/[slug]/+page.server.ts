import { PostViews } from '$lib/models/postViews';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const { slug } = params

    PostViews.updateOne(
        { slug },
        { $inc: { views: 1 } },
        { upsert: true }
    ).lean().then(() => { })

    return {}
}) satisfies PageServerLoad;