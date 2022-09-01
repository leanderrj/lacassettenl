/* eslint-disable global-require */
module.exports = {
	mode: 'jit',
	content: [
		'./templates/*.liquid',
		'./sections/**/*.liquid',
		'./snippets/**/*.liquid',
		'./layout/**/*.liquid',
		'./styles/**/*.css',
		'./scripts/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				primary: '#000000',
				second: '#663B89',
				grey: '#969696',
			},
			fontFamily: {
				'heading': 'var(--font-heading-family)',
			},
			boxShadow: {
				size: 'rgb(204 204 204) 0px 0px 0px 1px',
				cart: 'rgb(94 94 94) 0px 0px 0px 1px',
			},
			gridTemplateColumns: {
				'3fr': '1fr 1fr 1fr',
			},
		},
		fill: {
			white: '#FFFFFF',
		},
	},
	variants: {
		extend: {
			fill: ['hover', 'focus'],
		},
	},
		darkMode: false,
		plugins:
			[
				require('./.dev/tailwind.variants'),
				require('@tailwindcss/typography')
			],
};