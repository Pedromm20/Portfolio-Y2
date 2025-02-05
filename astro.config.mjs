import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: 'https://portfoliopedromm.netlify.app', 
  output: 'static',
  integrations: [tailwind()],
  adapter: netlify(),
});
