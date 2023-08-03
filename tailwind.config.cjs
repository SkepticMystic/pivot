/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway']
			}
		}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	],

	daisyui: {
		themes: [
			{
				lofi: {
					...require('daisyui/src/theming/themes')['[data-theme=lofi]'],
					primary: '#d7463b', // red
					secondary: '#2681bd', // blue
					accent: '#e4ad39', // yellow
					neutral: '#4b5568',
					info: '#82a3d8',
					success: '#22c55e',
					warning: '#facc15',
					error: '#dc2626'
				}
			}
		]
	}
};
