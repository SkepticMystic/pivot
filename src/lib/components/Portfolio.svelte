<script lang="ts">
	import DelveLogo from '$lib/assets/Delve Logo.png';
	import DripcelDroplet from '$lib/assets/Dripcel Circle.png';
	import CashloansLogo from '$lib/assets/cashloans-logo.webp';
	import IqpaidLogo from '$lib/assets/iqpaid-logo.webp';
	import LuciaLogo from '$lib/assets/lucia-logo.svg';
	import ArrowTopRightOnSquare from './icons/arrowTopRightOnSquare.svelte';
	import Sparkles from './icons/sparkles.svelte';

	export let kind: 'project' | 'openSource';

	const PORTFOLIO_ITEMS: {
		title: string;
		type: string;
		kind: 'project' | 'openSource';
		href: string;
		desc: string;
		imgStr?: string;
		imgSrc?: string;
		imgCls?: string;
	}[] = [
		{
			title: 'Dripcel',
			type: 'Web App',
			kind: 'project',
			href: 'https://www.dripcel.com',
			imgSrc: DripcelDroplet,
			desc: 'Built from scratch, Dripcel is an automated SMS marketing platform. Leverging AI-generated insights, and current industry standards. Dripcel is a powerful tool for any business looking to grow their customer base.'
		},
		{
			title: 'Big Data Migration',
			type: 'Data Migration',
			kind: 'project',
			desc: 'A large-scale, continuous data migration project, involving the flow of millions of records between multiple databases. The result was a seamless transition, with no downtime, allowing stakeholders to present the data in a more meaningful way.',
			href: 'https://www.delve.systems',
			imgSrc: DelveLogo
			// TODO: Force max-w, especially on mobile
		},
		{
			title: 'iQPaid Connect',
			type: 'Web App',
			kind: 'project',
			desc: 'A groundbreaking platform that allows users to instantly get rewarded for the data they choose to share with brands. A central focus was on mobile-first design, and a seamless user experience.',
			href: 'https://connect.iqpaid.com',
			imgSrc: IqpaidLogo,
			imgCls: 'w-36'
		},
		{
			title: 'Cashloans',
			type: 'Web App',
			kind: 'project',
			desc: "Instantly apply for a loan with more than 6 South African lenders, and immediately see details of any offers you're accepted for. Create a profile to quickly reapply in future. ",
			href: 'https://cashloans.vercel.app',
			imgSrc: CashloansLogo,
			imgCls: 'w-40'
		},
		{
			title: 'Lucia',
			type: 'Auth Library',
			kind: 'openSource',
			desc: 'Lucia is an auth library for TypeScript that abstracts away the complexity of handling users and sessions. Contributions focus on the MongoDB adapter, and documentation.',
			href: 'https://lucia-auth.com',
			imgSrc: LuciaLogo,
			imgCls: 'w-24'
		},
		{
			title: 'Breadcrumbs',
			type: 'Obsidian Plugin',
			kind: 'openSource',
			desc: 'A powerful way to create structure out of Markdown notes in Obsidian. Breadcrumbs allows you to create a network of notes, and navigate between them with ease.',
			href: 'https://breadcrumbs-wiki.onrender.com/docs/Home',
			imgStr: '🥖',
			imgCls: 'w-24 text-8xl'
		}
	];

	const itemsByKind = PORTFOLIO_ITEMS.filter((item) => item.kind === kind);
</script>

<ul class="my-3 grid xl:grid-cols-2 gap-x-9 sm:gap-y-9">
	{#each itemsByKind as { desc, href, imgStr, imgSrc, imgCls, title, type }, i}
		<li class="">
			<div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
				<div class="my-auto">
					<a {href} {title} target="_blank" rel="noreferrer">
						{#if imgSrc}
							<img
								class="mx-auto hover:scale-110 transition-all duration-150 {imgCls ?? ''}"
								src={imgSrc}
								alt=""
							/>
						{:else}
							<div class="mx-auto hover:scale-110 transition-all duration-150 {imgCls ?? ''}">
								{imgStr}
							</div>
						{/if}
					</a>
				</div>
				<div class="sm:col-span-2">
					<div class="space-y-1">
						<div class="space-y-1 text-lg font-medium leading-6">
							<a {href} title="View Project" target="_blank" rel="noreferrer">
								<h3 class="text-xl">{title}</h3>
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
			{#if i !== itemsByKind.length - 1}
				<div class="sm:hidden text-slate-800 divider my-9">
					<Sparkles strokeWidth="1.5" />
				</div>
			{/if}
		</li>
	{/each}
</ul>
