/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "monaco-teal": "#34A89A",
        "monaco-teal-dark": "#2C8F83",
        "monaco-orange": "#FF8C42",
      },
      // --- Agregando las animaciones personalizadas ---
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeInLeft: "fadeInLeft 1s ease-out forwards",
        fadeInRight: "fadeInRight 1s ease-out forwards",
        menuSlideIn: "menuSlideIn 0.3s ease-out forwards", // Nueva animación para el menú móvil
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Nueva keyframe para el menú móvil
        menuSlideIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" }, // Inicia ligeramente arriba
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      // --- Fin de animaciones personalizadas ---
    },
  },
  plugins: [],
};
