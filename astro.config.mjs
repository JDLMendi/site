import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://jdlmendi.github.io/site',
  base: '',
  output: 'server',
  adapter: netlify()
});