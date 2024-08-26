import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
		  center: true,
		},
		extend: {
		  fontFamily: {
			sans: ["MonaSans", ...defaultTheme.fontFamily.sans],
		  },
		  colors: {
			darkBlue: "#073B4C",
			lightBlue: "#118AB2",
			lightGray: "#AED8E6",
			customRed: "#DD3603"
		  },
		},
	  },
	plugins: [
		require('@tailwindcss/typography'),
	],
}
