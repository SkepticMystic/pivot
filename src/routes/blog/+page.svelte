<script lang="ts">
	import { page } from '$app/stores';
	import Tag from '$lib/components/tag.svelte';
	import { countValues } from '$lib/utils';
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

	const viewsMap = data.views.reduce(
		(acc, { _id, count }) => ({ ...acc, [_id]: count }),
		{} as Record<string, number>
	);

	const getSlugFromPath = (path: string) => path.split('/').pop() as string;

	$: sortedPosts = filteredPosts.sort((a, b) => {
		if (sortBy === 'views') {
			return viewsMap[getSlugFromPath(b.path)] || 0 - viewsMap[getSlugFromPath(a.path)] || 0;
		} else {
			return new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime();
		}
	});
</script>

<h1 class="text-5xl sm:mb-5 mb-3">Blog</h1>

<div class="grid md:grid-cols-5 sm:grid-cols-3 gap-5">
	<div class="col-span-1">
		<label class="flex flex-col gap-1">
			<span class="label-text font-semibold">Sort by</span>
			<select class="select select-sm text-sm py-0 w-28" bind:value={sortBy}>
				<option value="createdAt">Newest</option>
				<option value="views">Popularity</option>
			</select>
		</label>

		<h2 class="my-2">Tags</h2>
		<div class="flex flex-wrap gap-x-1 gap-y-1">
			{#each tags as tag}
				<Tag
					{tag}
					highlight={selectedTag === tag ? 'btn-accent' : 'btn-neutral'}
					onClick={() => selectTag(tag)}
				/>
			{/each}
		</div>
	</div>
	<ul class="flex flex-col gap-5 md:col-span-4 sm:col-span-2">
		{#if sortedPosts.length === 0}
			<li
				class="border shadow-md p-4 bg-base-100 rounded-box flex md:flex-row flex-col md:items-center gap-3"
			>
				<div>
					<h2 class="text-2xl">No posts found for tag: {selectedTag}</h2>
					<p class="italic py-2">Try changing the filters</p>
				</div>
			</li>
		{:else}
			{#each sortedPosts as { meta, path }}
				{@const slug = getSlugFromPath(path)}

				<li
					class="border shadow-md p-4 bg-base-100 rounded-box flex md:flex-row flex-col md:items-center gap-3"
				>
					<img src={`./${slug}.webp`} class="md:w-48 w-full h-fit" width="192" alt="" />
					<div>
						<h2 class="sm:text-2xl text-xl">
							<a href={path} class="link link-hover">
								{meta.title}
							</a>
						</h2>
						<p class="uppercase text-sm font-semibold">{formatDate(new Date(meta.createdAt))}</p>
						<p class="italic py-2">{meta.description}</p>
						<div class="flex flex-wrap gap-1">
							{#each meta.tags as tag}
								<Tag
									{tag}
									highlight={selectedTag === tag ? 'btn-accent' : 'btn-neutral'}
									onClick={() => selectTag(tag)}
								/>
							{/each}
						</div>
					</div>
				</li>
			{/each}
		{/if}
	</ul>
</div>
