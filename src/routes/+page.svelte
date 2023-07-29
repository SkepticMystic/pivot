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
		<h1 class="sm:text-5xl text-4xl mb-9">Projects</h1>
		<Portfolio />
	</section>

	<section id="contact-us">
		<ContactForm />
	</section>
</div>
