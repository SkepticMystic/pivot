<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Github from './icons/github.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';

	const DEVELOPER_PROFILES: {
		name: string;
		title: string;
		imgSrc: string;
		desc: string;
		links: { title: string; href: string; icon?: ComponentType; imgSrc?: string }[];
	}[] = [
		{
			name: 'Ross Keenan',
			title: 'Back-end Specialist',
			imgSrc: 'Ross @ Lexis.jpg',
			desc: 'Experienced web-developer with a demonstrated history of working in the IT and services industry. Skilled in TypeScript, Svelte, Tailwind and MongoDB. Strong product-development experience, with a portfolio of successful projects.',
			links: [
				{
					title: 'LinkedIn',
					href: 'https://www.linkedin.com/in/ross-keenan-b4429b12b/',
					icon: LinkedIn
				},
				{
					title: 'Github',
					href: 'https://github.com/SkepticMystic',
					icon: Github
				}
			]
		},
		{
			name: 'Tyrone Dunn',
			title: 'Front-end Specialist',
			imgSrc: 'ty-profile.jpg',
			desc: 'Full-stack software engineer with a passion for front-end design and expertise in multiple programming languages (C++, Java, JavaScript, Python). Skilled in Angular, MongoDB, and the Adobe Creative Suite.',
			links: [
				// {
				//  title: 'LinkedIn',
				// 	href: 'https://www.linkedin.com/in/ross-keenan-b4429b12b/',
				// 	icon: LinkedIn
				// },
				{
					title: 'Github',
					href: 'https://github.com/tyronebdunn',
					icon: Github
				}
			]
		}
	];
</script>

<div class="">
	<div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
		<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
			<!-- Our Team Header -->
			<div class="space-y-5 sm:space-y-4">
				<h1>Our Team</h1>
				<p class="text-xl text-gray-500">
					We are a team of passionate developers who are dedicated to creating innovative and
					visually appealing software solutions. We're always looking for new opportunities to grow,
					so feel free to contact us!
				</p>
			</div>
			<!-- Profile list -->
			<div class="lg:col-span-2">
				<ul
					class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
				>
					{#each DEVELOPER_PROFILES as { desc, imgSrc, links, name, title }}
						<li>
							<div class="space-y-4">
								<div class="aspect-h-9 aspect-w-10">
									<img
										class="rounded-lg object-cover shadow-lg"
										src={imgSrc}
										alt="Image of {name}"
									/>
								</div>
								<div class="space-y-1 text-lg font-medium leading-6">
									<h3>{name}</h3>
									<p class="text-warning">{title}</p>
								</div>
								<div class="text-lg">
									<p class="text-gray-500">
										{desc}
									</p>
								</div>

								<ul class="flex space-x-5">
									{#each links as { href, icon, imgSrc, title }}
										<li>
											<a {href} {title} class="text-gray-400 hover:text-gray-500">
												{#if icon}
													<svelte:component this={icon} />
												{:else}
													<img src={imgSrc} alt="" />
												{/if}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</li>
					{/each}

					<!-- More people... -->
				</ul>
			</div>
		</div>
	</div>
</div>
