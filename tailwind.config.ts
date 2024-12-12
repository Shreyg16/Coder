/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  // Plugin to add each Tailwind color as a global CSS variable
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme('colors'));
	const newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
	);
  
	addBase({
	  ':root': newVars,
	});
  }
  
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
       background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
       bannerImg:"url('/public/images/maxresdefault.jpg')"
      }
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;
