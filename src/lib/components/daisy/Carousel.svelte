<script lang="ts">
	export let imgs: { src: string; desc?: string }[] = [];
</script>

<div class="carousel w-full">
	{#each imgs as { src, desc }, i}
		{@const prev = i - 1 >= 0 ? i - 1 : imgs.length - 1}
		{@const next = i + 1 < imgs.length ? i + 1 : 0}

		<div id="slide{i}" class="carousel-item relative w-full pt-5">
			<a href={src}>
				<img {src} class="rounded object-contain" alt={desc} />
			</a>

			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide{prev}" class="btn btn-circle btn-secondary shadow-lg">❮</a>
				<a href="#slide{next}" class="btn btn-circle btn-secondary shadow-lg">❯</a>
			</div>

			<div
				class="absolute bottom-5 left-[40%] right-5 p-3 bg-base-200 border-2 shadow-lg rounded-box w-fit"
			>
				<p class="text-primary text-lg sm:text-xl">{desc}</p>
			</div>
		</div>
	{/each}
</div>
