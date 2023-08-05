<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import FaQs from '$lib/components/FAQs.svelte';
	import Hero from '$lib/components/hero.svelte';
	import CursorArrowRays from '$lib/components/icons/CursorArrowRays.svelte';
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
<div class="flex flex-col gap-20">
	<section id="" class="py-32 lg:py-40">
		<Hero />
	</section>

	<!-- <section id="team">
		<DevProfiles />
	</section> -->

	<div class="divider text-3xl text-neutral">
		<Sparkles />
	</div>

	<section id="services">
		<div class="flex flex-col gap-6">
			<h2 class="sm:text-5xl text-4xl text-center">Our Services</h2>
			<div class="flex gap-3 mx-auto text-neutral">
				<CursorArrowRays />
				<p class="text-lg">Click the logos to learn more!</p>
			</div>

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
		<div class="flex flex-col gap-6">
			<h2 class="sm:text-5xl text-4xl text-center">Projects</h2>
			<p class="text-lg text-neutral text-center">
				A few of the projects we've worked on in the past.
			</p>
			<div class="flex gap-3 mx-auto text-neutral">
				<CursorArrowRays />
				<p class="text-lg">Click to learn more!</p>
			</div>
			<Portfolio openSource={false} />
		</div>

		<div class="flex flex-col gap-6 mt-16">
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
	<section id="faqs">
		<div class="flex flex-col gap-6">
			<h2 class="sm:text-5xl text-4xl text-center">Frequently Asked Questions</h2>
			<p class="text-lg text-neutral text-center">
				Have a question that isn't answered here? <a
					href="#contact-us"
					class="link link-primary link-hover">Contact us</a
				> and we'll get back to you as soon as possible.
			</p>
			<FaQs />
		</div>
	</section>

	<div class="divider text-3xl text-neutral">
		<Sparkles />
	</div>

	<section id="contact-us">
		<ContactForm />
	</section>
</div>
