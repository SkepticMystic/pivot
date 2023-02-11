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
					...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
					primary: '#000000',
					secondary: '#d85145',
					accent: '#f9dc68',
					neutral: '#383838',
					'base-100': '#ffffff',
					info: '#82a3d8',
					success: '#22c55e',
					warning: '#facc15',
					error: '#dc2626'
				}
			}
		]
	}
};
