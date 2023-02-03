<script lang="ts">
	import ArrowSmallUp from '$lib/components/icons/arrowSmallUp.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';
</script>

<div class="bg-[#f3ebe1] font-['Roboto']">
	<Navbar />

	<main class="px-[10%] lg:py-10 py-2">
		<slot />
	</main>

	<button
		class="btn btn-primary rounded-full btn-square fixed bottom-5 right-5 md:bottom-8 md:right-8 hover:scale-110"
		on:click={() => window.scrollTo(0, 0)}
	>
		<ArrowSmallUp />
	</button>
</div>
