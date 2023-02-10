<script lang="ts">
	import { page } from '$app/stores';
	import Tag from '$lib/components/tag.svelte';
	import { countValues, showISODate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	let selectedTag = $page.url.searchParams.get('tag');

	const allTags = data.posts.map(({ meta }) => meta.tags).flat();
	const tags = Object.entries(countValues(allTags))
		.sort(([_ta, ca], [_tb, cb]) => cb - ca)
		.map(([t]) => t);

	const selectTag = (tag: string) => (selectedTag = selectedTag === tag ? null : tag);

	const formatDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format;

	$: filteredPosts = selectedTag
		? data.posts.filter((p) => p.meta.tags.includes(selectedTag as string))
		: data.posts;
</script>

<h1 class="sm:text-5xl text-4xl mb-7">Blog</h1>

<div class="grid grid-cols-5 gap-3">
	<div class="col-span-1">
		<h2 class="my-2">Tags</h2>
		<div class="flex flex-wrap gap-x-2 gap-y-3">
			{#each tags as tag}
				<button class="hover:scale-105" on:click={() => selectTag(tag)}>
					<Tag {tag} highlight={selectedTag === tag} clickable />
				</button>
			{/each}
		</div>
	</div>
	<ul class="flex flex-col gap-7 col-span-4">
		{#each filteredPosts as { meta, path }}
			<li class="border shadow-md p-4 bg-base-100 rounded-md">
				<h2 class="text-2xl">
					<a href={path} class="link link-primary link-hover">
						{meta.title}
					</a>
				</h2>
				<p class="uppercase text-sm font-semibold">{formatDate(new Date(meta.date))}</p>
				<p class="italic py-2">{meta.description}</p>
				<div class="flex flex-wrap gap-x-2 gap-y-3">
					{#each meta.tags as tag}
						<button class="hover:scale-105" on:click={() => selectTag(tag)}>
							<Tag {tag} highlight={selectedTag === tag} clickable />
						</button>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</div>
