<script lang="ts">
	export const PORTFOLIO_ITEMS: {
		title?: string;
		href: string;
		imgSrc: string;
		description: string;
	}[] = [
		{
			href: 'https://www.dripcel.com',
			imgSrc: 'dripcel logo.png',
			description: 'Automated SMS drip marketing platform'
		},
		{
			title: 'Sugar',
			href: 'https://www.behance.net/gallery/160950567/Social-Networking-App',
			imgSrc: 'sugar.png',
			description: 'Social media app. Elegant, user-friendly mobile app design'
		}
	];
</script>

<ul class="my-3 flex flex-wrap justify-evenly gap-x-10 gap-y-5">
	{#each PORTFOLIO_ITEMS as { description, href, imgSrc, title }}
		<li>
			{#if title}<h3>{title}</h3>{/if}
			<a {href}>
				<img class="w-20" src={imgSrc} alt="" />
			</a>

			<p>{description}</p>
		</li>
	{/each}
</ul>
