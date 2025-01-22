// import defaultTheme from 'tailwindcss/defaultTheme';
// import colors from 'tailwindcss/colors';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';
import scrollbarHide from 'tailwind-scrollbar-hide';
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customGreen: "#a0d201",
        customBlue: "#17173A",
        customBg: "#A4A4A4",
        customGray: "#B5BDBC",
        oracleGray: "#abb8c3",
        "custom-purple": '#6a0fbe',
        customWhite:"#f7fafd",
        customGrayish:"#f9f6f6"
      },
      fontWeight: {
        custom: '450', // Add a custom weight
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "Lucida", "sans-serif"],
        exo2: ['"Exo 2"', "sans-serif"],
        jost: ['Jost', 'sans-serif'],
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 5s linear infinite',
        wave: 'waveAnimation 4s ease-in-out infinite',
        scroll: 'scroll 10s linear infinite',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #23bdb8, #43e794)',
      },
      boxShadow: {
        custom: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
      },
      transitionProperty: {
        'bg': 'background-image', // Adding custom transition for background-image
      },
      filter: {
        shadow: "drop-shadow(-0.25rem 0.25rem 0.0675rem rgba(0,0,0,0.75)) blur(5px)",
      },
      
    },
    
    
  },
  plugins: [
    addVariablesForColors, 
    scrollbarHide,         
    daisyui,              
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
