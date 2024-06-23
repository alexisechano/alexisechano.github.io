import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-gray': '#d8d6d3',
        'hov-button-gray': '#EDECEA',
      },
      screens: {
        'sm': '600px',
        'md': '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
