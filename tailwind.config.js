/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        mono: ['var(--font-inter)', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F3F4F6", // gray-100
          foreground: "#1F2937", // gray-800
        },
        input: "#E5E7EB", // gray-200
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wave': 'wave 1.5s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}; 