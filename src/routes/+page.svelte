<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import DevProfiles from '$lib/components/devProfiles.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Services from './services.svelte';
</script>

<div class="flex flex-col gap-32">
	<section id="">
		<Hero />
	</section>

	<section id="team">
		<DevProfiles />
		<Services />
	</section>

	<section id="portfolio">
		<h1 class="sm:text-5xl text-4xl mb-7">Portfolio</h1>
		<Portfolio />
	</section>

	<section id="contact-us">
		<ContactForm />
	</section>
</div>
