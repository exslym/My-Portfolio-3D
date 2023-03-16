/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#adbfd0',
				secondary: '#90a1b0',
				tertiary: '#0b212d',
				clr_blue: '#58d5ff',
				clr_btn_hover: '#103d56',
				grad_clr1: '#05121D',
				grad_clr2: '#090B18',
				grad_clr3: '#110710',
				'black-100': '#100d25',
				'black-200': '#090325',
				'white-100': '#f3f3f3',
				primary_old: '#050816',
				secondary_old: '#aaa6c3',
				tertiary_old: '#151030',
			},
			boxShadow: {
				card: '0px 35px 120px -15px #211e35',
			},
			screens: {
				xs: '450px',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/herobg.png')",
			},
		},
	},
	plugins: [],
};
