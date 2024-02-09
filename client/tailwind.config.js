/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem'
  },
    extend: {
      colors: {
        'primary': '#676cb8',
        'secondary': '#3695cc',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        primary2: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },


      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        polt: ["Poltawski Nowy", "serif"],
        Tanger: ['Tangerine', 'cursive'],
        
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
  variants: {
    extend: {
        display: ['group-hover'],
        visibility: ['group-hover'],
    },
},
  plugins: [],
});
