/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EBEAFD',
          100: '#D7D5FB',
          200: '#AEAAF8',
          300: '#867FF4',
          400: '#5D54F1',
          500: '#4F46E5',
          600: '#2418E2',
          700: '#1C13B0',
          800: '#140D7E',
          900: '#0C084C',
        },
      },
      textColor: {
        DEFAULT: 'var(--foreground)',
      },
      backgroundColor: {
        DEFAULT: 'var(--background)',
      },
    },
  },
  plugins: [],
} 