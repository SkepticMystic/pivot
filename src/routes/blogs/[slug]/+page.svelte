<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article>
	<h1>{data.title ?? '[No Title]'}</h1>
	<p>Published: {data.date ?? '[No Date]'}</p>
	<svelte:component this={data.content} />
</article>
