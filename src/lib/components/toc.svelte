<script lang="ts">
	import type { TableOfContents } from '$lib/utils/blog';

	export let toc: TableOfContents = [];
	export let contentEl: HTMLElement;

	const jumpToHeading = (text: string | null, level: number) => {
		const headings = Array.from(contentEl.querySelectorAll(`h${level}`));
		for (const h of headings) {
			if (h.textContent === text) {
				h.scrollIntoView();
				break;
			}
		}
	};
</script>

<ul class="list-inside list-disc">
	{#each toc as { children, text, level }}
		<li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span class="link" on:click={() => jumpToHeading(text, level)}>
				{text}
			</span>
			<ul class="list-inside list-disc">
				{#each children as { text, level }}
					<li>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span class="link" on:click={() => jumpToHeading(text, level)}>
							{text}
						</span>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>
