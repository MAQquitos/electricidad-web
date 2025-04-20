/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce4fd',
          200: '#99c9fb',
          300: '#66adf9',
          400: '#3392f7',
          500: '#0077f5',
          600: '#005fc4',
          700: '#004793',
          800: '#002f62',
          900: '#001831',
        },
        secondary: {
          50: '#e6f3fa',
          100: '#cce7f5',
          200: '#99cfeb',
          300: '#66b7e0',
          400: '#339fd6',
          500: '#0087cc',
          600: '#006ca3',
          700: '#00517a',
          800: '#003652',
          900: '#001b29',
        },
        accent: {
          50: '#fef2e6',
          100: '#fde6cc',
          200: '#fbcc99',
          300: '#f9b366',
          400: '#f79933',
          500: '#f58000',
          600: '#c46600',
          700: '#934c00',
          800: '#623300',
          900: '#311900',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
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
      },
    },
  },
  plugins: [],
};