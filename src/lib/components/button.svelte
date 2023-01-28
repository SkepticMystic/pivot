<script lang="ts">
	export let count: number = 0;

	$: double = count * 2;
	$: {
		console.log(count);
	}
</script>

<button on:click={() => count++}>Count is: {count}</button>

<p>Doubled: {double}</p>
