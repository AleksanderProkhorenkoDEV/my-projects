import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Correcto
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#E1E1DD",
        "main-color": "#2667FF",
        "dark-main-color": "#1040b0"
      },
    },
  },
  darkMode: "class", // Si estás usando el modo oscuro
  plugins: [nextui()], // Incluye el plugin NextUI
};

export default config;
