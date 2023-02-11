<script lang="ts">
	import { page } from '$app/stores';
	import Tag from '$lib/components/tag.svelte';
	import { countValues, last } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	let selectedTag = $page.url.searchParams.get('tag');
	const selectTag = (tag: string) => (selectedTag = selectedTag === tag ? null : tag);

	let sortBy = $page.url.searchParams.get('sort') || 'createdAt';

	const allTags = data.posts.map(({ meta }) => meta.tags).flat();
	const tags = Object.entries(countValues(allTags))
		.sort(([_ta, ca], [_tb, cb]) => cb - ca)
		.map(([t]) => t);

	const formatDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format;

	$: filteredPosts = selectedTag
		? data.posts.filter((p) => p.meta.tags.includes(selectedTag as string))
		: data.posts;

	const viewsMap: Record<string, number> = data.views.reduce(
		(acc, { slug, views }) => ({ ...acc, [slug]: views }),
		{}
	);

	const getSlugFromPath = (path: string) => last(path.split('/'));
	$: sortedPosts = filteredPosts.sort((a, b) => {
		if (sortBy === 'views') {
			const bViews = viewsMap[getSlugFromPath(b.path)] || 0;
			const aViews = viewsMap[getSlugFromPath(a.path)] || 0;

			return bViews - aViews;
		} else {
			return new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime();
		}
	});
</script>

<h1 class="text-5xl sm:mb-5 mb-3">Blog</h1>

<div class="grid md:grid-cols-5 sm:grid-cols-3 gap-3">
	<div class="col-span-1">
		<label class="flex flex-col gap-1">
			<span class="label-text font-semibold">Sort by</span>
			<select class="select select-sm text-sm py-0 w-28" bind:value={sortBy}>
				<option value="createdAt">Newest</option>
				<option value="views">Popularity</option>
			</select>
		</label>

		<h2 class="my-2">Tags</h2>
		<div class="flex flex-wrap gap-x-1 gap-y-2">
			{#each tags as tag}
				<Tag {tag} highlight={selectedTag === tag} onClick={() => selectTag(tag)} />
			{/each}
		</div>
	</div>
	<ul class="flex flex-col gap-5 md:col-span-4 sm:col-span-2">
		{#each sortedPosts as { meta, path }}
			<li class="border shadow-md p-4 bg-base-100 rounded-box">
				<h2 class="text-2xl">
					<a href={path} class="link link-primary link-hover">
						{meta.title}
					</a>
				</h2>
				<p class="uppercase text-sm font-semibold">{formatDate(new Date(meta.createdAt))}</p>
				<p class="italic py-2">{meta.description}</p>
				<div class="flex flex-wrap gap-1">
					{#each meta.tags as tag}
						<Tag {tag} highlight={selectedTag === tag} onClick={() => selectTag(tag)} />
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</div>
