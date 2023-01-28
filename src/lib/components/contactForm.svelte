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
	<div class="flex gap-3 my-3">
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

	<div>
		<textarea
			class="textarea textarea-bordered"
			placeholder="Message"
			cols="61"
			rows="8"
			bind:value={form.message}
		/>
	</div>

	<div>
		<button class="btn my-3" class:loading type="submit" disabled={loading}> Submit </button>
	</div>
</form>

{#if err}
	<p class="text-red-500">{err}</p>
{/if}
