import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
// import node from '@astrojs/node';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // adapter: node({
  //   mode: "standalone"
  // }),
  adapter: netlify(),
  integrations: [tailwind()]
});