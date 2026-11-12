import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-dark": "#23433f",
        "green-brand": "#5b6569",
        "green-lime": "#c0c481",
        "salmon-dark": "#f16bad",
        "salmon-mid": "#f6d3b5",
        "salmon-light": "#ffddb6",
        "orange-mid": "#fcba63",
        "orange-dark": "#cc7ebb",
        "base-cream": "#f7fef8",
        "text-dark": "#1a1a1a",
        "text-muted": "#5c5c5c",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
