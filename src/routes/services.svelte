<script lang="ts">
	import { fade, slide, blur, crossfade, draw, scale } from 'svelte/transition';

	const services: { title: string; desc: string }[] = [
		{ title: 'Bespoke Web Apps', desc: 'Client-focused, customer-centric' },
		{
			title: 'Brand Design',
			desc: 'creating website solutions that deliver tangible business results'
		},
		{
			title: 'SEO',
			desc: "Appnovation's web developers helps brands the ever-changing digital landscape"
		},
		{ title: 'User Metrics', desc: 'Inovation' }
	];

	let selected_i = 0;
</script>

<div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-3 gap-y-2">
	{#each services as { title }, i}
		<button
			class="btn btn-primary sm:btn-sm"
			class:btn-warning={i === selected_i}
			on:click={() => (selected_i = i)}
		>
			{title}
		</button>
	{/each}
</div>

{#each services as { desc }, i}
	{#if i === selected_i}
		<div
			class="my-3 border p-3 bg-base-100 flex justify-content"
			in:fade
			out:fade={{ duration: 0 }}
		>
			<div class="">
				<p>{desc}</p>
			</div>
		</div>
	{/if}
{/each}

<style></style>
