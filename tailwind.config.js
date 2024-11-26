/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantOrange: '#FF4500',
        deepBluePurple: '#4A0082',
        shadowGray: '#1A1A1A',
        snowWhite: '#FFFFFF',
      },
      boxShadow: {
        'custom-hover': '0 4px 6px -1px rgba(255, 69, 0, 0.5), 0 2px 4px -2px rgba(255, 69, 0, 0.5)',
      },
      fontFamily: {
        epBoxi: ['EP-BOXI', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

