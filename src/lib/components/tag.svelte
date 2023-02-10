<script lang="ts">
	export let tag: string;
	export let highlight: boolean = false;
	export let clickable: boolean = false;
</script>

<span
	class="px-3 py-[6px] rounded-full text-sm font-medium shadow-sm bg-base-100 text-gray-800 hover:scale-110 transition-all cursor-default"
	class:bg-warning={highlight}
	class:text-warning-content={highlight}
	class:cursor-pointer={clickable}
>
	{tag}
</span>

<style>
	span::before {
		content: '#';
	}
</style>
