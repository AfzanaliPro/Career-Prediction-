/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "blue-violet": {
          50: "#efeeff",
          100: "#e2e0ff",
          200: "#cac7fe",
          300: "#aaa5fc",
          400: "#8881f8",
          500: "#6b63f1",
          600: "#4f46e5",
          700: "#4038ca",
          800: "#3730a3",
          900: "#332e81",
          950: "#1e1b4b",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-in',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'bounce-sm': 'bounceSm 1s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        bounceSm: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(79, 70, 229, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.6)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("tailwind-scrollbar")],
};
