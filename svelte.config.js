import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
			preserve: ['partytown']
		})
	],

	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': [
					"'self'",
					'vitals.vercel-insights.com',
					'https://cdn.vercel-insights.com',
					'https://*.googletagmanager.com',
					'https://www.googletagmanager.com/'
				],
				'connect-src': [
					"'self'",
					'https://vitals.vercel-analytics.com/',
					'https://*.google-analytics.com',
					'https://*.analytics.google.com',
					'https://*.googletagmanager.com'
				],
				'img-src': [
					"'self'",
					'data:',
					'https://*.google-analytics.com',
					'https://*.googletagmanager.com'
				]
			}
		}
	}
};

export default config;
