<script>
	import Tag from './tag.svelte';
</script>

<main>
	<div class="mx-auto max-w-2xl pt-12 pb-12 sm:pt-16 lg:pt-32 lg:pb-20">
		<div class="text-center flex flex-col items-center">
			<h1>Pivot Web Development</h1>
			<p class="mt-5 text-xl text-gray-600">
				We build bespoke web apps for your business. We're a team of developers with a passion for
				creating.
			</p>

			<div class="my-4 flex flex-wrap gap-3 justify-center">
				{#each ['Svelte', 'Angular', 'Web-Dev'] as tag}
					<Tag {tag} />
				{/each}
			</div>

			<div class="flex my-3 sm:flex-row flex-col items-center justify-center gap-x-6 gap-y-4">
				<a href="#contact-us" class="btn btn-primary hover:scale-110"> Contact Us </a>
				<a href="#team" class="text-base font-semibold leading-7 text-warning">
					Learn more
					<span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</main>
