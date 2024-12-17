/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slidenext: "slidenext 2s linear",
        slideprev: "slideprev 2s linear",
      },

      keyframes: {
        slidenext: {
          "0%": {
            transform: "translate(1000px)",
          },
        },
        slideprev: {
          "0%": {
            transform: "translate(0px)",
          },
          "100%": {
            transform: "translate(1000px)",
          },
        },
      },
    },
  },
  plugins: [],
};
