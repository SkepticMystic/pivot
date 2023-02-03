<script lang="ts">
	import ArrowTopRightOnSquare from './icons/arrowTopRightOnSquare.svelte';

	export const PORTFOLIO_ITEMS: {
		title: string;
		type: string;
		href: string;
		imgSrc: string;
		desc: string;
	}[] = [
		{
			title: 'Dripcel',
			type: 'Web App',
			href: 'https://www.dripcel.com',
			imgSrc: 'dripcel logo.png',
			desc: 'Automated SMS drip marketing platform. Leverging AI-generated insights, and current industry standards. Dripcel is a powerful tool for any business looking to grow their customer base.'
		},
		{
			title: 'Sugar',
			type: 'Mobile App',
			href: 'https://www.behance.net/gallery/160950567/Social-Networking-App',
			imgSrc: 'sugar.png',
			desc: 'A user-friendly social networking app connecting users by common interests, that stood out in the market with its sleek design and strong brand identity.'
		}
	];
</script>

<ul class="my-3 flex gap-5">
	{#each PORTFOLIO_ITEMS as { desc, href, imgSrc, title, type }}
		<li class="sm:py-8">
			<div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
				<div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
					<img class="rounded-lg object-cover shadow-lg" src={imgSrc} alt="" />
				</div>
				<div class="sm:col-span-2">
					<div class="space-y-4">
						<div class="space-y-1 text-lg font-medium leading-6">
							<a {href}><h3>{title}</h3></a>
							<p class="text-warning">{type}</p>
						</div>
						<div class="text-lg">
							<p class="text-gray-500">
								{desc}
							</p>
						</div>
						<ul class="flex space-x-5">
							<li>
								<a {href} class="text-gray-400 hover:text-gray-500">
									<span class="sr-only">Source</span>
									<ArrowTopRightOnSquare />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
