/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'nav-border': '#EBEAEA',
        'primary-blue': '#8BD7F3',
        'primary-text': '#0d0c22',
        'light-white': '#FAFAFB',
        'auth-slider': '#2E53BC',
        'auth-border': '#F0EFF2',
        'auth-bg-logo': '#F7FAFC',
        'reg-slider': '#173562'
      }
    },
  },
  plugins: [],
}
