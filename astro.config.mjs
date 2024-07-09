import { defineConfig, passthroughImageService } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
// import node from '@astrojs/node';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  // adapter: node({
  //   mode: "standalone"
  // }),
  adapter: netlify(),
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
