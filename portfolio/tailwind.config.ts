import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Asegúrate de incluir el path a NextUI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Puedes agregar configuraciones adicionales aquí si lo deseas
    },
    colors: {
      "main-bg": "#E1E1DD",
    },
  },
  darkMode: "class", // Si estás usando el modo oscuro
  plugins: [nextui()], // Incluye el plugin NextUI
};

export default config;
