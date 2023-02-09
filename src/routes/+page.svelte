<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import DevProfiles from '$lib/components/devProfiles.svelte';
	import Footer from '$lib/components/footer.svelte';
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
		<h1 class="mb-9">Portfolio</h1>
		<Portfolio />
	</section>

	<section id="contact-us">
		<!-- <h1 class="my-5">Contact Us</h1> -->
		<ContactForm />
	</section>

	<Footer />
</div>
