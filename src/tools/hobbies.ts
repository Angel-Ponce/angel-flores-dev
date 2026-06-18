import { differenceInYears } from 'date-fns';
import brawlStarsImage from '@images/brawl-stars.webp';
import driveImage from '@images/drive.webp';

export type Hobby = {
  title: string;
  description: string;
  iconName: string;
  image?: ImageMetadata;
};

export const hobbies: Hobby[] = [
  {
    title: 'Coding',
    description:
      'I really enjoy code, learn about fresh technologies, practice, solve problems, write clean code. <i>If you can imagine, you can program it ♥️ ~ Alejandro Taboada</i>',
    iconName: 'logos:visual-studio-code',
  },
  {
    title: 'Brawl Stars',
    description: `I love to play mobile games, but Brawl Stars definitely won my heart. I played this games since 2018 (global launch), ${differenceInYears(new Date(), new Date(2018, 1, 1))} years after it still my favorite nighttime hobby.`,
    iconName: 'solar:question-circle-bold-duotone',
    image: brawlStarsImage,
  },
  {
    title: 'Ride my bike',
    description: `Ride a bike becomes in awesome experiences, the wind in your face, exotic trips, adrenaline, good fuel economy, and more`,
    iconName: 'solar:question-circle-bold-duotone',
    image: driveImage,
  },
  {
    title: 'Watch Series & Movies',
    description:
      'Relax is part of work, I enjoy to watch series and movies with my wife. My favorite genres are: Horror, Comedy, History, Science Fiction.',
    iconName: 'logos:netflix-icon',
  },
  {
    title: 'Play Music',
    description:
      'Music is simply awesome, music connect people, events, memories, feels. I like any kind of music but some of my favorites are: Dubstep, R&B, Bachata, Rock.',
    iconName: 'logos:spotify-icon',
  },
];
