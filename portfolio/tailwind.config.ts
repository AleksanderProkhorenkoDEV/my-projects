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
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        rotate45: "rotate45 0.5s ease-in-out",
        marquee: "marquee 45s linear infinite",
      },
      fontSize: {
        "clamp-lg": "clamp(1rem, 0.259rem + 3.951vw, 5rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
