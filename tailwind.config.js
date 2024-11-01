/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tiro: ["Tiro Bangla", "serif"],
      },
      colors: {
        white: {
          100: "#f9f9f9",
          200: "#eff1f3",
          300: "#fdfdff",
          400: "#fafaff",
          500: "#fcfcfc",
          DEFAULT: "#fff",
        },
        gray: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
        },
        black: {
          300: "#6c757d",
          400: "#4a5759",
          500: "#333533",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#000814",
        },
        green: {
          DEFAULT: "#4cd565",
          100: "#D8F3DC",
          200: "#B7E4C7",
          300: "#95D5B2",
          400: "#74C69D",
          500: "#52B788",
          600: "#40916C",
          700: "#2D6A4F",
          800: "#1B4332",
          900: "#081C15",
        },
        blue: {
          100: "#E3F2FD",
          200: "#BBDEFB",
          300: "#90CAF9",
          400: "#64B5F6",
          500: "#42A5F5",
          600: "#2196F3",
          700: "#1E88E5",
          800: "#1976D2",
          900: "#1565C0",
          950: "#0D47A1",
        },
        red: {
          100: "#ff2c55",
          200: "#dd2c2f",
          300: "#f02d3a",
          500: "#c52233",
          600: "#a51c30",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: ["class", "class"],

  plugins: [require("tailwindcss-animate")],
};
