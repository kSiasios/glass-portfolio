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
        wave: {
          "0%": { rotate: "0deg" },
          "10%": { rotate: "-15deg" },
          "20%": { rotate: "15deg" },
          "30%": { rotate: "-15deg" },
          "40%": { rotate: "15deg" },
          "50%": { rotate: "0deg" },
          // "50%": { rotate: "0deg" },
        },
        wiggle: {
          "0%, 60%": { transform: "rotate(0deg)" },
          "5%": { transform: "rotate(-3deg)" },
          "15%": { transform: "rotate(3deg)" },
          "25%": { transform: "rotate(-2deg)" },
          "35%": { transform: "rotate(2deg)" },
          "45%": { transform: "rotate(-1deg)" },
          "55%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        scroller: "scroller 5s linear infinite",
        wave: "wave 3s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
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
