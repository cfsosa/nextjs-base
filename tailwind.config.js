module.exports = {
	purge: [
		'./components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./hooks/use-modal.tsx',
	],
	darkMode: false,
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1700px',
		},
		fontFamily: {
			ubuntu: ['Ubuntu', 'sans-serif'],
		},
		colors: {
			primary: 'var(--color-primary)',
			primaryOpacity: 'var(--color-primary-opacity)',
			primaryLight: 'var(--color-primary-light)',
			secondary: 'var(--color-secondary)',
			secondaryOpacity: 'var(--color-secondary-opacity)',
			overlay: 'var(--color-overlay)',
			alert: {
				success: 'var(--color-alert-success)',
				error: 'var(--color-alert-error)',
			},
			facebook: 'var(--color-facebook)',
			gray: {
				200: 'var(--color-gray-200)',
				400: 'var(--color-gray-400)',
				500: 'var(--color-gray-500)',
				600: 'var(--color-gray-600)',
				700: 'var(--color-gray-700)',
				800: 'var(--color-gray-800)',
				900: 'var(--color-gray-900)',
				opacity: {
					10: 'var(--color-gray-500-opacity-10)',
				},
			},
			white: 'var(--color-white)',
			black: 'var(--color-black)',
			transparent: 'rgba(0, 0, 0, 0)',
			'transparent-color': {
				gray: {
					200: 'var(--transparent-gray-200)',
					800: 'var(--transparent-gray-800)',
				},
			},
		},
		
		customForms: (theme) => ({
			default: {
				checkbox: {
					iconColor: theme('colors.primary'),
				},
			},
		}),
		extend: {

			spacing: {
				112: '28rem',
			},
			borderRadius: {
				'full': '9999px',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
};
