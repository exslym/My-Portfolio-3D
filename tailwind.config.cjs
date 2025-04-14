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
				'blue-primary': '#58d5ff',
				'grad-color-1': '#041721',
				'grad-color-2': '#090B18',
				'grad-color-3': '#110710',
				'black-100': '#100d25',
				'black-200': '#090325',
				'white-100': '#f3f3f3',
				'menu-color': 'rgb(9, 11, 24, 0.9)',
			},
			boxShadow: {
				card: 'inset 0 -2px #adbfd0',
				inputsOff: '0px 0px 0px 0px #90a1b0 inset',
				inputsOn: '0px 0px 0px 1px #90a1b0 inset',
			},
			screens: {
				xs: '450px',
			},
			backgroundImage: {
				hero: 'linear-gradient(to bottom, rgba(222, 178, 255, 0.1) 0%, transparent 95% );',
				navbar: 'linear-gradient(180deg, #090b18 5%, transparent 90%);',
				'grad-black': 'linear-gradient(to right, #434343, #000000)',
				'grad-blue':
					'linear-gradient(-90deg, #58d5ff 0%, rgba(60, 51, 80, 0) 100%)',
				'grad-green-pink':
					'linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
				'grad-green-text': 'linear-gradient(to top, #11998e, #38ef7d)',
				'grad-blue-text': 'linear-gradient(to top, #2f80ed, #56ccf2)',
				'grad-pink-text': 'linear-gradient(to top, #ec008c, #fc6767)',
				'grad-yellow-text': 'linear-gradient(to top, #fc9467, #fcf067)',
			},
			maxWidth: {
				menuWidth: 'calc(100% - 2 * 1.5rem)',
				inputWidth: 'calc(100% - 2 * 1px)',
			},
		},
	},
	plugins: [],
};
