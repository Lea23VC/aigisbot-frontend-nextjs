/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
        main: "url('/images/bg.jpg')",
      },
      colors: {
        'light-blue': '#39bcdd',
      },
      fontFamily: {
        'minerva-modern': ['Minerva Modern'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
