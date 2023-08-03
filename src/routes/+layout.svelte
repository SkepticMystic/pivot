<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import ArrowSmallUp from '$lib/components/icons/arrowSmallUp.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';

	// NOTE: Try AB testing
	// NOTE: Use Chat for copy

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<div class="font-['Roboto']">
	<Navbar />

	{#if y > 100}
		<button
			class="btn btn-neutral rounded-full btn-square fixed bottom-5 right-5 md:bottom-8 md:right-8 hover:scale-110 z-10"
			title="Back to top"
			transition:fly={{ duration: 400 }}
			on:click={() => window.scrollTo(0, 0)}
		>
			<ArrowSmallUp />
		</button>
	{/if}

	<div class="md:px-[8%] sm:px-[4%] px-[2%] max-w-7xl mx-auto">
		<main>
			<slot />
		</main>
		<div class="pt-16 pb-12">
			<Footer />
		</div>
	</div>
</div>
