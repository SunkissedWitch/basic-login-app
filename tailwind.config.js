/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-text': '#1C1C1C',
        'bBlue-light': '#f0faff',
        'bOrange-accent': '#FFAF00',
        'main-blue': '#0090CF',
        'bBlue-50': '#e5f3fa',
        'bBlue-100': '#cce8f5',
        'bBlue-200': '#99d2eb',
        'bBlue-300': '#66bce2',
        'bBlue-400': '#33a6d8',
        'bBlue-500': '#0190cf',
        'bBlue-600': '#0073a5',
        'bBlue-700': '#00567c',
        'bBlue-800': '#003952',
        'bBlue-900': '#001c29',
        'bBlue-950': '#000e14',
        'bOrange-50': '#fef5e9',
        'bOrange-100': '#fdecd3',
        'bOrange-200': '#fcd9a8',
        'bOrange-300': '#fbc77c',
        'bOrange-400': '#fab451',
        'bOrange-500': '#f9a226',
        'bOrange-600': '#c7811e',
        'bOrange-700': '#956116',
        'bOrange-800': '#63400f',
        'bOrange-900': '#312007',
        'bOrange-950': '#181003',
      },
      fontSize: {
        'hero-desktop': ['3.125rem' /* 50px */, { lineHeight: '4rem' /* 64px */ }],
        'hero-tablet': ['2rem' /* 32px */, { lineHeight: '2.75rem' /* 44px */ }],
        'hero-mobile': ['1.75rem' /* 28px */, { lineHeight: '2.375rem'/* 38px */ }]
      }
    },
  },
  plugins: [],
}
