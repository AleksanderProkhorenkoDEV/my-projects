const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-grey": "#252422",
        "color-text": "#FFFCF2",
        "color-text-secondary": "#FFFCF2",
      },
      keyframes: {
        rotate45: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
      },
      animation: {
        rotate45: "rotate45 0.5s ease-in-out",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
