import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-clr": "rgb(var(--bg-color))",
        "txt-clr": "rgb(var(--text-color))",
        "brd-clr": "rgb(var(--border-color))",
      },
      keyframes: {
        scroller: {
          "0%": { translate: "0%" },
          "100%": { translate: "calc(-50% - 1.25rem)" },
        },
      },
      animation: {
        scroller: "scroller 5s linear infinite",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
