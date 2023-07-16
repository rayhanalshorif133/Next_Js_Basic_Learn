/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'lg': '640px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
      '4xl': '1920px',
      '5xl': '2560px',
    },
  },
  plugins: [],
}
