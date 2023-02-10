<script lang="ts">
	import Tag from '$lib/components/tag.svelte';
	import AuthorCard from '../authorCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { content, meta } = data;
</script>

<article class="md">
	<h1 class="sm:text-5xl text-4xl">{meta.title}</h1>
	<p>{new Date(meta.date).toDateString()}</p>
	<div class="flex flex-wrap gap-3">
		{#each meta.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
	<svelte:component this={content} />

	<div class="my-9">
		<AuthorCard authorName={meta.author} />
	</div>
</article>
