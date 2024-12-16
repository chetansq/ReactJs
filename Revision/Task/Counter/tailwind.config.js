/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slidenext: "slidenext 2s linear",
        slideprev: "slidprev 2s linear",
      },

      keyframes: {
        slidenext: {
          "0%": {
            transform: "translate(500px)",
          },
        },
        slideprev: {
          "0%": {
            transform: "translate(-500px)",
          },
        },
      },
    },
  },
  plugins: [],
};
