/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
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
  plugins: [
    flowbite.plugin()
  ],
}

