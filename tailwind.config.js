const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        ...colors,
        "light-gold": "#f5bc51",
        "dark-gold": "#533519",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hotel-order":
          "url('./static/hotel_order/homepage-hotel-searchbox-background.png')",
        partner:
          "url('//pic.c-ctrip.com/platform/online/home/pic_partner.png')",
        internationalHome:
          "url('https://dimg02.c-ctrip.com/images/10031e000001fq0hcB1E3.jpg_.webp')",
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        primary: "#389ff9",
      }),
      textColor: {
        primary: "#333333",
        "gray-666": "#666666",
        "gray-999": "#999999",
      },
      borderColor: {
        divide: "#e0e0e0",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        graud: "1fr 2fr",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        footer: "#f8fafd",
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
