/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        darkBackground: "#070B1A",
        darkText: "#fff",
        lightBackground: "#EEEEEE",
        lightText: "#000"
      },
      keyframes: {
        bounceslow: {
          "0%": {
            transform: "translateY(0)",
          },
          "20%": {
            transform: "translateY(15px)",
          },
          "40%": {
            transform: "translateY(30px)",
          },
          "50%": {
            transform: "translateY(40px)",
          },
          "60%": {
            transform: "translateY(30px)",
          },
          "80%": {
            transform: "translateY(15px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        }
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
        'spin-medium': 'spin 50s linear infinite',
        "bounce-slow": "bounceslow 12s linear infinite",
        "bounce-medium": "bounceslow 8s linear infinite",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
