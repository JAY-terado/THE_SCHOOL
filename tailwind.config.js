/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          dark: '#071426',
          light: '#142848',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dark: '#A38434',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          light: '#FAF7F2',
        },
        offwhite: '#FAFAF7',
        teal: {
          DEFAULT: '#2A7B7B',
          light: '#D4ECEC',
          dark: '#1D5A5A',
        },
        charcoal: '#1A1A2E',
        muted: '#6B7080',
        bordercream: '#E2DDD5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        widest: '0.18em',
        wider: '0.08em',
      },
      borderRadius: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
