import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://cryptidcafe.net",
  integrations: [mdx(), sitemap()],
  image: {
    domains: ["*.neocities.org"],
  },
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
      // Add custom languages
      langs: [],
      wrap: true,
    },
  },
});
