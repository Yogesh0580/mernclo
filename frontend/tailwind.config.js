/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
      
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "1200px": "1200px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px",
        "570px": "570px",
        "640px": "640px"
      },
      colors : {
        "primary-color" : "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "secondary-dark-color": "var(--secondary-dark-color)",
        "white-color": "var(--white-color)",
        "light-bg-color" : "var(--light-bg-color)" ,
        "light-text-color" : "var(--light-text-color)",
        "border-color" : "var(--border-color)",
        "dark-color" : "var(--dark-color)",

      }
    },
  },
  plugins: [],
};
