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

	$: console.log(form);
	$: if (form) err = suc = '';
</script>

<div class="relative rounded-md">
	<div class="relative mx-auto lg:grid lg:grid-cols-5 rounded-md">
		<!-- Our contact info -->
		<div class=" lg:col-span-2 rounded-md">
			<div class="mx-auto lg:px-10 pb-6">
				<h1>Get In Touch</h1>
				<p class="my-5 text-lg leading-6 text-gray-600">
					We're always looking for new opportunities to work with great people. If you have a
					project you'd like to discuss, or are looking for a career, please get in touch.
				</p>
				<dl class="flex lg:flex-col flex-wrap gap-3 justify-between text-base text-gray-600">
					<div class="">
						<dt class="sr-only">Email</dt>
						<dd class="flex">
							<Envelope />
							<span class="ml-3">rossk29 at gmail dot com</span>
						</dd>
					</div>
					<div class="">
						<dt class="sr-only">Email</dt>
						<dd class="flex">
							<Envelope />
							<span class="ml-3">tyronebdunn at gmail dot com</span>
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<!-- Form Fields -->
		<div class="lg:col-span-3 rounded-md">
			<div class="mx-auto">
				<form class="grid grid-cols-1 gap-y-4" on:submit|preventDefault={submitForm}>
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
					<div class="flex sm:flex-row flex-col gap-3">
						<div class="w-full">
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
						<div class="w-full">
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
							class="btn btn-primary w-full justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2"
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
