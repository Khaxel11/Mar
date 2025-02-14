/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        wedding: ["font-wedding", "sans-serif"],
        weddingtwo: ["font-wedding-two", "sans-serif"],
        mandala: ["font-mandala", "sans-serif"],
        signature: ["font-signature", "sans-serif"],
        sign: ["font-sign", "sans-serif"],
        handw: ["font-handw", "sans-serif"],
        rosalie: ["font-rosalie", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          'mask-image': 'linear-gradient(to bottom, black 90%, transparent), linear-gradient(to left, black 70%, transparent)',
          'mask-composite': 'destination-in',
          'filter' : 'drop-shadow(30px 30px 20px #b9312549)'
        },
      });
    },
  ],
}

