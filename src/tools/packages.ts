export type Package = {
  name: string;
  href: string;
  emoji: string;
  description: string;
  npmHref: string;
  githubHref: string;
};

export const packages = [
  {
    name: 'Pagination Schema',
    description:
      'Useful and easy helper to create pagination components out of the box.',
    href: 'https://angel-ponce.github.io/pagination-schema-demo/',
    emoji: '📄',
    githubHref: 'https://github.com/Angel-Ponce/pagination-schema',
    npmHref: 'https://www.npmjs.com/package/pagination-schema',
  },
  {
    name: 'Time 2 Time',
    description: 'Simple utilities to handle time conversions',
    href: 'https://angel-ponce.github.io/time2time-demo/',
    emoji: '🕰️',
    githubHref: 'https://github.com/Angel-Ponce/time2time',
    npmHref: 'https://www.npmjs.com/package/time2time',
  },
] as const satisfies Package[];
