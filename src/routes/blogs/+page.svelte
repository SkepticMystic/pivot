<script lang="ts">
	let x = 1;

	$: console.log(x);
</script>

<h1>Blogs</h1>

<input type="number" bind:value={x} />
