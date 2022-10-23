/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
		--primary-font-color: #f0f0f1;
		--secondary-font-color: #a8a5b1;
		--primary-background-color: #000;
    }
  },
  plugins: []
}
