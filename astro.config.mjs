import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    responsiveStyles: true,
  },
  devToolbar: {
    enabled: false,
  },
});
