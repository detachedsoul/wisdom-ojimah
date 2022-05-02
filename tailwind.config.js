module.exports = {
  content: [
    "./components/**/*.tsx",
    "./pages/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["'Baloo 2'", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
			strategy: "class",
		}),
  ],
}
