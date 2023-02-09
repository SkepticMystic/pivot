<script lang="ts">
	import Tag from '$lib/components/tag.svelte';
	import { showISODate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="my-5">Blog</h1>

<ul class="flex flex-col gap-7">
	{#each data.posts as { meta, path }}
		<li class="border shadow-md p-4 bg-base-100 rounded-md">
			<h2>
				<a href={path} class="link link-primary link-hover">
					{meta.title}
				</a>
			</h2>
			<p>Published: {showISODate(meta.date)}</p>
			<div class="flex flex-wrap gap-3">
				{#each meta.tags as tag}
					<Tag {tag} />
				{/each}
			</div>
		</li>
	{/each}
</ul>
