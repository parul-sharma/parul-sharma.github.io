import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://parul-sharma.github.io',
<<<<<<< HEAD
  integrations: [mdx(), sitemap(), tailwind(), image(
    {
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: "./.cache/image",
      logLevel: 'debug',
    }
  )]
});
=======
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: "./.cache/image",
      logLevel: 'debug',
    }),
  ],
  experimental: {
    viewTransitions: true,
},
});
>>>>>>> 2c6c84247f01c6498e5d533d5fd87d16b36980bb
