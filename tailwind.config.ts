import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'gray-light': 'var(--color-gray-light)',
          'gray-dark': 'var(--color-gray-dark)',
          background: 'var(--color-background)',
        },
      },
    },
  },
  plugins: [],
}
export default config
