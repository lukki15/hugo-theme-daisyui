module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
}

