/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IRANSans'],
			},
			colors: {
				secondary: {
					'01': '#5193ff',
					200: '#BFC0CB',
					600: '#6A6C87',
					700: '#555775',
					800: '#3F4264',
					900: '#2A2D53',
				},
				primary: {
					'01': '#1e293b',
					'02': '#324154',
					'03': '#64748b',
					'04': '#d2d2dc',
					'05': '#ffffff',
				},
				error: '#FF0000',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [],
};
