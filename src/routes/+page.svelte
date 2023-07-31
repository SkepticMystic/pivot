<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import DevProfiles from '$lib/components/devProfiles.svelte';
	import FaQs from '$lib/components/FAQs.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Services from './services.svelte';
</script>

<!-- NOTE: Really differentiate the sections from each other
	- <hr>
	- Different colours
	- Whitespace
	- More space between sections
-->
<div class="flex flex-col gap-40">
	<section id="" class="pt-12 sm:pt-16 lg:pt-40 pb-40">
		<Hero />
	</section>

	<section id="team">
		<Services />
		<DevProfiles />
	</section>

	<!-- NOTE: Testimonials 
	Even without testimonials, use quotes from leading services in favour of what I offer
	-->

	<section id="projects">
		<div class="flex flex-col gap-7">
			<h2 class="sm:text-5xl text-4xl">Projects</h2>
			<Portfolio kind="project" />
		</div>

		<div class="flex flex-col gap-3 mt-11">
			<h2 class="sm:text-5xl text-4xl">Open Source Contributions</h2>
			<p class="text-lg text-neutral">
				Open source makes the world go round, and we contribute to it as much as we can.
			</p>
			<Portfolio kind="openSource" />
		</div>
	</section>

	<!-- NOTE: FAQs will be nice -->
	<!-- <section id="faqs">
		<FaQs />
	</section> -->

	<section id="contact-us">
		<ContactForm />
	</section>
</div>
