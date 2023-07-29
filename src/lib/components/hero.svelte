<script>
	import Tag from './tag.svelte';
</script>

<main>
	<div class="mx-auto max-w-2xl">
		<div class="text-center flex flex-col items-center">
			<h1 class="sm:text-5xl text-4xl">Pivot Dev</h1>
			<p class="mt-5 text-xl text-gray-600">
				We build bespoke solutions for individuals and small businesses.
			</p>

			<div class="my-4 flex flex-wrap gap-3 justify-center">
				{#each ['Svelte', 'Web-Dev', 'Automation'] as tag}
					<Tag {tag} />
				{/each}
			</div>

			<div class="flex my-3 sm:flex-row flex-col items-center justify-center gap-x-6 gap-y-4">
				<a href="#contact-us" class="btn btn-secondary hover:scale-110"> Contact Us </a>
				<a href="#team" class="text-base font-semibold leading-7">
					Learn more
					<span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</main>
