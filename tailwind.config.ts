import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default <Config>{
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './pages/**/*.{vue,ts,js}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['cupcake', 'winter'],
    logs: false,
  },
}
