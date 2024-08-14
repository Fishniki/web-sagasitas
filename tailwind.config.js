/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["roboto-regular"],
        anton: ["anton-reguler"],
        oswald: ["oswald"],
        signika: ["signika"],
        newamsterdam: ["newamsterdam"]
      }
    },
  },
  plugins: [],
}

