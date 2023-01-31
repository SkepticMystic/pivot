<script lang=ts>
	import Breakpoints from 'svelte-breakpoints';
	import type { BreakpointMatch } from 'svelte-breakpoints';

	const mediaQueries = {
		sm: '(min-width: 0px)',
    	md: '(min-width: 480px)',
	};

	let match: BreakpointMatch;
</script>

<nav class="navbar justify-center">

	<Breakpoints queries={mediaQueries} bind:match>
		{#if $match === 'sm'}
			<div class="dropdown dropdown-bottom">
				<label tabindex="0" class="btn m-1">Menu</label>
				<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
					<!-- TODO: refactor this navigation list -->
					<li>
						<a href="/" on:click={() => window.scrollTo(0, 0)}> Home </a>
					</li>
					<li>
						<a href="#portfolio"> Portfolio </a>
					</li>
					<li>
						<a href="#services"> Services </a>
					</li>
			
					<li>
						<a href="#contact-us"> Contact Us</a>
					</li>
				</ul>
			</div>
		{:else}
			<ul class="py-10 flex gap-10 text-xl">
				<li>
					<a class="hover:underline" href="/" on:click={() => window.scrollTo(0, 0)}> Home </a>
				</li>
				<li>
					<a class="hover:underline" href="#portfolio"> Portfolio </a>
				</li>
				<li>
					<a class="hover:underline" href="#services"> Services </a>
				</li>
		
				<li>
					<a class="hover:underline" href="#contact-us"> Contact Us</a>
				</li>
			</ul>
		{/if}
	</Breakpoints>	
</nav>
