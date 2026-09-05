/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B35",
          magenta: "#C026D3",
          purple: "#9333EA",
          dark: "#0A0A0F",
          card: "#12121A",
          input: "#1E1E2E",
          border: "#2A2A3C",
          muted: "#6B7280",
          success: "#22C55E",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      maxWidth: {
        mobile: "430px",
      },
      animation: {
        "check-draw": "checkDraw 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "confetti": "confetti 1s ease-out forwards",
      },
      keyframes: {
        checkDraw: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        confetti: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(720deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
