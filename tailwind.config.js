/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        route: "url('/public/images/Route.jpg')",
        form: "url('/public/images/BackgroundForm.jpg')",
        guides: 'url("/public/images/Guides.jpg")',
        mainScreen: 'url("/public/images/Background.jpg")',
        popUp: 'url("/public/images/PopUp.jpg")'
      },
      colors: {
        blackTrans10: "rgba(0, 0, 0, 0.1)",
        blackTrans20: "rgba(0, 0, 0, 0.2)",
        blackTrans40: "rgb(0, 0, 0, 0.4)",
        blackTrans60: "rgba(0, 0, 0, 0.7)",

        whiteTrans15: "rgba(255, 255, 255, 0.15)",
        whiteTrans80: "rgb(255, 255, 255, 0.8)",

        orange: "#ff6e31",
        white: "#f4f5f9",
        disabled: "#606060",

        gradient:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))"
      },
      lineHeight: {
        inputLine: "50px",
        popUp: "44px"
      },
      height: {
        "1/12": "8%",
        400: "400px"
      },
      width: {
        500: "500px",
        400: "400px"
      }
    }
  },
  plugins: []
};
