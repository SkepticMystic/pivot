<script lang="ts">
	export let tag: string;
	export let highlight: boolean = false;
	export let clickable: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
</script>

<button
	class="btn btn-primary btn-sm shadow-md hover:scale-105 {clickable || onClick
		? 'cursor-pointer'
		: 'cursor-default'}"
	class:btn-warning={highlight}
	on:click={onClick}
>
	{tag}
</button>

<style>
	button::before {
		content: '#';
	}
</style>
