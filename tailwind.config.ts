import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        red: "#EF233C",
        darkGrey: "#CBCBCB",
        grey: "#00000099",
        navy: "#2B2D42",
      },
      colors: {
        red: "#EF233C",
        darkGrey: "#CBCBCB",
        grey: "#00000099",
        navy: "#2B2D42",
      },
      fontWeight: {
        bold: "var(--font-bold)",
      },
    },
  },
  plugins: [],
};
export default config;
