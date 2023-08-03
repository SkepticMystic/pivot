<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import DevProfiles from '$lib/components/devProfiles.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Sparkles from '$lib/components/icons/sparkles.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Services from './services.svelte';
</script>

<!-- NOTE: Really differentiate the sections from each other
	- <hr>
	- Different colours
	- Whitespace
	- More space between sections
-->
<div class="flex flex-col gap-32">
	<section id="" class="pt-12 sm:pt-16 lg:pt-40 pb-40">
		<Hero />
	</section>

	<section id="team">
		<DevProfiles />
	</section>

	<div class="divider text-3xl text-neutral">
		<Sparkles />
	</div>

	<section id="services">
		<div class="flex flex-col gap-11">
			<h2 class="sm:text-5xl text-4xl text-center">Our Services</h2>
			<Services />
		</div>
	</section>

	<!-- NOTE: Testimonials 
	Even without testimonials, use quotes from leading services in favour of what I offer
	-->

	<div class="divider text-3xl text-neutral">
		<Sparkles />
	</div>

	<section id="projects">
		<div class="flex flex-col gap-11">
			<h2 class="sm:text-5xl text-4xl text-center">Projects</h2>
			<Portfolio openSource={false} />
		</div>

		<div class="flex flex-col gap-5 mt-16">
			<h2 class="sm:text-5xl text-4xl text-center">Open Source Contributions</h2>
			<p class="text-lg text-neutral text-center">
				Open source makes the world go round, and we contribute to it as much as we can.
			</p>
			<Portfolio openSource={true} />
		</div>
	</section>

	<div class="divider text-3xl text-neutral">
		<Sparkles />
	</div>

	<!-- NOTE: FAQs will be nice -->
	<!-- <section id="faqs">
		<div class="flex flex-col gap-11">
			<h2 class="sm:text-5xl text-4xl text-center">FAQs</h2>
			<FaQs />
		</div>
	</section> 
	
	<div class="divider text-3xl text-neutral">
		<Sparkles />
	</div>
-->

	<section id="contact-us">
		<ContactForm />
	</section>
</div>
