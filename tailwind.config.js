/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/*.{html,tsx}', './src/**/*.{html,tsx}', './index.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#30df7e',
					50: '#f0fdf4',
					100: '#b3ffcd',
					200: '#87f7b2',
					300: '#5ceb97',
					400: '#30df7e',
					500: '#20b670',
					600: '#188b61',
					700: '#115f45',
					800: '#0b3d34',
				},
				secondary: 'rgb(16 29 35)',
			},
		},
	},
	plugins: [],
};
