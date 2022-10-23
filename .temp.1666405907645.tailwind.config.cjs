/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      white: '#f0f0f1',
      gray: '#a8a5b1',
      black: '#000',
      blue: '#3e82e5'
	  'light-gray': '#1e1e1e',
    }
  },
  plugins: []
}
