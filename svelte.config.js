import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': [
					"'self'",
					'https://*.googletagmanager.com',
					'https://www.googletagmanager.com/'
				],
				'connect-src': [
					"'self'",
					'https://*.google-analytics.com',
					'https://*.analytics.google.com',
					'https://*.googletagmanager.com'
				],
				'img-src': [
					"'self'",
					'data:',
					'https://user-images.githubusercontent.com',
					'https://*.google-analytics.com',
					'https://*.googletagmanager.com'
				]
			}
		}
	}
};

export default config;
