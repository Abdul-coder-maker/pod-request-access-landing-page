const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      chivo: "Chivo, sans-serif",
    },
    extend: {
      spacing: {
        17: "73px",
        18: "77px",
        19: "78px",
        21: "88px",
        23: "94px",
        30: "125px",
        37: "152px",
        81: "327px",
        103: "103px",
        106: "106px",
        130: "130px",
        165: "165px",
        536: "536px",
        675: "675px",
      },
      backgroundImage: (theme) => ({
        mobile: "url('/starter-code/assets/mobile/image-host.jpg')",
      }),
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        dark: "#121725",
        "grey-very-dark": "#2C344B",
        "grey-dark": "#5A668A",
        "light-gray": "#C2CBE5",
        green: "#54E6AF",
        "light-green": "#B3FFE2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
