import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/thecityvarsity/cover.png')",
      }
    },
    colors: {
      'bg': '#121314',
      'primary': '#f4f2ee',
      'secondary': '#d8cfc3',
      'purple': '#c058de',
      'btn-purple': '#8529a1'
    }
  },
  plugins: [],
}
export default config
