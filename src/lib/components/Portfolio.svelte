<script lang="ts">
	import DelveLogo from '$lib/assets/Delve Logo.png';
	import DripcelDroplet from '$lib/assets/Dripcel Circle.png';
	import CashloansLogo from '$lib/assets/cashloans-logo.webp';
	import IqpaidLogo from '$lib/assets/iqpaid-logo.webp';
	import ArrowTopRightOnSquare from './icons/arrowTopRightOnSquare.svelte';
	import Sparkles from './icons/sparkles.svelte';

	export const PORTFOLIO_ITEMS: {
		title: string;
		type: string;
		href: string;
		desc: string;
		imgSrc: string;
		imgCls?: string;
	}[] = [
		{
			title: 'Dripcel',
			type: 'Web App',
			href: 'https://www.dripcel.com',
			imgSrc: DripcelDroplet,
			desc: 'Automated SMS drip marketing platform. Leverging AI-generated insights, and current industry standards. Dripcel is a powerful tool for any business looking to grow their customer base.'
		},
		{
			title: 'Big Data Migration',
			type: 'Data Migration',
			desc: 'A large-scale, continuous data migration project, involving the flow of millions of records between multiple databases. The result was a seamless transition, with no downtime, allowing stakeholders to present the data in a more meaningful way.',
			href: 'https://www.delve.systems',
			imgSrc: DelveLogo
		},
		{
			title: 'iQPaid Connect',
			type: 'Web App',
			desc: 'A groundbreaking platform that allows users to instantly get rewarded for the data they choose to share with brands. A central focus was on mobile-first design, and a seamless user experience.',
			href: 'https://connect.iqpaid.com',
			imgSrc: IqpaidLogo,
			imgCls: 'w-36'
		},
		{
			title: 'Cashloans',
			type: 'Web App',
			desc: "Instantly apply for a loan with more than 6 South African lenders, and immediately see details of any offers you're accepted for. Create a profile to quickly reapply in future. ",
			href: 'https://cashloans.vercel.app',
			imgSrc: CashloansLogo,
			imgCls: 'w-40'
		}
	];
</script>

<ul class="my-3 grid xl:grid-cols-2 gap-x-9 sm:gap-y-9">
	{#each PORTFOLIO_ITEMS as { desc, href, imgSrc, imgCls, title, type }, i}
		<li class="">
			<div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
				<div class="my-auto">
					<a {href} {title} target="_blank" rel="noreferrer">
						<img
							class="rounded-box mx-auto max-h-52 hover:scale-110 transition-transform duration-150 ease-in-out {imgCls ??
								''}"
							src={imgSrc}
							alt=""
						/>
					</a>
				</div>
				<div class="sm:col-span-2">
					<div class="space-y-1">
						<div class="space-y-1 text-lg font-medium leading-6">
							<a {href} title="View Project" target="_blank" rel="noreferrer">
								<h3 class='text-xl'>{title}</h3>
							</a>
							<div class="flex gap-2 items-center">
								<p class="text-secondary">{type}</p>
								<a
									{href}
									title="View Project"
									target="_blank"
									rel="noreferrer"
									class="inline text-gray-400 hover:text-gray-600"
								>
									<ArrowTopRightOnSquare />
								</a>
							</div>
						</div>
						<div class="text-lg">
							<p class="text-gray-600">
								{desc}
							</p>
						</div>
					</div>
				</div>
			</div>
			{#if i !== PORTFOLIO_ITEMS.length - 1}
				<div class="sm:hidden text-slate-800 divider my-9">
					<Sparkles strokeWidth="1.5" />
				</div>
			{/if}
		</li>
	{/each}
</ul>
