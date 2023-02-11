import { PostViews } from '$lib/models/postViews';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const { slug } = params

    // Downside here is that there's no way to check the slug is valid
    // That's done in +page.ts, which has to be done client side
    PostViews.updateOne(
        { slug },
        { $inc: { views: 1 } },
        { upsert: true }
    ).lean().then(() => { })

    return {}
}) satisfies PageServerLoad;