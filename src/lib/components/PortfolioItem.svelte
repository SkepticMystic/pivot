<script lang="ts">
	import type { PorfolioItem } from '$lib/interfaces';

	export let item: PorfolioItem;

	const { description, href, imgSrc, title } = item;
</script>

<li>
	{#if title}<h3>{title}</h3>{/if}
	<a {href}>
		<img class="w-20" src={imgSrc} alt="" />
	</a>

	<p>{description}</p>
</li>
