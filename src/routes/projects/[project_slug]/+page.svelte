<script lang="ts">
	import { page } from '$app/stores';
	import Carousel from '$lib/components/daisy/Carousel.svelte';
	import ArrowTopRightOnSquare from '$lib/components/icons/arrowTopRightOnSquare.svelte';
	import Tag from '$lib/components/tag.svelte';
	import { PROJECTS } from '$lib/const/projects';

	const project = PROJECTS.find((p) => p.slug === $page.params.project_slug);
</script>

{#if project}
	<div class="flex flex-col gap-5">
		<div class="flex gap-5 items-center mx-auto">
			<h1 class="text-5xl text-center">{project.title}</h1>
			<a href={project.href} class="link" title="View Project" target="_blank" rel="noreferrer">
				<ArrowTopRightOnSquare h="h-8" w="w-8" />
			</a>
		</div>

		<p class="text-accent text-center text-xl font-semibold">{project.type}</p>

		<p class="text-neutral text-lg max-w-4xl mx-auto">
			{@html project.desc}
		</p>

		<div class="flex flex-wrap gap-2 mx-auto">
			{#each project.stack as tag}
				<Tag {tag} highlight="btn-secondary" />
			{/each}
		</div>

		<h2 class="text-3xl text-center mt-3">Screenshots</h2>

		<Carousel imgs={project.otherImgs} />

		<!-- <div class="grid md:grid-cols-2 gap-5">
			{#each project.otherImgs ?? [] as { src, desc }}
				<div class="flex flex-col justify-between gap-2">
					<a href={src}>
						<img {src} alt={desc} class="rounded hover:scale-[1.02] transition-all" />
					</a>
					<p class="text-center text-neutral text-lg">{desc}</p>
				</div>
			{/each}
		</div> -->
	</div>
{:else}
	<p class="text-neutral">Project not found</p>
{/if}
