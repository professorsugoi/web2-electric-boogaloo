import { defineConfig } from 'astro/config';

// https://astro.build/config
import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'cj8je4w1',
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    useCdn: true
  })]
});