/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: "20px",
        md: "30px",
      },
      colors: {
        "regal-orange": "#F3762B",
      },
    },
  },
  plugins: [],
};
