/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT : "#0e0730",
          500 : "#1e1652",
          800 : "#160f42"
        },
        secondary: "#a39ebf",
        btn : {
          DEFAULT : "#4f49c1",
          500 : "#615bc7"
        },
        success : "#0ab896",
        danger : "#c55487"
      },
    },
  },
  plugins: [],
}