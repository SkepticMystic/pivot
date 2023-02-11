<script lang="ts">
	import Tag from '$lib/components/tag.svelte';
	import AuthorCard from '../authorCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { content, meta } = data;
</script>

<article class="md">
	<h1 class="sm:text-5xl text-4xl">{meta.title}</h1>
	<p class="uppercase text-sm font-semibold">{new Date(meta.createdAt).toDateString()}</p>
	<div class="flex flex-wrap gap-1">
		{#each meta.tags as tag}
			<a href="/blog?tag={tag}" class="link">
				<Tag {tag} clickable />
			</a>
		{/each}
	</div>

	<div class="my-7">
		<svelte:component this={content} />
	</div>

	<div class="my-9">
		<AuthorCard authorName={meta.author} />
	</div>
</article>
