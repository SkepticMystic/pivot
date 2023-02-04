<script lang="ts">
	import BuildingStorefront from '$lib/components/icons/buildingStorefront.svelte';
	import ChartBar from '$lib/components/icons/chartBar.svelte';
	import Sparkles from '$lib/components/icons/sparkles.svelte';
	import type { ComponentType } from 'svelte';

	const services: { title: string; desc: string; icon: ComponentType }[] = [
		{
			title: 'Bespoke Web Apps',
			desc: 'Client-focused, customer-centric. We build websites that work.',
			icon: Sparkles
		},
		{
			title: 'Brand Exposure',
			desc: 'We help brands break through the noise and get noticed.',
			icon: BuildingStorefront
		},
		{
			title: 'User Metrics',
			desc: 'We help you understand your users and their behaviour.',
			icon: ChartBar
		}
	];
</script>

<div class="grid md:grid-cols-3 gap-x-7 gap-y-11">
	{#each services as { title, desc, icon }, i}
		<div class="flex flex-col items-center space-y-2 md:w-auto w-60 mx-auto">
			<svelte:component this={icon} />
			<h4>{title}</h4>
			<p class="text-lg text-center text-gray-600">{desc}</p>
		</div>
	{/each}
</div>
