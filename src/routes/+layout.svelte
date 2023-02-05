<script lang="ts">
	import ArrowSmallUp from '$lib/components/icons/arrowSmallUp.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';

	// import { partytownSnippet } from '@builder.io/partytown/integration';
	// import { onMount } from 'svelte';
	// // Add the Partytown script to the DOM head
	// let scriptEl: HTMLScriptElement;
	// onMount(() => {
	// 	if (scriptEl) scriptEl.textContent = partytownSnippet();
	// });

	let y: number;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
	<!-- Config options -->
	<!-- <script>
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://shell-company-portfolio.vercel.app' + '/proxytown';

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`);

					const gtmId = new URL(url).searchParams.get('id');
					gtmId && proxyUrl.searchParams.append('id', gtmId);

					return proxyUrl;
				} else if (url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`);

					return proxyUrl;
				}

				return url;
			}
		};
	</script> -->

	<!-- `partytownSnippet` is inserted here -->
	<!-- <script bind:this={scriptEl}></script> -->

	<!-- Google tag (gtag.js) -->
	<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-MD58DCKEFS"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-MD58DCKEFS', {
			page_path: window.location.pathname
		});
	</script> -->
</svelte:head>

<div class="bg-[#f3ebe1] font-['Roboto']">
	<Navbar />

	<main class="px-[8%]">
		<slot />
	</main>

	{#if y > 100}
		<button
			class="btn btn-primary rounded-full btn-square fixed bottom-5 right-5 md:bottom-8 md:right-8 hover:scale-110"
			title="Back to top"
			transition:fly={{ duration: 400 }}
			on:click={() => window.scrollTo(0, 0)}
		>
			<ArrowSmallUp />
		</button>
	{/if}
</div>
