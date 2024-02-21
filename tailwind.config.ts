import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#8338ec",
      textColor: "#264653",
      secondary: "#fb5607",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        brandFont: ["var(--font-brand)"],
        andika: ["var(--font-andika)"],
        lato: ["var(--font-lato)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-grkadient-stops))",
        activate: "url('/images/activate.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

// colors:{
//   primary:"rgb(var(--color-primary) / <alpha-value>)",
//   secondary:"rgb(var(--color-secondary) / <alpha-value>)",
//   colorText:"rgb(var(--color-pri-text) / <alpha-value>)",
// },
