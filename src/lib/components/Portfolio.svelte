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
			title: 'AA Hi-Tech',
			type: 'Web Design',
			desc: "A tailored, modern website for an established industrial coatings company. The website was designed to be user-friendly, and to showcase the company's services and products.",
			href: 'https://www.behance.net/gallery/160992133/Web-Design-AA-Hi-Tech',
			imgSrc: 'aa-hi-tech.png'
		},
		{
			title: 'Sugar',
			type: 'Mobile App',
			href: 'https://www.behance.net/gallery/160950567/Social-Networking-App',
			imgSrc: 'sugar.png',
			desc: 'A user-friendly social networking app connecting users by common interests, that stood out in the market with its sleek design and strong brand identity.'
		},
		{
			title: 'Dripcel',
			type: 'Web App',
			href: 'https://www.dripcel.com',
			imgSrc: 'dripcel-droplet.png',
			desc: 'Automated SMS drip marketing platform. Leverging AI-generated insights, and current industry standards. Dripcel is a powerful tool for any business looking to grow their customer base.'
		},
		{
			title: 'iQPaid Connect',
			type: 'Web App',
			desc: 'A groundbreaking platform that allows users to instantly get rewarded for the data they choose to share with brands. A central focus was on mobile-first design, and a seamless user experience.',
			href: 'https://connect.iqpaid.com',
			imgSrc: 'iqpaid-logo.png'
		}
	];
</script>

<ul class="my-3 grid xl:grid-cols-2 gap-x-9 gap-y-5">
	{#each PORTFOLIO_ITEMS as { desc, href, imgSrc, title, type }}
		<li class="sm:py-8">
			<div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
				<div class="my-auto">
					<a {href} target="_blank" rel="noreferrer">
						<img class="rounded-lg mx-auto object-cover" src={imgSrc} alt="" />
					</a>
				</div>
				<div class="sm:col-span-2">
					<div class="space-y-1">
						<div class="space-y-1 text-lg font-medium leading-6">
							<a {href} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
							<div class="flex gap-2 items-center">
								<p class="text-warning">{type}</p>
								<a
									{href}
									target="_blank"
									rel="noreferrer"
									class="inline text-gray-400 hover:text-gray-500"
								>
									<ArrowTopRightOnSquare />
								</a>
							</div>
						</div>
						<div class="text-lg">
							<p class="text-gray-500">
								{desc}
							</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
