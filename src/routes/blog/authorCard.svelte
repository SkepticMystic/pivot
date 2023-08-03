<script lang="ts">
	import RossAtLexis from '$lib/assets/Ross @ Lexis.webp';
	import Kofi from '$lib/assets/kofi.webp';
	import Github from '$lib/components/icons/github.svelte';
	import type { BlogPost } from '$lib/interfaces/blog';
	import type { ComponentType } from 'svelte';

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
			desc: "Hi there! I'm a fullstack developer, data-analyst enthusiast, and yoga teacher. Currently living in South Africa, I'm always looking to work on new projects and meet new people.",
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
		<h1 class="text-2xl font-bold my-1">{authorName}</h1>
		<p class="text-neutral">{desc}</p>
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
