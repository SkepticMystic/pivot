<script lang="ts">
	import type { ContactUsForm } from '$lib/schema/contactUs';
	import { getProps } from '$lib/utils';
	import axios from 'axios';
	import Envelope from './icons/envelope.svelte';

	let { loading, err, suc, disabled } = getProps();

	let form: ContactUsForm = {
		name: '',
		email: undefined,
		cell: undefined,
		message: ''
	};

	const submitForm = async () => {
		if (!form.name) return (err = 'Please enter your name');
		if (!form.email && !form.cell) return (err = 'Please enter your email or cell number');
		if (!form.message) return (err = 'Please enter a message');

		(err = suc = ''), (loading = true);

		const { data } = await axios.post<{ ok: boolean }>('/api/contact', form);
		if (data.ok) suc = 'Message sent successfully';
		else err = 'Something went wrong, please try again later';

		(loading = false), (disabled = true);
	};

	$: if (form) err = suc = '';
</script>

<div class="relative rounded-md">
	<div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 rounded-md">
		<!-- Our contact info -->
		<div class="pt-16 pb-8 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 rounded-md">
			<div class="mx-auto max-w-lg">
				<h1>Get in touch</h1>
				<p class="mt-3 text-lg leading-6 text-gray-500">
					We're always looking for new opportunities to work with great people. If you have a
					project you'd like to discuss, please get in touch.
				</p>
				<dl class="mt-8 text-base text-gray-500">
					<div class="mt-3">
						<dt class="sr-only">Email</dt>
						<dd class="flex">
							<Envelope />
							<span class="ml-3">rossk29 at gmail dot com</span>
						</dd>
					</div>
				</dl>
				<p class="mt-6 text-base text-gray-500">Looking for careers? Reach out to us.</p>
			</div>
		</div>
		<!-- Form Fields -->
		<div class="pb-16 pt-8 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 rounded-md">
			<div class="mx-auto max-w-lg lg:max-w-none">
				<form class="grid grid-cols-1 gap-y-5" on:submit|preventDefault={submitForm}>
					<div>
						<label for="full-name" class="sr-only">Full name</label>
						<input
							type="text"
							name="full-name"
							id="full-name"
							autocomplete="name"
							class="input input-bordered w-full shadow-sm focus:border-primary-focus focus:ring-primary"
							class:input-error={err.includes('name')}
							placeholder="Full name"
							bind:value={form.name}
						/>
					</div>
					<div>
						<label for="email" class="sr-only">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="input input-bordered w-full shadow-sm focus:border-primary-focus focus:ring-primary"
							class:input-error={err.includes('email')}
							placeholder="Email"
							bind:value={form.email}
						/>
					</div>
					<div>
						<label for="phone" class="sr-only">Phone</label>
						<input
							type="text"
							name="phone"
							id="phone"
							autocomplete="tel"
							class="input input-bordered w-full shadow-sm focus:border-primary-focus focus:ring-primary"
							class:input-error={err.includes('cell')}
							placeholder="Phone"
							bind:value={form.cell}
						/>
					</div>
					<div>
						<label for="message" class="sr-only">Message</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							class="text-base textarea textarea-bordered w-full shadow-sm focus:border-primary-focus focus:ring-primary"
							class:textarea-error={err.includes('message')}
							placeholder="Message"
							bind:value={form.message}
						/>
					</div>
					<div>
						<button
							type="submit"
							class="btn btn-primary justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2"
							class:loading
							disabled={loading || disabled}
						>
							Submit
						</button>
					</div>
				</form>

				{#if err}
					<div class="mt-4 text-red-500">{err}</div>
				{:else if suc}
					<div class="mt-4 text-green-500">{suc}</div>
				{/if}
			</div>
		</div>
	</div>
</div>
