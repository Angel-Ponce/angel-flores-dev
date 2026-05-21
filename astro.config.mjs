import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
  output: 'static',
  vite: { plugins: [tailwindcss()] },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Raleway',
      cssVariable: '--font-text',
      weights: [300, 400, 600],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-heading',
      weights: [400, 600],
    },
  ],

  integrations: [
    icon({
      include: {
        'streamline-logos': [
          'github-logo-1-solid',
          'linkedin-logo-solid',
          'google-maps-logo-solid',
          'whatsapp-logo-solid',
          'google-mail-logo-solid',
        ],
        'duo-icons': ['building'],
        logos: [
          'react',
          'html-5',
          'css',
          'tailwindcss-icon',
          'nodejs-icon-alt',
          'php',
          'javascript',
          'typescript-icon',
          'htmx-icon',
          'git-icon',
          'sass',
          'svelte-icon',
          'postgresql',
          'graphql',
          'firebase-icon',
          'mysql',
          'laravel',
          'nextjs-icon',
          'astro-icon',
        ],
        iconDir: 'src/svg/icons',
      },
    }),
  ],
});
