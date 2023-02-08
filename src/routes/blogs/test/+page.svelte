<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: PageData;
</script>

<div class="flex flex-col gap-10">
	<SvelteMarkdown source={data.blog} />
</div>
