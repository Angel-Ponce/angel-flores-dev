import alpinejs from '@astrojs/alpinejs';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: { plugins: [tailwindcss()] },
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'vitesse-dark',
        light: 'vitesse-light',
      },
    },
  },
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
          'google-mail-logo-solid',
        ],
        solar: [
          'buildings-bold-duotone',
          'sun-2-bold-duotone',
          'home-angle-bold-duotone',
          'notebook-minimalistic-bold-duotone',
          'user-id-bold-duotone',
          'document-add-bold-duotone',
          'moon-bold-duotone',
          'hamburger-menu-linear',
          'close-circle-bold-duotone',
          'question-circle-bold-duotone',
          'code-bold-duotone',
          'arrow-right-up-line-duotone',
          'arrow-left-line-duotone',
          'code-file-bold-duotone',
        ],
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
          'netflix-icon',
          'spotify-icon',
          'visual-studio-code',
          'alpinejs-icon',
          'npm-icon',
        ],
        flag: ['gt-4x3'],
        iconDir: 'src/svg/icons',
      },
    }),
    alpinejs(),
  ],
});
