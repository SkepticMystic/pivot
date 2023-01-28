<script lang="ts">
	export let title: string | undefined;
	export let href: string;
	export let imgSrc: string;
	export let description: string;
</script>

<li>
	{#if title}<h3>{title}</h3>{/if}
	<a {href}>
		<img class="w-20" src={imgSrc} alt="" />
	</a>

	<p>{description}</p>
</li>
