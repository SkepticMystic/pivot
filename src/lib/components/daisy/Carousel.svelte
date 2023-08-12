<script lang="ts">
	export let imgs: { src: string; desc?: string }[] = [];
</script>

<div class="carousel w-full pt-5">
	{#each imgs as { src, desc }, i}
		{@const prev = i - 1 >= 0 ? i - 1 : imgs.length - 1}
		{@const next = i + 1 < imgs.length ? i + 1 : 0}

		<div id="slide{i}" class="rounded-lg carousel-item relative w-full">
			<img {src} class="object-contain hover:scale-[1.01] transition-all" alt={desc} />

			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a
					href="#slide{prev}"
					data-sveltekit-noscroll
					class="btn btn-circle btn-secondary shadow-lg">❮</a
				>
				<a
					href="#slide{next}"
					data-sveltekit-noscroll
					class="btn btn-circle btn-secondary shadow-lg">❯</a
				>
			</div>

			<div
				class="absolute bottom-5 sm:left-[40%] left-[35%] right-5 px-3 py-2 bg-base-200 border-2 shadow-lg rounded-box w-fit"
			>
				<p class="text-primary text-lg sm:text-xl">{desc}</p>
			</div>
		</div>
	{/each}
</div>
