<script lang="ts">
	import Bars3 from './icons/bars3.svelte';
	import PivotAngle from '$lib/components/icons/pivot-angle.svelte';

	const routes: { href: string; label: string }[] = [
		// { href: '/', label: 'Home' },
		{ href: '#team', label: 'Team' },
		{ href: '#portfolio', label: 'Portfolio' },
		{ href: '#contact-us', label: 'Contact Us' }
	];
</script>

<nav class="navbar py-8 px-[8%]">
	<div class="navbar-start">
		<a href="/" class="w-14 sm:w-16 h-14 sm:h-16">
			<PivotAngle />
		</a>
	</div>
	<!-- Desktop -->
	<div class="navbar-center">
		<ul class="sm:flex hidden py-10 md:gap-12 gap-6 text-xl">
			{#each routes as { href, label }}
				<li>
					<a {href}><h5>{label}</h5></a>
				</li>
			{/each}
		</ul>
	</div>
	<!-- Mobile -->
	<div class="navbar-end">
		<div class="sm:hidden block dropdown dropdown-end dropdown-hover">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="btn btn-ghost btn-sqaure"><Bars3 /></label>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				{#each routes as { href, label }}
					<li>
						<a {href}><h4>{label}</h4></a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
