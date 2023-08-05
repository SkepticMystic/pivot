<script lang="ts">
	import PivotAngle from './icons/pivot-angle.svelte';
</script>

<footer class="footer p-12">
	<div>
		<a href="/" class="w-20 h-20">
			<PivotAngle />
		</a>
		<p>© {new Date().toISOString().slice(0, 4)} Pivot.</p>
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
		<span class="footer-title">Company</span>
		<a href="/#contact-us" class="link link-hover">Contact</a>
		<a href="/blog" class="link link-hover">Blog</a>
		<a href="/#contact-us" class="link link-hover">Jobs</a>
	</div>
</footer>
