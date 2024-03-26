/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        HighGreen: "hsl(75, 94%, 57%)",
        lightGrey: "hsl(0, 0%, 20%)",
        DarkGrey: "hsl(0, 0%, 12%)",
        OffBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
