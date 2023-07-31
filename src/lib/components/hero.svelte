<script>
	import Tag from './tag.svelte';
</script>

<!-- NOTE: Larger, in general -->
<main>
	<div class="mx-auto max-w-2xl">
		<div class="text-center flex flex-col items-center">
			<h1 class="sm:text-7xl text-5xl max-w-2xl">
				Bespoke Solutions Built Just For <span class="text-secondary">You</span>
			</h1>
			<!-- NOTE: Make this copy more results focussed -->
			<p class="mt-5 text-xl text-gray-600">
				Hi! We're Pivot, a small team of developers based in South Africa, working with SMEs to
				build custom software solutions.
			</p>

			<div class="my-4 flex flex-wrap gap-3 justify-center">
				{#each ['Svelte', 'Web-Dev', 'Automation'] as tag}
					<Tag {tag} />
				{/each}
			</div>

			<div class="flex my-3 sm:flex-row flex-col items-center justify-center gap-x-6 gap-y-4">
				<a href="#contact-us" class="btn btn-secondary hover:scale-105"> Work With Us </a>
				<a href="#team" class="text-lg font-semibold leading-7">
					Learn more
					<span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</main>
