// const colors = require(`tailwindcss/colors`);
module.exports = {
  content: [
    "./src/pages/**/*.{tsx,ts}",
    "./src/components/**/*.{ts,tsx}",
    "node_modules/dragontail-experimental/dist/cjs/index.js",
  ],
  darkMode: "class",
  mode: "jit",
  variants: {
    extend: {
      typography: ["dark"],
      cursor: ["focus"],
    },
  },
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out forwards",
        "fade-out": "fadeOut 0.4s ease-in-out forwards",
      },

      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0, display: "none" },
          "100%": { opacity: 1, display: "block" },
        },
        fadeOut: {
          "100%": { opacity: 0, display: "block" },
          "0%": { opacity: 1, display: "none" },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
