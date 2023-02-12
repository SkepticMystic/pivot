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
		if (data.ok) suc = 'Message sent successfully!';
		else err = 'Something went wrong, please try again later';

		(loading = false), (disabled = true);
	};

	$: if (form) err = suc = '';
</script>

<div class="relative rounded-box">
	<div class="relative mx-auto lg:grid lg:grid-cols-5 rounded-box">
		<!-- Our contact info -->
		<div class=" lg:col-span-2 rounded-box">
			<div class="mx-auto lg:px-10 pb-6">
				<h1 class="sm:text-5xl text-4xl">Get In Touch</h1>
				<p class="my-5 text-lg leading-6 text-gray-600">
					We're always looking for new opportunities to work with great people. If you have a
					project you'd like to discuss, or are looking for a career, please get in touch.
				</p>
				<dl class="flex lg:flex-col flex-wrap gap-3 justify-between text-base text-gray-600">
					<div class="">
						<dt class="sr-only">Email</dt>
						<dd>
							<a
								class="link link-primary link-hover group flex gap-2 items-center"
								href="mailto:rossk29@gmail.com"
							>
								<span class="text-secondary group-hover:scale-110">
									<Envelope />
								</span>
								rossk29@gmail.com
							</a>
						</dd>
					</div>
					<div class="">
						<dt class="sr-only">Email</dt>
						<dd>
							<a
								class="link link-primary link-hover group flex gap-2 items-center"
								href="mailto:tyronebdunn@gmail.com"
							>
								<span class="text-secondary group-hover:scale-110">
									<Envelope />
								</span>
								tyronebdunn@gmail.com
							</a>
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<!-- Form Fields -->
		<div class="lg:col-span-3 rounded-box">
			<div class="mx-auto">
				<form class="grid grid-cols-1 gap-y-2" on:submit|preventDefault={submitForm}>
					<div>
						<label for="full-name" class="sr-only">Your name</label>
						<input
							type="text"
							name="full-name"
							id="full-name"
							autocomplete="name"
							class="input input-bordered w-full shadow-sm focus:border-primary-focus focus:ring-primary"
							class:input-error={err.includes('name')}
							placeholder="Your name"
							bind:value={form.name}
						/>
					</div>
					<div class="flex sm:flex-row flex-col gap-3 items-center">
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
						<span class="hidden sm:block">or</span>
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
							class="btn btn-primary w-full justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 hover:scale-[1.02]"
							class:loading
							disabled={loading || disabled}
						>
							Send Message
						</button>
					</div>
				</form>

				{#if err}
					<div class="mt-4 text-error">{err}</div>
				{:else if suc}
					<div class="mt-4 text-success">{suc}</div>
				{/if}
			</div>
		</div>
	</div>
</div>
