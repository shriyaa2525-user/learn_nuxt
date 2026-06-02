import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './pages/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
