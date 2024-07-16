/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#1F3748',
      white: '#FFF',
      neutral: {
        50: '#F2F2F2',
        100: '#E6E6E6',
        700: '#454545',
      },
    },
    boxShadow: {
      default: '0 2px 3px 0 rgba(0, 0, 0, .15)',
    },
    fontSize: {
      xs: ['0.75rem', '1.125rem'],
      sm: ['0.875rem', '1.5rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.9375rem', '2.25rem'],
      '3xl': ['2.25rem', '2.75rem'],
      '4xl': ['3.5rem', '4.25rem'],
    },
    fontFamily: {
      sans: 'Public Sans, sans-serif',
      lexend: 'Lexend, sistem-ui',
    },
  },
  plugins: [],
}
