<script lang="ts">
	import { page } from '$app/stores';
	import Tag from '$lib/components/tag.svelte';
	import { dedupe, showISODate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	const tags = dedupe(data.posts.map(({ meta }) => meta.tags).flat());

	let tag_param = $page.url.searchParams.get('tag');

	$: filteredPosts = tag_param
		? data.posts.filter((p) => p.meta.tags.includes(tag_param as string))
		: data.posts;
</script>

<h1 class="my-5">Blog</h1>

<div class="grid grid-cols-5 gap-3">
	<div class="col-span-1">
		<h2 class="my-2">Tags</h2>
		<div class="flex flex-wrap gap-3">
			{#each tags as tag}
				<button
					class="hover:scale-105"
					on:click={() => (tag_param === tag ? (tag_param = null) : (tag_param = tag))}
				>
					<Tag {tag} highlight={tag_param === tag} clickable />
				</button>
			{/each}
		</div>
	</div>
	<ul class="flex flex-col gap-7 col-span-4">
		{#each filteredPosts as { meta, path }}
			<li class="border shadow-md p-4 bg-base-100 rounded-md">
				<h2>
					<a href={path} class="link link-primary link-hover">
						{meta.title}
					</a>
				</h2>
				<p>Published: {showISODate(meta.date)}</p>
				<div class="flex flex-wrap gap-3">
					{#each meta.tags as tag}
						<Tag {tag} highlight={tag_param === tag} />
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</div>
