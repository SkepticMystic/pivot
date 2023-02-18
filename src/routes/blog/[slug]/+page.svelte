<script lang="ts">
	import { page } from '$app/stores';
	import Tag from '$lib/components/tag.svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import AuthorCard from '../authorCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { content, meta } = data;

	const slug = $page.url.pathname.split('/').pop() as string;

	onMount(() => axios.postForm('?/view', {}));
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="title" content="Pivot | {meta.title}" />
	<meta name="description" content={meta.description} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={`../${slug}.webp`} />
</svelte:head>

<article class="md">
	<img src={`../${slug}.webp`} class="border w-full" alt="" />
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
