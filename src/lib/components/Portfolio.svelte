<script lang="ts">
	import { PROJECTS } from '$lib/const/projects';
	import ArrowTopRightOnSquare from './icons/arrowTopRightOnSquare.svelte';

	export let openSource: boolean;

	const itemsByKind = PROJECTS.filter((item) => item.openSource === openSource);
</script>

<ul class="my-3 grid xl:grid-cols-2 gap-5">
	{#each itemsByKind as { desc, href, slug, logo, title, type }, i}
		<li
			class="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:space-y-0 space-y-10 bg-base-200 rounded-box border p-5 shadow hover:shadow-xl transition-all hover:scale-[1.02]"
		>
			<a
				href={slug ? `/projects/${slug}` : href}
				title={slug ? `See more about ${title}` : 'View Site'}
				target={slug ? undefined : '_blank'}
				rel={slug ? undefined : 'noreferrer'}
				class="my-auto"
			>
				{#if logo.src}
					<img class="mx-auto {logo.cls ?? ''}" src={logo.src} alt="" />
				{:else if logo.str}
					<div class="mx-auto {logo.cls ?? ''}">
						{logo.str}
					</div>
				{:else if logo.component}
					<svelte:component this={logo.component} class="mx-auto {logo.cls ?? ''}" />
				{/if}
			</a>

			<div class="sm:col-span-3">
				<div class="space-y-1">
					<div class="space-y-1 text-lg font-medium leading-6">
						<a
							{href}
							class="flex gap-2 items-center link link-hover"
							title="View site"
							target="_blank"
							rel="noreferrer"
						>
							<h3 class="text-xl">{title}</h3>

							<span class="text-neutral">
								<ArrowTopRightOnSquare />
							</span>
						</a>

						<p class="text-accent">{type}</p>
					</div>

					<div class="text-lg">
						<p class="text-neutral">
							{@html desc}
						</p>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
<!-- 
<div class="carousel w-full">
	{#each itemsByKind as { desc, href, logo.str, logo.src, logo.cls, title, type }, i}
		{@const [next, prev] = [i + 1, i - 1]}
		<div id="{openSource ? 'o' : 'p'}{i}" class="carousel-item relative w-full">
			<img src={logo.src} class="w-40" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a
					href="#{openSource ? 'o' : 'p'}{prev === -1 ? itemsByKind.length - 1 : prev}"
					class="btn btn-circle"
				>
					❮
				</a>
				<a
					href="#{openSource ? 'o' : 'p'}{next === itemsByKind.length ? 0 : next}"
					class="btn btn-circle"
				>
					❯
				</a>
			</div>
		</div>
	{/each}
</div> -->
