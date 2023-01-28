<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';
</script>

<div class="bg-[#f3ebe1]">
	<Navbar />

	<main class="p-10">
		<slot />
	</main>
</div>
