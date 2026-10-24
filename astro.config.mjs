import { defineConfig } from 'astro/config';

// Old URLs (/about.html, /lt/index.html) are kept exactly: `preserve` maps
// about.astro -> about.html and lt/index.astro -> lt/index.html.
export default defineConfig({
  site: 'https://www.albawellbeing.co.uk',
  trailingSlash: 'ignore',
  build: { format: 'preserve', inlineStylesheets: 'always' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
});
