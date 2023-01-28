<script lang="ts">
	import '../app.css';
</script>

<nav>
	<ul class="py-10 flex gap-10 justify-center text-xl font-serif">
		<li>
			<a class="hover:underline" href="/" on:click={() => window.scrollTo(0, 0)}> Home </a>
		</li>
		<li>
			<a class="hover:underline" href="#blogs">Blogs</a>
		</li>
		<li>
			<a class="hover:underline" href="#portfolio">Portfolio</a>
		</li>
	</ul>
</nav>

<div class="p-10">
	<slot />
</div>
