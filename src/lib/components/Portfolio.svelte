<script lang="ts">
	import { PROJECTS } from '$lib/const/projects';
	import ArrowTopRightOnSquare from './icons/arrowTopRightOnSquare.svelte';
	import Sparkles from './icons/sparkles.svelte';

	export let openSource: boolean;

	const itemsByKind = PROJECTS.filter((item) => item.openSource === openSource);
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
							<a
								{href}
								class="flex gap-2 items-center link link-hover"
								title="View Project"
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
<!-- 
<div class="carousel w-full">
	{#each itemsByKind as { desc, href, imgStr, imgSrc, imgCls, title, type }, i}
		{@const [next, prev] = [i + 1, i - 1]}
		<div id="{openSource ? 'o' : 'p'}{i}" class="carousel-item relative w-full">
			<img src={imgSrc} class="w-40" />
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
