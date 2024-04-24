/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        one: ["Jost","sans-serif"],
        second:["Josefin Sans","sans-serif"],
        third:["Afacad","sans-serif"]
       },
    },
  },
  plugins: [],
}

