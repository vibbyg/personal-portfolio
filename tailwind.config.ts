import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          DEFAULT: 'var(--blue-default)',
          light: 'var(--blue-light)',
          dark: 'var(--blue-dark)'
        },
        purple: {
          DEFAULT: 'var(--purple-default)',
          light: 'var(--purple-light)',
          dark: 'var(--purple-dark)'
        },
        green: {
          DEFAULT: 'var(--green-default)',
          light: 'var(--green-light)',
          dark: 'var(--green-dark)'
        },
        background: {
          left: 'var(--bg-gradient-l)',
          right: 'var(--bg-gradient-r)'
        }
      },
    },
    fontFamily: {
      'display': ['Hammersmith_One'],
      'body': ['"Open Sans"']
    },
    keyframes: {
      wobble: {
        '0%, 100%': {
          transform: 'translateX(0%) scale(1.5)',
      },
    
      '15%': {
          transform: 'translateX(-16px) rotate(-5deg) scale(1.5)',
      },
    
      '30%': {
          transform: 'translateX(calc(16px / 2)) rotate(5deg) scale(1.5)',
      },
    
      '45%': {
          transform: 'translateX(calc(-16px / 2)) rotate(calc(-5deg / 1.8)) scale(1.5)',
      },
    
      '60%': {
          transform: 'translateX(calc(16px / 3.3)) rotate(calc(5deg / 3)) scale(1.5)',
      },
    
      '75%': {
          transform: 'translateX(calc(-16px / 5.5)) rotate(calc(-5deg / 5)) scale(1.5)',
      },
      },
      breathing: {
        '0%, 100%': {
          transform: 'scale(0.85)'
        },
        '50%': {
          transform: 'scale(1.15)'
        }
      }
    },
    animation: {
      'wobbling': 'wobble 2s ease-in-out 1'
    }
  },
  plugins: [],
};
export default config;
