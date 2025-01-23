/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['selector'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('tailwindcss-animated')],
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        '17': '4.25rem',
      },

      colors: {
        'g-background': '#030917',
        'g-blue': '#1b6cff',
        'g-dark-blue': '#11338C',
        'g-light-blue': '#c4e3ff',
        'g-light-gray': '#8F9BA8',
      },
    },
  },
}
export default config
