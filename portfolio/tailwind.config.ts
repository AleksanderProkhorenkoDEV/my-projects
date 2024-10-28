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
        "dark-main-color": "#1040b0",
        "dark-bg": "#2D2A32"
      },
      animation: {
        fade: 'fade 1.3s ease-in-out infinite',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      screens: {
        '1k7': { 'max': '1750px' },
        '1k5': { 'max': '1600px' },
        '1k4': { 'max': '1400px' },
        '1k3': { 'max': '1380px' },
        '1k2': { 'max': '1280px' },
        '1k': { 'max': '1080px' },
        '900k': { 'max': '900px' },
        '700k': { 'max': '780px' },
        '600k': { 'max': '600px' },
        '500k': { 'max': '500px' },
        '400k': { 'max': '450px' },
        '300k': { 'max': '380px' },
        'wh-movile': {'raw': '(max-height: 580px) and (max-width: 480px)'},
      }
    },

  },
  darkMode: "class", // Si estás usando el modo oscuro
  plugins: [nextui()], // Incluye el plugin NextUI
};

export default config;
