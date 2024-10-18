/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002A5C",
        secondary: "#295F98",
        slate: "#708090",
        white: "#FFFFFF",
        light: "#FAF7F0",
        darkSlate: "#2F4F4F",
      },
      fontFamily: {
        grotesk: ["ID Grotesk", "sans-serif"],
        billiona: ["Billiona", "sans-serif"],
        maldives: ["Poppins", "sans-serif"],
        tradegothic: ["Trade Gothic LT Std", "sans-serif"],
      },
    },
  },
  plugins: [],
};
