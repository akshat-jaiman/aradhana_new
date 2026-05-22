/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oakridge: {
          charcoal: "#1A1A1A",
          green: "#06402B",
          gold: "#C5A059",
          offwhite: "#F9F9F7",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 50px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
