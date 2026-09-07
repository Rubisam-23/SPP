import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sudan: {
          gold: '#CE1126',
          white: '#FFFFFF',
          black: '#000000',
          green: '#007A5E',
        },
      },
    },
  },
  plugins: [],
}
export default config
