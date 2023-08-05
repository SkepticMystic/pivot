<script lang="ts">
	export let imgs: { src: string }[] = [];
</script>

<div class="carousel w-full">
	{#each imgs as { src }, i}
		{@const prev = i - 1 >= 0 ? i - 1 : imgs.length - 1}
		{@const next = i + 1 < imgs.length ? i + 1 : 0}

		<div id="slide{i}" class="carousel-item relative w-full">
			<img {src} class="rounded-lg object-contain" />

			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide{prev}" class="btn btn-circle">❮</a>
				<a href="#slide{next}" class="btn btn-circle">❯</a>
			</div>
		</div>
	{/each}
</div>
