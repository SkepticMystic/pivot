<script lang="ts">
	import ContactForm from '$lib/components/contactForm.svelte';
	import DevProfile from '$lib/components/devProfile.svelte';
	import PortfolioItem from '$lib/components/PortfolioItem.svelte';
	import { DEVELOPER_PROFILES, PORTFOLIO_ITEMS } from '$lib/const';
	import Services from './services.svelte';
</script>

<div class="flex flex-col gap-14">
	<section id="">
		<div class="flex gap-7">
			{#each DEVELOPER_PROFILES as dev}
				<DevProfile {dev} />
			{/each}
		</div>
	</section>

	<section id="portfolio">
		<h1>Selected Projects</h1>
		<ul class="my-3 flex flex-wrap gap-5">
			{#each PORTFOLIO_ITEMS as item}
				<PortfolioItem {item} />
			{/each}
		</ul>
	</section>

	<section id="services">
		<h1>Services</h1>
		<Services />
	</section>

	<section id="contact-us">
		<h1>Contact Us</h1>
		<ContactForm />
	</section>
</div>
