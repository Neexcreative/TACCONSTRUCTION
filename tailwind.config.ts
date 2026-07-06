import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      colors: {
        red: { DEFAULT: '#C8102E', dark: '#9B0B22' },
        gray: {
          100: '#F0EDE9',
          200: '#DDD9D4',
          400: '#9A9590',
          600: '#5A5550',
        },
        'off-white': '#F5F2EE',
        'site-black': '#0D0D0D',
      },
    },
  },
  plugins: [],
}
export default config
