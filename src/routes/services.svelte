<script lang="ts">
	import { SERVICES_METADATA } from '$lib/const/services';
</script>

<div class="grid md:grid-cols-3 gap-x-7 gap-y-11">
	{#each SERVICES_METADATA as { title, slug, desc, icon }, i}
		<div class="flex flex-col items-center space-y-2 md:w-auto w-60 mx-auto group">
			<div
				class="transition-all group-hover:scale-110"
				class:text-primary={i % 3 === 0}
				class:text-secondary={i % 3 === 1}
				class:text-accent={i % 3 === 2}
			>
				<svelte:component this={icon} h="h-16" w="w-16" />
			</div>
			<h3 class="text-lg">{title}</h3>
			<p class="text-lg text-center text-neutral">{desc}</p>
		</div>
	{/each}
</div>
