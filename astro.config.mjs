// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://lionax.1c138d8a.er.aliyun-esa.net',
  vite: {
    plugins: [tailwindcss()]
  }
});
