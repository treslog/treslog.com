/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      white: '#eeeffc',
      gray: '#81859f',
      black: '#000',
      blue: '#3e82e5',
      'light-gray': '#1e1e1e',
      pink: '#8242cd'
    }
  },
  plugins: []
}
