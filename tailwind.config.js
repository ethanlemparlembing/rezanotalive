// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        portrait: "2 / 3",
        landscape: "3 / 2",
      },
    },
  },
  plugins: [],
}
