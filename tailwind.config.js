/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'JIT',
  content: [
    './src/**/*.{vue,js,html}',
    './src/components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      black: '#1a202c',
      red: '#ff0055',
      blue: '#1fb6ff',
      green: '#5EBEA3',
      gray: '#3F3F3F',
      'gray-light': '#cfcfcf',
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      backgroundImage: {
        sesame: "url('/src/assets/icon.svg')",
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  darkMode: 'class',
}
