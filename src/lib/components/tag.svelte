<script lang="ts">
	import type { Daisy } from '$lib/interfaces/daisyui';

	export let tag: string;
	export let highlight: boolean | `btn-${Daisy.Colour}` = false;
	export let clickable: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
</script>

<button
	class="btn btn-primary btn-xs shadow-md hover:scale-105 {clickable || onClick
		? 'cursor-pointer'
		: 'cursor-default'}
		{highlight === true ? 'btn-secondary' : highlight}"
	on:click={onClick}
>
	#{tag}
</button>
