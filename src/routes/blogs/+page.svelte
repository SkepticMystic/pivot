<script lang="ts">
	import Button from '$lib/components/button.svelte';

	let x = 1;

	$: console.log(x);
</script>

<h1>Blogs</h1>

<input class="p-4 border shadow " type="number" bind:value={x} />

<Button />
