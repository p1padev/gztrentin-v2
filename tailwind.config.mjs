import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';
import defaultTheme from 'tailwindcss/defaultTheme';

const { lofi } = themes;
const customLofi = lofi;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lofi: {
          ...customLofi,
          success: '#86efac',
        },
      },
    ],
  },
};
