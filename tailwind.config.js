/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'mainColor': {
        900: '#1E2D33',
        800: '#3C5B66',
        700: '#699FB2',
        600: '#87CDE5',
        500: '#97E4FF',
        400: '#ABE9FF',
        300: '#C0EEFF',
        200: '#DFF6FF',
        100: '#F4FCFF',
      },
      'DarkColor' : {
        900: '#000204',
        800: '#000B13',
        700: '#001321',
        600: '#001C30',
        500: '#193244',
        400: '#4C606E',
        300: '#7F8D97',
        200: '#B2BAC0',
        100: '#E5E8EA',
      },
      LightColor : {
        900: '#000000',
        800: '#161717',
        700: '#434547',
        600: '#717376',
        500: '#B4B8BD',
        400: '#E2E6ED',
        300: '#EAEDF2',
        200: '#F3F5F7',
        100: '#FCFCFD',
      },
    },
    extend: {
    },
  },
  plugins: [],
};
