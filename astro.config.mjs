// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://spycner.github.io',
	base: '/personal-website',
	integrations: [mdx(), sitemap()],
});
