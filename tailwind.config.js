module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "450px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
