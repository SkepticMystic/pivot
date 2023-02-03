<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import DevProfiles from '$lib/components/devProfiles.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Services from './services.svelte';
</script>

<div class="flex flex-col gap-14 max-w-7xl mx-auto">
	<section id="">
		<DevProfiles />
		<div class="my-7" />
		<!-- <h1 class="my-9">Services</h1> -->
		<Services />
	</section>

	<section id="portfolio">
		<h1 class="my-9">Selected Projects</h1>
		<Portfolio />
	</section>

	<section id="contact-us">
		<!-- <h1 class="my-5">Contact Us</h1> -->
		<ContactForm />
	</section>
</div>
