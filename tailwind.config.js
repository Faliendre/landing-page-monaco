/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // <-- AGREGAR ESTA SECCIÓN DE COLORES
        "monaco-teal": "#34A89A", // Un verde azulado que combina con el logo
        "monaco-teal-dark": "#2C8F83", // Una versión más oscura para el hover
        "monaco-orange": "#FF8C42", // El naranja vibrante del logo
      },
    },
  },
  plugins: [],
};
