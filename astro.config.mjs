import { defineConfig } from 'astro/config';

import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt(), sitemap(), tailwind()],
  site: 'https://wallpapers.inigochoa.me/',
});
