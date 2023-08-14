<script lang="ts">
	import PivotAngle from './icons/pivot-angle.svelte';
</script>

<footer class="footer p-12">
	<div class="flex flex-col gap-3">
		<a href="/" class="w-16 h-16">
			<PivotAngle />
		</a>
		<p>
			Made with <a href="https://kit.svelte.dev" class="link">SvelteKit</a>; Hosted on
			<a href="https://vercel.com" class="link">Vercel</a>.
		</p>
	</div>

	<div>
		<span class="footer-title">Services</span>
		<a href="/#services" class="link link-hover">Web Apps</a>
		<a href="/#services" class="link link-hover">Automation</a>
		<a href="/#services" class="link link-hover">Data Analysis</a>
	</div>
	<div>
		<span class="footer-title">Site</span>
		<a href="/" class="link link-hover">Home</a>
		<a href="/#contact" class="link link-hover">Contact</a>
		<a href="/blog" class="link link-hover">Blog</a>
	</div>
</footer>
