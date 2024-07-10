/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        myshadow: "0px 0px 4px #00000040 ",
      },
    },
  },
  plugins: [],
};
