import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  site: 'https://profsugoi.neocities.org/',
  integrations: [
    sitemap(),
    sanity({
    projectId: 'cj8je4w1',
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    useCdn: true
  })]
});