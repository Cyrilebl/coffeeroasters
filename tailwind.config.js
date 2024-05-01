/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Barlow"],
        secondary: ["Fraunces"],
      },
      colors: {
        primary: "#0E8784",
        secondary: "#333D4B",
        info: "#FDD6BA",
        neutral1: "#FEFCF7",
        neutral2: "#83888F",
        neutral3: "rgba(254,252,247, 0.75)",
        neutral4: "#F4F1EB",
      },
    },
  },
  plugins: [],
};
