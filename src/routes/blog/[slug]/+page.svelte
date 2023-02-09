<script lang="ts">
	import { showISODate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const { content, meta } = data;
</script>

<article>
	<h1>{meta.title}</h1>
	<p>Published: {showISODate(meta.date)}</p>
	<svelte:component this={content} />
</article>
