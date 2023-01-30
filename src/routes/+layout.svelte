<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';
</script>

<div class="bg-[#f3ebe1] font-['Roboto']">
	<Navbar />

	<main class="xl:px-64 lg:px-32 md:px-16 sm:px-8 px-4 lg:py-10 py-2">
		<slot />
	</main>
</div>
