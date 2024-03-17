/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#",
          main: "#",
          dark: "#",
        },
        secondary: {
          light: "#",
          main: "#",
          dark: "#",
        },
        success: {
          light: "#86FF98",
          main: "#5FD967",
          dark: "#3E8C43",
        },
        error: {
          light: "#E57373",
          main: "#F44336",
          dark: "#D32F2F",
        },
      },
    },
  },
  plugins: [],
};