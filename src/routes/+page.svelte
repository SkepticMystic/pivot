<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import DevProfiles from '$lib/components/devProfiles.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Services from './services.svelte';
</script>

<div class="flex flex-col gap-28">
	<section id="" class="pt-12 sm:pt-16 lg:pt-32">
		<Hero />
	</section>

	<section id="team">
		<Services />
		<DevProfiles />
	</section>

	<section id="projects">
		<div class="flex flex-col gap-7">
			<h1 class="sm:text-5xl text-4xl">Projects</h1>
			<Portfolio kind="project" />
		</div>

		<div class="flex flex-col gap-5 mt-11">
			<h1 class="sm:text-5xl text-4xl">Open Source Contributions</h1>
			<p class="text-lg text-neutral">
				Open source makes the world go round, and we contribute to it as much as we can.
			</p>
			<Portfolio kind="openSource" />
		</div>
	</section>

	<section id="contact-us">
		<ContactForm />
	</section>
</div>
