<script lang="ts">
	import { goto } from '$app/navigation';
	import Modal from '$lib/components/daisy/Modal.svelte';
	import AutomationModalContent from '$lib/components/services/AutomationModalContent.svelte';
	import DataAnalysisModalContent from '$lib/components/services/DataAnalysisModalContent.svelte';
	import WebAppsModalContent from '$lib/components/services/WebAppsModalContent.svelte';
	import { SERVICES_METADATA } from '$lib/const/services';

	let modals: Record<string, HTMLDialogElement> = {};
</script>

<div class="grid md:grid-cols-3 gap-x-7 gap-y-11 items-start">
	{#each SERVICES_METADATA as { title, slug, desc, icon }, i}
		<Modal bind:modal={modals[slug]}>
			<div slot="open" class="flex flex-col items-center space-y-2 md:w-auto w-60 mx-auto group">
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

			<div slot="action">
				<button
					class="btn btn-primary"
					on:click={() => {
						modals[slug].close();
						goto('#contact-us');
					}}
				>
					Get Started
				</button>
			</div>

			<div slot="content" class="flex flex-col gap-3">
				<h2 class="text-3xl text-center">{title}</h2>

				{#if slug.includes('app')}
					<WebAppsModalContent />
				{:else if slug.includes('data')}
					<DataAnalysisModalContent />
				{:else if slug.includes('auto')}
					<AutomationModalContent />
				{/if}
			</div>
		</Modal>
	{/each}
</div>
