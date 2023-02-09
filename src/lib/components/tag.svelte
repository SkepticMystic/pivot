<script lang="ts">
	export let tag: string;
</script>

<span
	class="px-3 py-[6px] rounded-full text-sm font-medium shadow-sm bg-base-100 text-gray-800 hover:scale-110 transition-all cursor-default"
>
	{tag}
</span>

<style>
	span::before {
		content: '#';
	}
</style>
