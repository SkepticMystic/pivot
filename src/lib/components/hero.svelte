<script>
	import BlueCollarShirt from '$lib/assets/Blue Collar Shirt.jpg';
</script>

<!-- NOTE: Larger, in general -->
<main>
	<div class="mx-auto max-w-2xl">
		<div class="text-center flex flex-col gap-3 items-center">
			<h1 class="sm:text-7xl text-5xl flex items-center gap-5">
				<img
					src={BlueCollarShirt}
					alt=""
					class="w-28 rounded-full hover:scale-110 transition-all"
				/>
				<span class="text-secondary">Ross Keenan</span> ✨
			</h1>

			<p class="mt-5 text-xl text-neutral">
				Hi there! I'm Ross, a software engineer and consultant based in South Africa. I help
				businesses automate their processes and build custom software solutions.
			</p>

			<!-- <div class="my-4 flex flex-wrap gap-3 justify-center">
				{#each ['Web Dev', 'Automation', 'Data Analysis'] as tag}
					<Tag {tag} highlight="btn-secondary" />
				{/each}
			</div> -->

			<div class="flex my-4 sm:flex-row flex-col items-center justify-center gap-x-6 gap-y-4">
				<a href="/#contact" class="btn btn-primary hover:scale-105"> Contact </a>
				<a
					href="/#services"
					class="text-lg font-semibold leading-7 hover:text-secondary transition-all"
				>
					Learn more
					<span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</main>
