import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "250px",
      },
      colors: {
        darkgreen: {
          400: "#3E4756",
          500: "#191D23",
        },
        brightgray: {
          500: "#EEEEEE",
        },
        azure: {
          500: "#007AFF",
          600: "#0063CC",
          700: "#004A99",
        },
        yankeesblue: {
          500: "#152C46",
        },
        brandeisblue: {
          500: "#0270E8",
        },
        chineseblack: {
          500: "#13161A",
        },
        chinesesilver: {
          500: "#CCCCCC",
        },
        outrageousorange: {
          500: "#FF6F50",
        },
        gunmetal: {
          500: "#2B2F35",
        },
        slategray: {
          500: "#7B8191",
        },
        darkelectricblue: {
          500: "#5D677D",
        },
        darkgunmetal: {
          500: "#1E232B",
        },
        charlestongreen: {
          500: "#272C33",
        },
        scarletred: {
          500: "#FF4D4D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
