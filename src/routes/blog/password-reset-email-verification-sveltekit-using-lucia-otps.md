---
title: Use OTPs and Lucia to secure your SvelteKit app with Password Reset, Email Verification, and more!
author: Ross Keenan
createdAt: 2023-02-12
description: In this post, I'll show you how to use Lucia to implement password reset and email verification in your SvelteKit app using OTPs.
tags:
  - Lucia
  - SvelteKit
  - OTP
  - Password Reset
  - Email Verification
  - Auth
---

In this post, I'll show you how to use Lucia to implement password reset and email verification in your SvelteKit app using OTPs.

## Prerequisites

- A SvelteKit app
- A MongoDB database
- Basic email/password authentication
  - You can use <a href="add-user-auth-to-sveltekit-with-lucia-mongodb" target="_blank">this guide</a> to set it up
  - If you'd like to start from a working template, use this <a href="https://github.com/SkepticMystic/sveltekit-lucia-mongo-tutorial" target="_blank">SvelteKit + Lucia + MongoDB</a> repo
- A way to send emails
  - You can use <a href="https://mailtrap.io/" target="_blank">Mailtrap</a> for free dev testing
  - The link for the email and password-reset will also be console logged for testing

## Mongoose Model

First, we'll need to create a Mongoose model for our OTPs. We'll use the `OTPs` collection for this.
In `src/lib/models/OTPs.ts`:

```ts
// This comes from the Lucia startup guide
import { auth } from '$lib/server/lucia';
import mongoose from 'mongoose';

// Every OTP has the following properties
export interface OTPBase {
	// The user that the OTP is for
	userId: string;
	// The token that the user will use to verify the OTP
	token: string;
	// An optional expiry date for the OTP
	expiresAt?: Date;
}

// OTPs can be of different kinds
// We use this to prevent one token from being used for multiple purposes
export interface EmailVerificationOTP extends OTPBase {
	kind: 'email-verification';
}

export interface PasswordResetOTP extends OTPBase {
	kind: 'password-reset';
}

export type OTP = EmailVerificationOTP | PasswordResetOTP;

const modelName = 'OTPs';
export const OTPs =
	mongoose.models[modelName] ||
	mongoose.model<OTP>(
		modelName,
		new mongoose.Schema(
			{
				userId: {
					type: String,
					required: true,
					ref: 'user'
				},
				token: {
					type: String,
					required: true,
					// Use the crypto Web API to generate a random token
					default: () => crypto.randomUUID()
				},
				expiresAt: {
					type: Date
				},
				kind: {
					type: String,
					required: true,
					enum: ['email-verification', 'password-reset']
				}
			},
			{ timestamps: true }
		),
		modelName
	);
```

## Utility Functions

Next, we'll create some utility functions to help us with our OTPs.
You can add these in a different file, but I've added them to `src/lib/models/OTPs.ts`:

```ts
// Check if an OTP is expired
// If it doesn't have an expiry date, it's never expired
export const isOPTExpired = <T extends { expiresAt?: Date }>(otp: T) => {
	if (otp.expiresAt === undefined) return false;
	else return otp.expiresAt.getTime() < Date.now();
};

/**
 * Return an existing OTP if it exists and is not expired,
 *   or create a new one if it doesn't exist or is expired.
 */
export const getExistingOrNewOTP = async (options: {
	userId: string;
	kind: OTP['kind'];
	expiresAt?: Date;
}) => {
	const { userId, kind, expiresAt } = options;

	// Check if there is an existing OTP for that user of that kind
	const existing = await OTPs.findOne({ userId, kind }).exec();

	if (existing) {
		if (isOPTExpired(existing)) {
			console.log('Existing OTP expired, creating new one');
			const [newOTP, _removeOld] = await Promise.all([
				OTPs.create({ userId, kind, expiresAt }),
				existing.remove()
			]);

			return newOTP;
		} else {
			console.log('Existing OTP not expired, returning it');
			return existing;
		}
	} else {
		console.log('No existing OTP, creating new one');
		return OTPs.create({ userId, kind, expiresAt });
	}
};

/**
 * Given a token, and the kind of OTP, returns the user and the OTP if it exists and is not expired.
 *
 * If the OTP is expired, it will be deleted if `deleteIfExpired` is true.
 *
 * If the user is not found, the OTP will be deleted.
 */
export const validateOTP = async (token: string, kind: OTP['kind']) => {
	const otp = await OTPs.findOne({ token, kind }).exec();
	if (!otp) {
		console.log('OTP not found');
		return { ok: <const>false };
	}

	if (isOPTExpired(otp)) {
		console.log('OTP expired');
		await otp.remove();
		return { ok: <const>false };
	}

	const user = await auth.getUser(otp.userId);
	if (!user) {
		console.log('User not found');
		await otp.remove();
		return { ok: <const>false };
	}

	return { ok: <const>true, user, otp };
};
```

We'll use `getExistingOrNewOTP` to create a new OTP for a user when they request a password reset or email verification.

And we'll use `validateOTP` to validate an OTP when the user tries to verify it.

## Password Reset

### Create the Password Reset OTP

Now, we'll create a `src/routes/forgot-password/+page.svelte` route for the user to request a password reset.

```svelte
<script lang="ts">
	import type { ActionResult } from '@sveltejs/kit';
	import axios from 'axios';

	let email: string;
	let err = '';
	let suc = '';

	const forgotPassword = async () => {
		err = suc = '';

		try {
			const { data } = await axios.postForm<ActionResult>('', { email });

			if (data.type === 'success') suc = 'Check your email for a link to reset your password.';
			else err = 'There was an error sending the email.';
		} catch (error) {
			console.log(error);
			// Convoluted way to get the error message from axios
			err = error?.response?.data?.error?.message;
		}
	};

	$: if (email) err = suc = '';
</script>

<form on:submit|preventDefault={forgotPassword}>
	<input class="input" type="email" autocomplete="email" placeholder="Email" bind:value={email} />

	<button class="my-4 btn btn-primary" type="submit" disabled={!email}>
		Send Password Reset Email
	</button>

	{#if err}
		<div class="text-error text-sm">{err}</div>
	{:else if suc}
		<div class="text-success text-sm">{suc}</div>
	{/if}
</form>
```

Then, in that route's <a href="https://kit.svelte.dev/docs/form-actions" target="_blank">actions</a>, we'll create the OTP and send the email.
This is in the `src/routes/forgot-password/+page.server.ts` file.

```ts
import { auth } from '$lib/server/lucia';
import { getExistingOrNewOTP } from '$lib/models/OTPs';
import { type Actions, error } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, url }) => {
		const form = await request.formData();
		const email = form.get('email');
		if (typeof email !== 'string') throw error(400, 'Invalid email');

		const { user } = await auth.getKeyUser('email', email);
		if (!user) {
			// Don't reveal whether the email exists or not
			return { ok: true };
		}

		const { userId } = user;
		const OTP = await getExistingOrNewOTP({
			userId,
			kind: 'password-reset',
			expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24)
		});

		const href = `${url.origin}/reset-password?token=${OTP.token}`;
		console.log(href);
		console.log('TODO: sendEmail');

		return { ok: true };
	}
};
```

### Use the Password Reset OTP

The user can now generate a password reset OTP by entering their email address.
When they click the link, they'll be taken to the `src/routes/reset-password/+page.svelte` route, where they can enter a new password.

```svelte
<script lang="ts">
	import type { ActionResult } from '@sveltejs/kit';
	import axios from 'axios';

	let newPass: string;
	let confirmPass: string;
	let err = '';
	let suc = '';

	const resetPassword = async () => {
		if (newPass !== confirmPass) return (err = 'Passwords do not match');

		err = suc = '';

		try {
			const { data } = await axios.postForm<ActionResult>('', { newPass });
			if (data.type === 'success') {
				suc = 'Password changed successfully';
				window.location.href = '/signin';
			} else err = 'Something went wrong';
		} catch (error) {
			console.log(error);
			err = error?.response?.data?.error?.message;
		}
	};

	$: if (newPass || confirmPass) err = suc = '';
</script>

<form on:submit|preventDefault={resetPassword}>
	<input
		class="input"
		type="password"
		autocomplete="new-password"
		placeholder="New Password"
		bind:value={newPass}
	/>
	<input
		class="input"
		type="password"
		autocomplete="new-password"
		placeholder="Confirm Password"
		bind:value={confirmPass}
	/>

	<button class="my-4 btn btn-primary" type="submit" disabled={!newPass || !confirmPass}>
		Reset Password
	</button>

	{#if err}
		<div class="text-error text-sm">{err}</div>
	{:else if suc}
		<div class="text-success text-sm">{suc}</div>
	{/if}
</form>
```

This form will get sent to `src/routes/reset-password/+page.server.ts`, where we'll validate the OTP and change the user's password.

```ts
import { auth } from '$lib/server/lucia';
import { validateOTP } from '$lib/models/OTPs';
import { error, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, url }) => {
		const form = await request.formData();
		const newPass = form.get('newPass');
		const token = url.searchParams.get('token');

		// Validate the form data and token
		if (typeof newPass !== 'string') throw error(400, 'Invalid form data');
		if (typeof token !== 'string') throw error(400, 'Invalid token');

		const check = await validateOTP(token, 'password-reset');
		if (!check.ok) throw error(400, 'Invalid token');

		const { user, otp } = check;
		try {
			await auth.updateKeyPassword('email', user.email, newPass);
			// Remove the OTP so it can't be used again
			await otp.remove();

			return { ok: true };
		} catch (err) {
			console.log(err);
			throw error(500, 'Something went wrong');
		}
	}
};
```

Let's test it out. We'll go to `/forgot-password` and enter an email address. If the email address exists, we'll see a success message. If it doesn't, there'll be an error message.

Then, check the console to see the link to the password reset page. Copy that link and paste it into the browser, and we should see the password reset form.

Enter a new password and confirm it, and we should see a success message and be redirected to the sign-in page.

## Email Verification

The last thing we'll add is email verification. When a user signs up, they'll be sent an email with a link to verify their email address.

This flow works very similarly to the password reset flow. We'll create an OTP for email verification, send it to the user, and then validate it when they click the link.

### Storing the Email Verification Status

One difference is that we need to store the `emailVerified` status in the database.
Let's first change our `src/app.d.ts` types to reflect the new field. In your existing types, update the `UserAttributes` type to include the `emailVerified` field.

```ts
type UserAttributes = {
	email: string;
	emailVerified: boolean;
};
```

Next, we add a `emailVerified` field to the `User` model, and update the Lucia `transformUserData` function to return this field.
In `src/lib/server/lucia.ts`, our existing `User` model should now look like this:

```ts
export const User: Model<DBUser> =
	mongoose.models['user'] ||
	mongoose.model(
		'user',
		new mongoose.Schema(
			{
				_id: String,
				email: String,
				// Add the emailVerified field
				emailVerified: {
					type: Boolean,
					required: true,
					default: false
				}
			},
			{ _id: false }
		)
	);

// ... other models

export const auth = lucia({
	// Pass the existing mongoose connection to the adapter
	adapter: adapter(mongoose),
	// Let Lucia know which environment we're in
	env: dev ? 'DEV' : 'PROD',
	// When Lucia returns a user from the database, it will pass it through this function
	transformUserData: ({ id, email, emailVerified }) => ({
		userId: id,
		email,
		// Add the emailVerified field
		emailVerified
	})
});
```

### Create the Email Verification OTP

When a user signs up, we'll create an OTP for email verification and send them an email with a link to verify their email address.

Nothing needs to change in the `src/routes/signup/+page.svelte` file, but we'll need to add some code to `src/routes/signup/+page.server.ts`.

```ts
import { auth } from '$lib/server/lucia';
import { OTPs } from '$lib/models/OTPs';
import { error, json, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals, url }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		// Validate the form data
		if (typeof email !== 'string' || typeof password !== 'string')
			throw error(400, 'Invalid form data');

		try {
			const { userId } = await auth.createUser({
				key: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					email,
					// Add the emailVerified field
					emailVerified: false
				}
			});

			// If successful, we know there no existing email-verification OTPs,
			//   since we just created the user.
			//   So we can create a new one without checking for existing ones.
			const otp = await OTPs.create({
				userId,
				kind: 'email-verification',
				expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24)
			});
			const href = `${url.origin}/api/verify-email?token=${otp.token}`;
			console.log(href);
			console.log('TODO: sendEmail');

			const session = await auth.createSession(userId);
			locals.setSession(session);

			return json({ ok: true });
		} catch (e) {
			const { message } = e as Error;
			if (message === 'AUTH_DUPLICATE_KEY_ID' || message === 'AUTH_DUPLICATE_USER_DATA')
				throw error(400, 'Email already in use');

			throw error(500, 'Something went wrong');
		}
	}
};
```

Now, when a user signs up, we'll create an OTP for email verification and send them an email with a link to verify their email address.

### Use the Email Verification OTP

When a user clicks the link in their email, we'll validate the OTP and set the `emailVerified` field to `true`.

We'll add a new API route, `src/routes/api/verify-email/+server.ts`, to handle this.

```ts
import { auth } from '$lib/server/lucia';
import { validateOTP } from '$lib/models/OTPs';
import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const token = url.searchParams.get('token');

	// Validate the token
	if (typeof token !== 'string') throw error(400, 'Invalid token');

	const check = await validateOTP(token, 'email-verification');
	if (!check.ok) throw error(400, 'Invalid token');

	const { user, otp } = check;

	await auth.updateUserAttributes(user.userId, {
		emailVerified: true
	});

	await otp.remove();

	throw redirect(302, '/');
};
```

Let's test it out. We'll go to `/signup` and enter an email address. If the email address exists, we'll see an error message. If it doesn't, there'll be a success message.

Then, check the console to see the link to the email verification page. Copy that link and paste it into the browser, and we should see a success message and be redirected to the home page.

If you check that user in the database, you'll see that the `emailVerified` field is now `true`.

You can also update the `src/routes/profile/+page.svelte` file to show the email verification status.

```svelte
<script lang="ts">
	import { getUser } from '@lucia-auth/sveltekit/client';

	const user = getUser();
</script>

<h1>Profile</h1>
{#if $user}
	<!-- Here we have access to the data returned by auth.transformUserData -->
	<p>User id: {$user?.userId}</p>
	<p>Email: {$user?.email}</p>
	<p>Email Verified: {$user?.emailVerified}</p>
{:else}
	<p>Not signed in</p>
{/if}
```

## Extra features to add

There are a few extra features we could add to make this app more useful:

- Add a route guard to prevent users with unverified emails from accessing the app
- Use OTPs as magic signin links

## Conclusion

That's it! We've now added multipurpose OTPs to our SvelteKit app, and used them to implement password reset and email verification flows.
