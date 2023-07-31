<script lang="ts">
	import RossImg from '$lib/assets/Blue Collar Shirt.jpg';
	import type { ComponentType } from 'svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
	import Github from './icons/github.svelte';
	import Tag from './tag.svelte';

	const DEVELOPER_PROFILES: {
		name: string;
		title: string;
		imgSrc: string;
		desc: string;
		skills: string[];
		links: { title: string; href: string; icon?: ComponentType; imgSrc?: string }[];
	}[] = [
		{
			name: 'Ross Keenan',
			title: 'Full-stack Developer',
			imgSrc: RossImg,
			desc: 'Experienced web-developer with a demonstrated history of working in the IT and services industry. Strong product-development experience, with a portfolio of successful projects.',
			skills: ['svelte', 'typescript', 'tailwind', 'mongodb'],
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
		}
	];
</script>

<div class="mx-auto max-w-7xl py-12 lg:py-24">
	<div class="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
		<!-- Our Team Header -->
		<div class="space-y-5 sm:space-y-4">
			<h1 class="sm:text-5xl text-4xl">Our Developer</h1>
			<p class="text-xl text-gray-600">
				We're a small team, with a passion for building. We're always looking for new projects to
				work on, so if you have an idea, <a class="link-secondary" href="/#contact-us"
					>get in touch</a
				>!
			</p>
		</div>

		<!-- Profile list -->
		<div class="">
			<ul class="space-y-12 sm:grid sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
				{#each DEVELOPER_PROFILES as { desc, imgSrc, links, name, skills, title }}
					<li>
						<div class="space-y-4">
							<div class="aspect-h-9 aspect-w-10">
								<img
									class="rounded-box object-cover shadow-lg"
									src={imgSrc}
									alt="Image of {name}"
								/>
							</div>
							<div class="space-y-1 text-lg font-medium leading-6">
								<h3>{name}</h3>
								<p class="text-secondary">{title}</p>
							</div>
							<div class="text-lg">
								<p class="text-gray-600">
									{desc}
								</p>
							</div>

							<ul class="flex gap-2 flex-wrap">
								{#each skills as skill}
									<Tag highlight='btn-info' tag={skill} />
								{/each}
							</ul>

							<ul class="flex space-x-5">
								{#each links as { href, icon, imgSrc, title }}
									<li>
										<a {href} {title} class="text-gray-400 hover:text-gray-600">
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
			</ul>
		</div>
	</div>
</div>
