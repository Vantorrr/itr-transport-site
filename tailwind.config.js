/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B2545', // Основной цвет
          50: '#f8f9fb',
          100: '#eef1f6',
          200: '#d9e0eb',
          300: '#b8c7d9',
          400: '#92a7c2',
          500: '#748aab',
          600: '#607394',
          700: '#4f5e7a',
          800: '#434f65',
          900: '#1B2545',
        },
        secondary: {
          DEFAULT: '#45517F', // Дополнительный 1
          light: '#4859A5',   // Дополнительный 2
          purple: '#6A58A3',  // Дополнительный 3
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
} 