<script lang="ts">
	import Bars3 from './icons/bars3.svelte';
	import PivotAngle from '$lib/components/icons/pivot-angle.svelte';

	const routes: { href: string; label: string }[] = [
		{ href: '/#team', label: 'About' },
		{ href: '/#services', label: 'Services' },
		// { href: '/#faqs', label: 'FAQs' },
		{ href: '/#projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<!-- NOTE: Make sticky -->
<nav class="navbar py-4 px-[8%]">
	<div class="navbar-start">
		<a href="/" class="w-12 sm:w-14 h-12 sm:h-14">
			<PivotAngle />
		</a>
	</div>

	<!-- Desktop -->
	<div class="navbar-center">
		<ul class="sm:flex hidden py-10 md:gap-12 gap-6 text-xl">
			{#each routes as { href, label }}
				<li class="hover:text-secondary transition-all">
					<a {href}><h5>{label}</h5></a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="navbar-end">
		<div class="sm:block hidden">
			<a href="#contact-us" class="btn btn-primary hover:scale-105"> Get In Touch </a>
		</div>

		<!-- Mobile -->
		<div class="sm:hidden block dropdown dropdown-end dropdown-hover">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="btn btn-ghost btn-sqaure"><Bars3 /></label>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				{#each routes as { href, label }}
					<li>
						<a {href} class="btn btn-ghost"><h4>{label}</h4></a>
					</li>
				{/each}
				<li>
					<a href="#contact-us" class="btn btn-primary"><h4>Contact Us</h4></a>
				</li>
			</ul>
		</div>
	</div>
</nav>
