import { PostViews } from "$lib/models/postViews";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  view: async ({ params, getClientAddress }) => {
    const { slug } = params;
    const ip = getClientAddress();

    // Downside here is that there's no way to check the slug is valid
    //   That's done in +page.ts, which has to be done client side
    PostViews.create({ slug, ip }).then(() => console.log("View added"));

    return {};
  },
};
