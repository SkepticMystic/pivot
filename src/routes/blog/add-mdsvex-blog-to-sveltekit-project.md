---
title: How to add an mdsvex Markdown blog to your SvelteKit project
author: Ross Keenan
createdAt: 2023-02-11
description: A quick tutorial on how to add an mdsvex Markdown blog to your SvelteKit project.
tags:
  - SvelteKit
  - Mdsvex
  - TypeScript
  - Markdown
  - Blog
---

<script>
	import Admonition from '$lib/components/admonition.svelte';
</script>

So, you've got a <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">SvelteKit</a> project up and running, and you want to add a blog to it. You've heard of <a href="https://mdsvex.com/" target="_blank" rel="noreferrer">mdsvex</a>, and you're wondering how to add it to your project. Well, you've come to the right place!

<Admonition type="info">
	<div>
		This tutorial was inspired by <a target="_blank" rel="noreferrer" href="https://joshcollinsworth.com/blog/		build-static-sveltekit-markdown-blog">Josh Collinsworth's post</a> on the same topic. It's a great, in-depth resource, and I highly recommend checking it out.
	</div>
	<div>
		This post focuses more specifically on the mdsvex side of things, and how to get going as quickly as possible.
	</div>
</Admonition>

We'll start by installing mdsvex, then add it to our SvelteKit config. Next, we'll create a directory to store our blog posts, and add some types to make working with the blog posts easier. Finally, we'll create a blog index page, and a blog post page to display our posts.

You can find the finished code for this tutorial in this <a href="https://github.com/SkepticMystic/sveltekit-mdsvex-blog" target="_blank" rel="noreferrer">repo</a>, and you can view the live demo <a href="https://sveltekit-mdsvex-blog.vercel.app/" target="_blank" rel="noreferrer">here</a>.

## Install mdsvex and add it to your SvelteKit config

First, you'll need to install mdsvex. You can do this by running the following terminal command in the root of your project:

```bash
npm i -D mdsvex
```

Next, you'll need to add mdsvex to your SvelteKit config. Here is an example of what your config file will look like after you've added mdsvex:

<Admonition type='info'>
	<div>
		This example assumes that you're using the Vercel adapter. If you're using a different adapter, you'll need to change the import statement to match the adapter you're using.
	</div>
</Admonition>

```js
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		// Tell mdsvex to use the .md extension
		mdsvex({ extensions: ['.md'] })
	],
	// Tell SvelteKit to also treat .md files as Svelte components
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter()
	}
};

export default config;
```

## Create a blog directory

Now that you've got mdsvex installed and added to your config, you'll need to create a directory to store your blog posts. I recommend creating a `blog` directory in the `src/routes` directory. This will make it easier to keep your blog posts separate from your other routes.

```
src
└── routes
    ├── blog
    │   ├── first.md
    │   └── second.md
    └── +page.svelte
```

## Setup some types

Each blog post can have metadata associated with it. For example, you might want to include the title, the date it was created, and the tags associated with the post. This can be done using <a href="https://learntheweb.courses/topics/yaml/" target="_blank" rel="noreferrer">YAML frontmatter</a>. Here's an example of what a blog post might look like:

```md
---
title: First blog post
createdAt: 2021-02-11
tags:
  - svelte
  - typescript
---

Welcome to my blog!
```

mdsvex will parse the YAML frontmatter, and make it available to you in your Svelte components. To add some type safety, you'll need to tell TypeScript what the shape of your metadata. We'll do this by creating a `src/lib/interfaces/blog.ts` file. Here's an example of what this file might look like:

```ts
export interface BlogPost {
	metadata: {
		title: string;
		createdAt: string;
		tags: string[];
	};
}
```

<Admonition type='warning'>
	<div>
		mdsvex correctly parses the <code>tags</code> as a <code>string[]</code>, but it doesn't parse <code>createdAt</code> as a <code>Date</code>! So for now, we need to tell TypeScript that it's a <code>string</code>. When we use the date-string later on, we can convert it to a <code>Date</code> object.
	</div>
</Admonition>

## Fetch your blog posts

Now that you've got a directory to store your blog posts, and some associated types, let's fetch our posts to display them. In this example, we'll run this code in the `src/routes/blog/+page.server.ts` file. This will allow us to fetch the blog posts on the server, and then pass them to the client. Read more about this in the <a href="https://kit.svelte.dev/docs/routing#page-page-server-js" target="_blank" rel="noreferrer">SvelteKit docs</a>.

```ts
import type { BlogPost } from '$lib/interfaces/blog';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// Fetch all blog posts using glob
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const postFilesArr = Object.entries(allPostFiles);

	const posts = await Promise.all(
		postFilesArr.map(async ([path, resolve]) => {
			// Get the metadata from the blog post
			const { metadata } = (await resolve()) as BlogPost;

			return {
				meta: metadata,
				// Remove the /src/routes and .md from the path
				// e.g. /src/routes/blog/first.md -> /blog/first
				path: path.slice(11, -3)
			};
		})
	);

	// Sort the posts (in place) by the date they were created
	posts.sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt));

	return { posts };
}) satisfies PageServerLoad;
```

There's alot going on here, so let's break it down.

1. We first use the `import.meta.glob` function from Vite to fetch all of the blog posts in the `src/routes/blog` directory. This function returns an object with the path to the file as the key, and a function that resolves to the file as the value. We then convert this object into an array, so that we can use the `Promise.all` function to resolve all of the promises at once.
2. Next, using `Promise.all`, we map over the array of blog posts, and resolve each promise. This gives us an array of objects with the metadata from the blog post, and the path to the blog post.
3. Finally, we sort the posts by the date they were created. We do this by converting the `createdAt` string to a `Date` object. We then sort the posts in descending order, so that the most recent post is first.

This data is now available to the `src/routes/blog/+page.svelte` route, which we'll use to display our blog posts.

## Display your blog posts

Now that we've got our blog posts, we can display them. Here's an example of what the `src/routes/blog/+page.svelte` file might look like:

<Admonition type='info'>
	<div>
		This example uses <a target="_blank" rel="noreferrer" href='https://tailwindcss.com/'>Tailwind</a> and <a target="_blank" rel="noreferrer" href='https://daisyui.com/'>Daisyui</a> for styling. If you don't want to use these, you can remove the <code>class</code> attributes from the HTML elements.
	</div>
</Admonition>

```svelte
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-3xl font-semibold my-3">Blog</h1>

<ul class="flex flex-wrap gap-7">
	{#each data.posts as { meta, path }}
		<li class="border shadow-md p-4 bg-base-100 rounded-box w-fit">
			<h2 class="text-2xl">
				<a href={path} class="link link-primary link-hover">
					{meta.title}
				</a>
			</h2>
			<p class="uppercase text-sm font-semibold">
				{new Date(meta.createdAt).toDateString()}
			</p>
			<div class="flex flex-wrap gap-x-2 gap-y-3">
				{#each meta.tags as tag}
					<span class="bg-base-200 rounded-box px-2 py-1 cursor-default">#{tag}</span>
				{/each}
			</div>
		</li>
	{/each}
</ul>
```

This component shows a list of all our blog posts. Each post has a title, a date, and a list of tags. The title is a link to the blog post, and the date is formatted using the `Date` object.

## Setup routing to each post

If you click on the link to a specific post, you'll notice that it doesn't work. This is because we haven't setup routing to each post. To do this, we'll need to create a `src/routes/blog/[slug]/+page.svelte` file, and a `src/routes/blog/[slug]/+page.ts` file. This creates a [dynamic route](https://kit.svelte.dev/docs/routing), which can show a different page depending on the value of the `slug` parameter. Here's how you might setup these two files:

`src/routes/blog/[slug]/+page.ts`

```ts
import type { BlogPost } from '$lib/interfaces/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		// Import the blog post from the directory above using the slug
		const post = await import(`../${params.slug}.md`);

		return {
			// mdsvex returns a Svelte component as the default export
			component: post.default,
			meta: post.metadata as BlogPost['metadata']
		};
	} catch (err) {
		// If the blog post doesn't exist, throw a 404 error
		// This will be displayed in the browser
		throw error(404, 'Not found');
	}
}) satisfies PageLoad;
```

The blog component and metadata are now available to the component we'll use to display our post.

`src/routes/blog/[slug]/+page.svelte`

```svelte
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { component, meta } = data;
</script>

<article class="markdown">
	<h1 class="sm:text-5xl text-4xl">{meta.title}</h1>
	<p>{new Date(meta.createdAt).toDateString()}</p>
	<div class="flex flex-wrap gap-3 my-3">
		{#each meta.tags as tag}
			<span class="bg-base-200 rounded-box px-2 py-1">{tag}</span>
		{/each}
	</div>

	<svelte:component this={component} />
</article>
```

This component will display the metadata of our post, and use the `content` component that mdsvex returns to display the actual markdown content.

<Admonition type='info'>
	<div>
		We wrap the entire post in a <code>article.markdown</code>, which can be used to apply markdown specific styles to your posts. You can either write some custom styles yourself, or use existing styles like <a target="_blank" rel="noreferrer" href="https://markdowncss.github.io">markdowncss</a>.
	</div>
</Admonition>

## Conclusion

In this tutorial, we've learned how to create a blog using SvelteKit and mdsvex. We've also learned how to use the `import.meta.glob` function to fetch all of the blog posts in a directory, and how to use dynamic routes to display each post.

If you want to see the finished code, you can check out the <a href="https://github.com/SkepticMystic/sveltekit-mdsvex-blog" target="_blank" rel="noreferrer">sveltekit-mdsvex-blog</a> repository on GitHub.

## Resources

- <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
- <a href="https://mdsvex.com/" target="_blank" rel="noreferrer">mdsvex</a>
