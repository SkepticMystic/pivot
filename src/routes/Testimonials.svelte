<script lang="ts">
	const TESTIMONIALS: {
		name: string;
		title: string;
		company: {
			name: string;
			link: string;
		};
		quote: string;
	}[] = [
		// {
		// 	name: 'Test',
		// 	title: 'Position',
		// 	company: {
		// 		name: 'Delve Systems',
		// 		link: 'https://www.delve.systems'
		// 	},
		// 	quote:
		// 		'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nisl, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nisl, quis ultricies nisl nisl eget ultricies ultrices, nunc nisl ultricies nisl, quis ultricies nisl'
		// },
		{
			name: 'Jason',
			title: 'CEO',
			company: {
				name: 'Delve Systems',
				link: 'https://www.delve.systems'
			},
			quote:
				'Working with Ross is a true pleasure. He is technically proficient, always delivers on time, and exceeds expectations. I wholeheartedly recommend Ross to anyone in need of a talented developer. Ross consistently went <span class="text-secondary">above and beyond</span>, making our collaboration successful and enjoyable.'
		}
	];
</script>

<div class="carousel w-full">
	{#each TESTIMONIALS as { name, title, company, quote }, i}
		{@const next = (i + 1) % TESTIMONIALS.length}
		{@const prev = (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length}

		<div id="slide{i}" class="carousel-item relative w-full pt-5">
			<div class="flex flex-col gap-3 w-full mx-32 bg-base-100 p-5 rounded-box">
				<blockquote class="text-lg text-neutral text-center">
					“{@html quote}”
				</blockquote>

				<div class="flex flex-col gap-3">
					<p class="text-lg font-semibold text-center">
						{name}, {title} @
						<a href={company.link} class="link link-primary" target="_blank">
							{company.name}
						</a>
					</p>
				</div>
			</div>

			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide{prev}" class="btn btn-circle bg-base-100">❮</a>
				<a href="#slide{next}" class="btn btn-circle bg-base-100">❯</a>
			</div>
		</div>
	{/each}
</div>
