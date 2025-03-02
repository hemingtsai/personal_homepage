/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      slab: ['Solway', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [daisyui],
};
