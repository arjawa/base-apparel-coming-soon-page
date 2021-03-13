module.exports = {
  purge: ['index.html', 'js/main.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
		fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif']
    },
		fontSize: {
			'xs': '.75rem',
      'sm': '.875rem',
      '16': '16px',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem',
		},
		colors: {
			'desaturated-red': 'hsl(0, 36%, 70%)',
			'soft-red': 'hsl(0, 93%, 68%)',
			'dark-red': 'hsl(0, 6%, 24%)'
		},
		extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
