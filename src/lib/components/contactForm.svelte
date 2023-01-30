<script lang="ts">
	import { getProps } from '$lib/utils';
	import axios from 'axios';

	let { loading, err } = getProps();

	let form: {
		name: string;
		email: string;
		message: string;
	} = {
		name: '',
		email: '',
		message: ''
	};

	const submitForm = async () => {
		if (!form.name || !form.email || !form.message) return (err = 'Please fill out all fields');
		loading = true;

		const { data } = await axios.post<{ ok: boolean }>('/api/contact', form);

		console.log(data);

		loading = false;
	};
</script>

<form class="flex flex-col gap-3" on:submit|preventDefault={submitForm}>
	<div class="flex flex-wrap gap-3">
		<input
			class="input input-bordered"
			type="text"
			placeholder="Name"
			autocomplete="name"
			bind:value={form.name}
		/>
		<input
			class="input input-bordered"
			type="email"
			placeholder="Email"
			autocomplete="email"
			bind:value={form.email}
		/>
	</div>

	<div class="form-control max-w-[445px] justify-center">
		<input
			class="input input-bordered"
			placeholder="Message"
			type="text"
			bind:value={form.message}
		/>
	</div>

	<div>
		<button class="btn" class:loading type="submit" disabled={loading}> Submit </button>
	</div>
</form>

{#if err}
	<p class="text-red-500">{err}</p>
{/if}
