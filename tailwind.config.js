/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        regular: ["roboto-regular"],
        anton: ["anton-reguler"],
        newamsterdam: ["newamsterdam"]
      }
    },
  },
  plugins: [],
}

