<script lang="ts">
	import RossAtLexis from '$lib/assets/Ross @ Lexis.webp';
	import TyProfile from '$lib/assets/ty-profile.webp';
	import Github from '$lib/components/icons/github.svelte';
	import Kofi from '$lib/assets/kofi.webp';
	import type { ComponentType } from 'svelte';
	import type { BlogPost } from '$lib/interfaces/blog';

	export let authorName: BlogPost['metadata']['author'];

	const authors: Record<
		typeof authorName,
		{
			avatar: string;
			desc: string;
			links: { title: string; desc: string; href: string; icon?: ComponentType; imgSrc?: string }[];
		}
	> = {
		'Ross Keenan': {
			avatar: RossAtLexis,
			desc: "I'm Ross Keenan, a fullstack developer, data-analyst enthusiast, and yoga teacher. Currently living in South Africa, I'm always looking to work on new projects and meet new people.",
			links: [
				{
					title: 'Ko-fi',
					desc: 'Buy me a coffee',
					href: 'https://ko-fi.com/skepticmystic',
					imgSrc: Kofi
				},
				{
					title: 'Github',
					desc: 'Check out my code',
					href: 'https://github.com/SkepticMystic',
					icon: Github
				}
			]
		},
		'Tyrone B. Dunn': {
			avatar: TyProfile,
			desc: 'I am a full-stack software engineer with a passion for good design and an expertise in multiple programming languages. Looking to bring your project to life!.',
			links: []
		}
	};

	const { avatar, desc, links } = authors[authorName];
</script>

<div
	class="author flex sm:flex-row flex-col gap-3 items-center border-t border-b border-primary py-2"
>
	<img
		class="rounded-box object-cover shadow-lg w-32 h-[132px]"
		src={avatar}
		alt="Image of {authorName}"
	/>
	<div class="flex flex-col justify-center">
		<h1 class="text-2xl font-bold">{authorName}</h1>
		<p class="text-gray-600">{desc}</p>
		<div class="flex flex-col gap-1 my-3">
			{#each links as { desc, href, title, icon, imgSrc }}
				<span class="flex gap-2 items-center">
					{#if icon}
						<svelte:component this={icon} />
					{:else}
						<img src={imgSrc} alt={title} class="w-5" />
					{/if}
					<a {href}>{desc}</a>
				</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.author h1 {
		@apply my-1;
	}
</style>
