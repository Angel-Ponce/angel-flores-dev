import type { CvSkills } from './cv-sections';

export const skills = {
  PostgreSQL: 'logos:postgresql',
  NodeJS: 'logos:nodejs-icon-alt',
  GraphQL: 'logos:graphql',
  JavaScript: 'logos:javascript',
  Firebase: 'logos:firebase-icon',
  Git: 'logos:git-icon',
  React: 'logos:react',
  TypeScript: 'logos:typescript-icon',
  Sass: 'logos:sass',
  HTMX: 'logos:htmx-icon',
  PHP: 'logos:php',
  Svelte: 'logos:svelte-icon',
  TypesCript: 'logos:typescript-icon',
  TailwindCSS: 'logos:tailwindcss-icon',
  Laravel: 'logos:laravel',
  MySQL: 'logos:mysql',
  NextJS: 'logos:nextjs-icon',
  Astro: 'logos:astro-icon',
} as const;

export const getSkills = (...names: (keyof typeof skills)[]) =>
  names.reduce<CvSkills>((map, name) => ({ ...map, [name]: skills[name] }), {});
