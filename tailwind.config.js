/ @type {import('tailwindcss').Config} */;
module.exports = { //eslint-disable-line
  content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "744px",
      md: "1024px",
      lg: "1440px",
    },
    extend: {
      colors: {
        primary: {
          main: "#244323",
          dark: "#1A301A",
        },
        secondary: {
          main: "#6256A6",
          dark: "#473E77",
        },
        success: {
          main: "#22c55e",
          dark: "#15803d",
        },
        error: {
          main: "#ef4444",
          dark: "#b91c1c",
        },
      },
    },
  },
  plugins: [],
};
