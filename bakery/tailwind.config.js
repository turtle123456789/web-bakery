/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1190px",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      },
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

