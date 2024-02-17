/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  extend: {
    listStyleImage: {
      checkmark: 'url("/walmart2/src/sunLogo.png)',
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  plugins: [
    require("flowbite/plugin"),
    require("flowbite/plugin")({
      charts: true,
    }),
  ],

  darkMode: "class",
};
