<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import PortfolioItem from '$lib/components/PortfolioItem.svelte';

	const portfolioItems: {
		title?: string;
		href: string;
		imgSrc: string;
		description: string;
	}[] = [
		{
			href: 'https://www.dripcel.com',
			imgSrc: 'dripcel logo.png',
			description: 'Automated SMS drip marketing platform'
		},
		{
			title: 'Sugar',
			href: 'https://www.behance.net/gallery/160950567/Social-Networking-App',
			imgSrc: 'sugar.png',
			description: 'Social media app. Elegant, user-friendly mobile app design'
		}
	];
</script>

<div class="flex gap-7">
	<div>
		<h2>Ross</h2>
		<img class="w-10 rounded-full" src="Ross @ Lexis.jpg" alt="" />
		<p>Web dev stuff</p>
	</div>
</div>

<section id="#portfolio" class="my-14">
	<h1>Selected Projects</h1>

	<ul class="my-3 flex flex-wrap gap-5">
		{#each portfolioItems as { description, href, imgSrc, title }}
			<PortfolioItem {description} {href} {imgSrc} {title} />
		{/each}
	</ul>
</section>

<section id="#services" class="my-14">
	<h1>Services</h1>

	<ul class="my-3 flex flex-wrap gap-7">
		<li>Bespoke Web Apps</li>
		<li>Brand Design</li>
		<li>SEO</li>
		<li>User Metrics</li>
	</ul>

	<p>
		Client-focused, customer-centric, creating website solutions that deliver tangible business
		results, Appnovation's web developers helps brands the ever-changing digital landscape
	</p>
</section>

<section id="#contact" class="my-14">
	<h1>Contact Us</h1>

	<ContactForm />
</section>
