/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef5ff',
          100: '#fce8ff',
          200: '#f9d1ff',
          300: '#f5aaff',
          400: '#ee73ff',
          500: '#e13cff',
          600: '#c819e8',
          700: '#a711c4',
          800: '#8a12a0',
          900: '#721482',
        },
        secondary: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc371',
          400: '#ff9d38',
          500: '#ff7e12',
          600: '#f06208',
          700: '#c74909',
          800: '#9e3a10',
          900: '#7f3210',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
