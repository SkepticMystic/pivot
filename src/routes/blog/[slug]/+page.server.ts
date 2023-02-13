import { PostViews } from '$lib/models/postViews';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, getClientAddress }) => {
    const { slug } = params
    const ip = getClientAddress()


    // Downside here is that there's no way to check the slug is valid
    //   That's done in +page.ts, which has to be done client side
    // Also, it triggers when just hovering the link...
    PostViews.create({ slug, ip }).then(() => { })

    return {}
}) satisfies PageServerLoad;