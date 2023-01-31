<script lang="ts">
	const routes: { href: string; label: string }[] = [
		{ href: '/', label: 'Home' },
		{ href: '#portfolio', label: 'Portfolio' },
		{ href: '#services', label: 'Services' },
		{ href: '#contact-us', label: 'Contact Us' }
	];
</script>

<nav class="navbar justify-center">
	<div class="sm:hidden block">
		<!-- Mobile -->
		<div class="dropdown dropdown-bottom">
			<label tabindex="0" class="btn m-1">Menu</label>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				{#each routes as { href, label }}
					<li>
						<a {href}>{label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="sm:block hidden">
		<!-- Desktop -->
		<ul class="py-10 flex gap-10 text-xl">
			{#each routes as { href, label }}
				<li>
					<a {href}>{label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
