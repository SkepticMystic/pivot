<script lang="ts">
	import ArrowSmallUp from '$lib/components/icons/arrowSmallUp.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';

	let y: number;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>SeaShell | Web Development South Africa</title>
</svelte:head>

<div class="bg-[#f3ebe1] font-['Roboto']">
	<Navbar />

	<main class="px-[8%]">
		<slot />
	</main>

	{#if y > 100}
		<button
			class="btn btn-primary rounded-full btn-square fixed bottom-5 right-5 md:bottom-8 md:right-8 hover:scale-110"
			title="Back to top"
			transition:fly={{ duration: 400 }}
			on:click={() => window.scrollTo(0, 0)}
		>
			<ArrowSmallUp />
		</button>
	{/if}
</div>
