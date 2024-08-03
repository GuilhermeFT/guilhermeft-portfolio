import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/[lang]/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-page-background': 'var(--color-page-background)',
        'custom-gray-dark': 'var(--color-gray-dark)',
        'custom-gray-light': 'var(--color-gray-light)',
        'custom-blue-dark': 'var(--color-blue-dark)',
        'custom-blue-medium': 'var(--color-blue-medium)',
        'custom-blue-upper-medium': 'var(--color-blue-upper-medium)',
        'custom-blue': 'var(--color-blue)',
        'custom-blue-light': 'var(--color-blue-light)',
      },
    },
  },
  plugins: [],
}
export default config
