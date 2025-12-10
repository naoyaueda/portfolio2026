const { image } = require('framer-motion/client')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#fef9c3',   // Very light shiny yellow
          100: '#fef08a',  // Light shiny yellow
          200: '#fde047',  // Lighter shiny yellow
          300: '#facc15',  // Medium light shiny yellow
          400: '#eab308',  // Medium shiny yellow
          500: '#ffff00',  // MAIN BRIGHT SHINY YELLOW
          600: '#ffff00',  // Same bright shiny yellow (buttons, links)
          700: '#ffff00',  // Same bright shiny yellow
          800: '#ffff00',  // Same bright shiny yellow
          900: '#ffff00',  // Same bright shiny yellow
        },
        dark: {
          900: '#1c1c1c',  
          800: '#2a2a2a',  
          700: '#393939',  
          600: '#515151',  
        },
        light: {
          100: '#f5f5f5',
          200: '#c9c9c9',
          300: '#a1a1a1',
          400: '#959595',
          500: '#6e6e6e',
        },
        accent: {
          'yellow': '#ffff00',
          'blue': '#6366f1',
          'cyan': '#00ffff',
          'magenta': '#ff00ff',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
        'body': ['Montserrat', 'system-ui', 'sans-serif'],
        'mono': ['Montserrat', 'monospace'],
        'serif': ['Montserrat', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-yellow': '0 0 20px rgba(255, 255, 0, 0.5), 0 0 40px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)',
        'glow-yellow': '0 0 40px rgba(255, 255, 0, 0.4)',
        'inner-glow': 'inset 0 0 40px rgba(255, 255, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}