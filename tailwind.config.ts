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
    },
    fontFamily: {
      'display': ['Hammersmith_One'],
      'body': ['"Open Sans"']
    },
    colors: {
      blue: {
        DEFAULT: '#697CBF',
        light: '#F7F9FF',
        dark: '#24305A'
      },
      purple: {
        DEFAULT: '#BF69B6',
        light: '#FFF7FE',
        dark: '#55245A'
      },
      green: {
        DEFAULT: '#69BF72',
        light: '#F7FFF7',
        dark: '#2F5A24'
      }
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
    },
    animation: {
      'wobbling': 'wobble 2s linear 1'
    }
  },
  plugins: [],
};
export default config;
