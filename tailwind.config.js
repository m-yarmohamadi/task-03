/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['vazir'],
			},
			colors: {
				secondary: {
					200:"#BFC0CB",
					600:"#6A6C87",
					700: '#555775',
					800: '#3F4264',
					900: '#2A2D53',
				},
				primary: {
					800: '#',
					900: '#4A6DFF',
				},
				oorange: '#FF0000',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [],
};
