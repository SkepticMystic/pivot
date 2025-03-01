import LuciaLogo from '$lib/assets/lucia-logo.svg';

import DelveLogo from '$lib/assets/Delve Logo.png';

import DripcelDroplet from '$lib/assets/Dripcel Circle.png';
import DripcelDashboard from '$lib/assets/projects/dripcel/dashboard.png';
import DripcelDocs from '$lib/assets/projects/dripcel/docs.png';
import DripcelGetCredits from '$lib/assets/projects/dripcel/get-credits.png';
import DripcelIntegrations from '$lib/assets/projects/dripcel/integrations.png';
import DripcelProfilemembers from '$lib/assets/projects/dripcel/profile-members.png';
import DripcelSendsreport from '$lib/assets/projects/dripcel/sends-report.png';

import CashloansLogo from '$lib/assets/cashloans-logo.webp';
import CashloansIncomeQuestions from '$lib/assets/projects/cashloans/income-questions.png';
import CashloansJobs from '$lib/assets/projects/cashloans/jobs.png';
import CashloansLanding from '$lib/assets/projects/cashloans/landing.png';
import CashloansResults from '$lib/assets/projects/cashloans/results.png';

import IqpaidLogo from '$lib/assets/iqpaid-logo.webp';
import IqPaidFaqs from '$lib/assets/projects/iqpaid/faqs.png';
import IqPaidLanding from '$lib/assets/projects/iqpaid/landing.png';
import IqPaidProgress from '$lib/assets/projects/iqpaid/progress.png';
import IqPaidQuestions from '$lib/assets/projects/iqpaid/questions.png';

import HYALogo from '$lib/assets/projects/hya/HYA Logo.jpg';

import GithubMark from '$lib/assets/github-mark.svg';
import type { ComponentType } from 'svelte';

export const PROJECTS: {
	title: string;
	slug?: string;
	type: string;
	openSource: boolean;
	href: string;
	desc: string;
	stack: string[];
	logo: {
		str?: string;
		src?: string;
		cls?: string;
		component?: ComponentType;
	};
	otherImgs: { src: string; desc: string }[];
}[] = [
	{
		title: 'Dripcel',
		slug: 'dripcel',
		type: 'Automated SMS Marketing',
		openSource: false,
		href: 'https://www.dripcel.com',
		stack: ['TypeScript', 'Svelte', 'Tailwind', 'MongoDB'],
		logo: {
			src: DripcelDroplet
		},
		otherImgs: [
			{ src: DripcelDashboard, desc: 'Full-featured dashboard' },
			{ src: DripcelSendsreport, desc: 'Detailed reporting' },
			{ src: DripcelIntegrations, desc: 'Integrations with popular tools' },
			{ src: DripcelProfilemembers, desc: 'Team management' },
			{ src: DripcelGetCredits, desc: 'Built-in payment system' },
			{ src: DripcelDocs, desc: 'Comprehensive documentation' }
		],
		desc: 'Built from scratch, leveraging AI-generated insights, and current industry standards. Dripcel is used by South African <span class="text-primary">business leaders</span> to send millions of messages to their customers every week, keeping them in the loop.'
	},
	{
		title: 'Big-Data Pipeline',
		// slug: "delve-data-migration",
		type: 'Database Architecture',
		openSource: false,
		desc: 'A large-scale data pipeline project, involving the flow of millions of records between multiple databases. The implementation was <span class="text-primary">seamless</span>, allowing stakeholders to garner novel insights from their data.',
		href: 'https://www.delve.systems',
		stack: ['TypeScript', 'Node.js', 'MS SQL', 'Digital Ocean'],
		logo: {
			src: DelveLogo,
			cls: 'w-32 sm:pt-0 pt-6'
		},
		otherImgs: []
	},
	{
		title: 'iQPaid Connect',
		slug: 'iqpaid-connect',
		type: 'Market Research Platform',
		openSource: false,
		desc: 'A groundbreaking platform that allows users to instantly get rewarded for the data they choose to share. A central focus was on <span class="text-primary">mobile-first</span> design, and a seamless user experience.',
		href: 'https://connect.iqpaid.com',
		stack: ['TypeScript', 'Svelte', 'Tailwind', 'MongoDB'],
		logo: {
			src: IqpaidLogo,
			cls: 'w-36'
		},
		otherImgs: [
			{
				src: IqPaidLanding,
				desc: 'Landing page'
			},
			{
				src: IqPaidQuestions,
				desc: 'Simple questions, categorised'
			},
			{
				src: IqPaidProgress,
				desc: 'View your progress'
			},
			{
				src: IqPaidFaqs,
				desc: 'FAQs'
			}
		]
	},
	{
		title: 'Cashloans',
		slug: 'cashloans',
		type: 'Loan Comparison Tool',
		openSource: false,
		desc: 'Integrated with more than 6 South African lenders, allowing users to <span class="text-primary">immediately</span> see which offers they\'re eligible for. Used by tens-of-thousands of South Africans every month.',
		href: 'https://cashloans.vercel.app',
		stack: ['TypeScript', 'Svelte', 'Tailwind', 'MongoDB'],
		logo: {
			src: CashloansLogo,
			cls: 'w-40 sm:pt-0 pt-6'
		},
		otherImgs: [
			{
				src: CashloansLanding,
				desc: 'Simple, understandable form'
			},
			{
				src: CashloansIncomeQuestions,
				desc: 'Appealing design'
			},
			{
				src: CashloansResults,
				desc: 'Instant results'
			},
			{
				src: CashloansJobs,
				desc: 'Job selection'
			}
		]
	},
	{
		title: 'Hermanus Young Adults',
		slug: 'hya',
		type: 'Community Website',
		openSource: false,
		desc: "A website for the Hermanus Young Adults community, featuring a <span class='text-primary'>calendar</span>, <span class='text-primary'>events</span>, and <span class='text-primary'>resources</span>.",
		href: 'https://app.hya.social',
		logo: {
			src: HYALogo,
			cls: 'w-24 rounded-full'
		},
		stack: ['TypeScript', 'Svelte', 'Tailwind', 'MongoDB'],
		otherImgs: []
	},
	{
		title: 'Lucia',
		// slug: "lucia",
		type: 'Auth Library',
		openSource: true,
		stack: [],
		otherImgs: [],
		desc: "Lucia is an auth library for TypeScript that abstracts away the complexity of handling users and sessions. Contributions focus on the <span class='text-primary'>MongoDB</span> adapter.",
		href: 'https://lucia-auth.com',
		logo: {
			src: LuciaLogo,
			cls: 'w-24'
		}
	},
	{
		title: 'Breadcrumbs',
		// slug: "breadcrumbs",
		type: 'Obsidian Plugin',
		openSource: true,
		stack: [],
		otherImgs: [],
		desc: "A powerful way to create structure out of Markdown notes in Obsidian. Breadcrumbs allows you to create a <span class='text-primary'>network</span> of notes, and navigate between them with ease.",
		href: 'https://breadcrumbs-wiki.onrender.com/docs/Home',
		logo: {
			str: '🥖',
			cls: 'max-w-24 text-7xl text-center'
		}
	},
	{
		title: 'Other Contributions',
		// slug: "breadcrumbs",
		type: 'GitHub',
		openSource: true,
		stack: [],
		otherImgs: [],
		desc: 'See more of my open-source contributions on <span class="text-primary">GitHub</span>, including my libraries, plugins, and tools.',
		href: 'https://github.com/SkepticMystic',
		logo: {
			src: GithubMark,
			cls: 'w-20'
		}
	}
];
