/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3F',
        teal: '#0FA3A8',
        'light-gray': '#F7F9FC',
        'border-gray': '#E5E7EB',
        'text-gray': '#6B7280',
        'text-dark': '#374151',
        green: '#4CAF50',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
