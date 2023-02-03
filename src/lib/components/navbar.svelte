<script lang="ts">
	import Bars3 from './icons/bars3.svelte';

	const routes: { href: string; label: string }[] = [
		{ href: '/', label: 'Home' },
		{ href: '#portfolio', label: 'Portfolio' },
		{ href: '#services', label: 'Services' },
		{ href: '#contact-us', label: 'Contact Us' }
	];
</script>

<nav class="navbar sm:justify-center p-4">
	<div class="sm:hidden block">
		<!-- Mobile -->
		<div class="dropdown dropdown-bottom dropdown-hover">
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
	<div class="sm:block hidden">
		<!-- Desktop -->
		<ul class="py-10 flex gap-12 text-xl">
			{#each routes as { href, label }}
				<li>
					<a {href}><h5>{label}</h5></a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
