/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'electric-violet': {
          50: '#f6f3ff',
          100: '#eee9fe',
          200: '#dfd6fe',
          300: '#c7b5fd',
          400: '#ac8bfa',
          500: '#925df5',
          600: '#8338ec',
          700: '#7529d8',
          800: '#6222b5',
          900: '#521d95',
          950: '#321065',
        },
        'cod-gray': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#111111',
        },
      },
      fontFamily: {
        Satoshi: ['Satoshi', 'sans-serif'],
      }

    },
  },
  plugins: [],
}
