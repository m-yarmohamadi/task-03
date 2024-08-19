/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}),${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
};
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IRANSans'],
			},
			colors: {
				secondary: {
					'01': withOpacity('--color-secondary-01'),
				},
				primary: {
					'01': withOpacity('--color-primary-01'),
					'02': withOpacity('--color-primary-02'),
					'03': withOpacity('--color-primary-03'),
					'04': withOpacity('--color-primary-04'),
					'05': withOpacity('--color-primary-05'),
				},
				error: withOpacity('--color-error'),
				success: withOpacity('--color-success'),
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [],
};
