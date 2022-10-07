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
      white: '#ffffff',
      red: '#FF0055',
      pink: '#FF9984',
      green: '#5EBEA3',
      'green-light': '#9FDFD733',
      gray: '#3F3F3F',
      'gray-light': '#dfdfdf',
      'gray-light-1': '#bfbfbf',
      'gray-light-2': '#afafaf',
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
    },
  },
  darkMode: 'class',
}
