<script lang="ts">
	let data: {} = {};
</script>

<h1>Home</h1>

<button
	on:click={async () => {
		const res = await fetch('/api/data');
		const new_data = await res.json();
		data = new_data;
	}}
>
	Get Data
</button>

{#if Object.keys(data).length > 0}
	<pre>{JSON.stringify(data, null, 2)}</pre>
{:else}
	<p>No data</p>
{/if}
