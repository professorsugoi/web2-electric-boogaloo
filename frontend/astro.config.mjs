import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://cryptidcafe.net',
  integrations: [mdx(), sitemap(), svelte()],
  image: {
    domains: ['*.neocities.org']
  },
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Add custom languages
      langs: [],
      wrap: true
    }
  }
});