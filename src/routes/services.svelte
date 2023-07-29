<script lang="ts">
	import Cog6Tooth from '$lib/components/icons/Cog6Tooth.svelte';
	import ChartBar from '$lib/components/icons/chartBar.svelte';
	import Sparkles from '$lib/components/icons/sparkles.svelte';
	import type { ComponentType } from 'svelte';

	const services: { title: string; desc: string; icon: ComponentType }[] = [
		{
			title: 'Bespoke Web Apps',
			desc: 'Client-focused, customer-centric.',
			icon: Sparkles
		},
		{
			title: 'Process Automation',
			desc: 'Save time and money by removing repetitive tasks.',
			icon: Cog6Tooth
		},
		{
			title: 'Data Analysis',
			desc: 'Make informed decisions with data-driven insights.',
			icon: ChartBar
		}
	];
</script>

<div class="grid md:grid-cols-3 gap-x-7 gap-y-11">
	{#each services as { title, desc, icon }}
		<div class="flex flex-col items-center space-y-2 md:w-auto w-60 mx-auto">
			<div class="hover:scale-110 transition-all hover:text-secondary">
				<svelte:component this={icon} h="h-16" w="w-16" />
			</div>
			<h4>{title}</h4>
			<p class="text-lg text-center text-gray-600">{desc}</p>
		</div>
	{/each}
</div>
