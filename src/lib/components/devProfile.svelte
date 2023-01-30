<script lang="ts">
	import type { DeveloperProfile } from '$lib/interfaces';

	export let dev: DeveloperProfile;

	const { name, imgSrc, desc, links } = dev;
</script>

<div>
	<h2>{name}</h2>
	<img class="w-10 rounded-full" src={imgSrc} alt="" />
	<p>{desc}</p>
	<div class="flex flex-wrap gap-1">
		{#each links as { href, icon }}
			<a {href}>
				<svelte:component this={icon} />
			</a>
		{/each}
	</div>
</div>
