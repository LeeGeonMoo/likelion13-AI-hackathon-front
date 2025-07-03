module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans KR'", "'Inter'", "sans-serif"],
        noto: ["'Noto Sans KR'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 