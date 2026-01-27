import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f9ede8',
          200: '#f3d9cf',
          300: '#e9baa8',
          400: '#dc9478',
          500: '#c97553',
          600: '#b45d3d',
          700: '#964b32',
          800: '#7c402c',
          900: '#683829',
          950: '#381b13',
        },
        accent: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b1bbca',
          400: '#8695ac',
          500: '#677892',
          600: '#526079',
          700: '#434e62',
          800: '#3a4353',
          900: '#343a47',
          950: '#22262f',
        },
        warm: {
          50: '#faf9f7',
          100: '#f3f1ec',
          200: '#e6e2d9',
          300: '#d4cdbf',
          400: '#bfb5a1',
          500: '#ab9d86',
          600: '#9a8a73',
          700: '#807261',
          800: '#695e52',
          900: '#574e45',
          950: '#2e2924',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
