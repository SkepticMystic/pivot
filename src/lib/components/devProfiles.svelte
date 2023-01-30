<script lang="ts">
	import type { ComponentType } from 'svelte';

	const DEVELOPER_PROFILES: {
		name: string;
		imgSrc: string;
		desc: string;
		links: { href: string; icon?: ComponentType; imgSrc?: string }[];
	}[] = [
		{
			name: 'Ross Keenan',
			imgSrc: 'Ross @ Lexis.jpg',
			desc: 'Full Stack Developer',
			links: [
				{
					href: 'https://www.linkedin.com/in/ross-keenan-b4429b12b/'
					// icon: LinkedinIcon,
				},
				{
					href: 'https://github.com/SkepticMystic'
					// icon: GithubIcon,
				}
			]
		},
		{
			name: 'Tyrone Dunn',
			imgSrc: '',
			desc: 'Full Stack Developer',
			links: [
				{
					href: 'https://www.linkedin.com/in/ross-keenan-b4429b12b/'
					// icon: LinkedinIcon,
				},
				{
					href: 'https://github.com/SkepticMystic'
					// icon: GithubIcon,
				}
			]
		}
	];
</script>

<div class="flex flex-wrap justify-evenly gap-x-40 gap-y-20">
	{#each DEVELOPER_PROFILES as { desc, imgSrc, links, name }}
		<div>
			<h2>{name}</h2>
			<img class="w-10 rounded-full" src={imgSrc} alt="" />
			<p>{desc}</p>
			<div class="flex flex-wrap gap-1">
				{#each links as { href, icon }}
					<a {href}>
						<svelte:component this={icon} />
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
