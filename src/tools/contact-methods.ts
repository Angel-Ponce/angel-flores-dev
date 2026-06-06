import { Icon } from 'astro-icon/components';

type ContactMethod = {
  label: string;
  iconName: string;
  href: string;
  name: string;
};

export const contactMethods = [
  {
    label: '/Angel-Ponce',
    iconName: 'streamline-logos:github-logo-1-solid',
    href: 'https://github.com/Angel-Ponce',
    name: 'Github',
  },
  {
    label: '/in/angelf0',
    iconName: 'streamline-logos:linkedin-logo-solid',
    href: 'https://www.linkedin.com/in/angelf0/?locale=en',
    name: 'LinkedIn',
  },
  {
    label: 'Guatemala',
    iconName: 'streamline-logos:google-maps-logo-solid',
    href: 'https://www.google.com/maps/place/Guatemala/@15.7069001,-92.8818713,973736m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8588135036e7506b:0x35982b375b84d5bb!8m2!3d15.783471!4d-90.230759!16zL20vMDM0NV8?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D',
    name: 'Location',
  },
  {
    label: '+502 3139 6840',
    iconName: 'streamline-logos:whatsapp-logo-solid',
    href: 'tel:+50231396840',
    name: 'WhatsApp',
  },
  {
    label: 'angelponcef0@gmail.com',
    iconName: 'streamline-logos:google-mail-logo-solid',
    href: 'mailto:angelponcef0@gmail.com',
    name: 'Email',
  },
] as const satisfies ContactMethod[];
