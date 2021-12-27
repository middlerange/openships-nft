const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      primary: "#5fb0df",
      primaryBackground: "#252525",
    },
    extend: {},
  },
  plugins: [],
};
