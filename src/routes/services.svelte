<script lang="ts">
	import { page } from '$app/stores';

	const services: { hash: string; title: string }[] = [
		{ hash: 'item1', title: 'Bespoke Web Apps' },
		{ hash: 'item2', title: 'Brand Design' },
		{ hash: 'item3', title: 'SEO' },
		{ hash: 'item4', title: 'User Metrics' }
	];
</script>

<div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-3 gap-y-2">
	{#each services as { hash, title }, i}
		<a
			href="#{hash}"
			class="btn btn-primary sm:btn-sm"
			class:btn-warning={$page.url.hash === `#${hash}` || ($page.url.hash === '' && i === 0)}
		>
			{title}
		</a>
	{/each}
</div>

<div class="my-3 border p-3 bg-base-100 flex justify-content">
	<div class="carousel">
		<div id="item1" class="carousel-item w-full">
			<p>Client-focused, customer-centric</p>
		</div>
		<div id="item2" class="carousel-item w-full">
			<p>creating website solutions that deliver tangible business results</p>
		</div>
		<div id="item3" class="carousel-item w-full">
			<p>Appnovation's web developers helps brands the ever-changing digital landscape</p>
		</div>
		<div id="item4" class="carousel-item w-full">
			<p>Inovation</p>
		</div>
	</div>
</div>

<style></style>
