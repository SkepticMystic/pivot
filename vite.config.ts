import { partytownVite } from '@builder.io/partytown/utils';
import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import type { UserConfig } from 'vite';


const config: UserConfig = {

	plugins: [
		sveltekit(),
		partytownVite({
			// `dest` specifies where files are copied to in production
			dest: join(process.cwd(), 'static', '~partytown')
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
