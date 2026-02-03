import { defineConfig, fontProviders } from 'astro/config'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { site } from './src/data/site'
import sitemapConfig from './src/lib/sitemap'

// https://astro.build/config
export default defineConfig({
  experimental: {
    clientPrerender: true,
    failOnPrerenderConflict: true,
    fonts: [{
      name: 'Karla',
      cssVariable: '--font-sans',
      provider: fontProviders.fontsource(),
      weights: [400, 700],
    }, {
      name: 'Qahiri',
      cssVariable: '--font-qahiri',
      provider: fontProviders.fontsource(),
      subsets: ['arabic', 'latin'],
      weights: [400],
    }],
    preserveScriptOrder: true,
    staticImportMetaEnv: true,
  },
  integrations: [
    icon(),
    sitemap(sitemapConfig),
  ],
  site: site.url,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
