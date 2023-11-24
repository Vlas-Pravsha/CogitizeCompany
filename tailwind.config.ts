import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "4xl": "inset 0px 4px 8px 0px",
        "5xl": "0px 4px 16px 0px",
      },
      colors: {
        "dark-200": "#303038",
        "dark-400": "#292930",
        "grey-400": "#9c9cb0",
        "light-100": "#f5f5f5",
        "grey-100": "#6B6B7B",
        black: "#000000",
        white: "#ffffff",
        primary: "#6764f1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
