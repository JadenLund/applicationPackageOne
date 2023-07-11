/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'custom': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'gold': '#E8A733',
        'primary': "#89b098",
        'secondary': '#7ca490',
        'tertiary': '#4f707',
        'extra': '#2f4858',
        'accent': '#320e3b',
      },
      fontFamily: {
        'lilita': ['Lilita One', 'cursive'],
      },
      spacing: {
        "a": "100%",
        "b": "50%",
        "c": "25%",
        "d": "15%",
        "e": "10%",
        "z": "100vh",
        "y": "50vh",
        "x": "25vh",
        "w": "10vh",
        "q": "100rem",
        "r": "50rem",
        "s": "35rem",
        "t": "2.5rem",
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        xxl: ['40px', '48px']
      }
    },
  },
};
