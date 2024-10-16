/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./*.{html,js,jsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        red: "2px",
      },
      colors: {
        "red-border": "#ef4444",
      },
      fontFamily: {
        custom: ["Playwrite AU TAS", `cursive`],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".red": {
          "border-width": "2px",
          "border-color": "#ef4444",
        },
      });
    },
  ],
};
