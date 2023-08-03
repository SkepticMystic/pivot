<script lang="ts">
	import type { Daisy } from '$lib/interfaces/daisyui';

	export let tag: string;
	export let highlight: `btn-${Daisy.Colour}` | undefined = undefined;
	export let clickable: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
</script>

<button
	class="btn btn-xs shadow-md hover:scale-105 {clickable || onClick
		? 'cursor-pointer'
		: 'cursor-default'}
		{highlight ?? 'btn-neutral'}"
	on:click={onClick}
>
	#{tag}
</button>
