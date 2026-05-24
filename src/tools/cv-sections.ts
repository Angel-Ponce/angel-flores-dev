export type CvDateRange = [start: Date, end: Date | 'present'];

export type CvSection = {
  title: string;
  description?: string;
  subsections?: {
    title: string;
    description: string;
    dateRange: CvDateRange;
  }[];
  companies?: {
    title: string;
    subtitle: string;
    dateRange: CvDateRange;
    points?: string[];
    skillIconNames?: string[];
    sections?: {
      title: string;
      dateRange: CvDateRange;
      points: string[];
      skillIconNames?: string[];
    }[];
  }[];
};

export const mainStack = [
  'logos:react',
  'logos:nextjs-icon',
  'logos:astro-icon',
  'logos:typescript-icon',
  'logos:tailwindcss-icon',
  'logos:git-icon',
];

export const cvSections = [
  {
    title: 'Education',
    subsections: [
      {
        title: "Engineer's degree, Systems Engineering",
        description: 'Universidad San Carlos de Guatemala',
        dateRange: [new Date(2019, 0, 1), new Date(2025, 9, 1)],
      },
      {
        title: "Bachelor's degree, Data & Science",
        description: 'Instituto Normal Mixto del Norte "Emilio Rosales Ponce"',
        dateRange: [new Date(2017, 0, 1), new Date(2018, 9, 1)],
      },
    ],
  },
  {
    title: 'Experience',
    companies: [
      {
        title: 'Frontend Engineer',
        subtitle: 'Startrack S.A.',
        skillIconNames: [
          'logos:react',
          'logos:typescript-icon',
          'logos:sass',
          'logos:htmx-icon',
          'logos:php',
          'logos:git-icon',
        ],
        dateRange: [new Date(2023, 8, 18), 'present'],
        points: [
          'I collaborated with a multidisciplinary team, integrating effectively and smoothly to carry out my activities.',
          "I participated in the development of Startrack's flagship project, a project over 20 years old.",
          ' I developed solutions built in React-based environments.',
          'I participated in the development of innovative products using cutting-edge technologies such as HTMX, AlpineJS, Kotlin, among others.',
          ' I contributed to code readability and also to improving code maintainability, making the development process more fluid and efficient.',
          'I implemented various integrations with multiple platforms, from reading video streams to resource optimization to improve the end-user experience.',
          'I participated in the development of apps based on React Native, building solutions optimized for any device.',
          ' I immersed myself in a fluid work process where I was able to learn many productivity techniques and continuous improvement based on the value delivered to clients or end-users.',
        ],
      },
      {
        title: 'Pentcloud',
        subtitle: 'Full remote',
        dateRange: [new Date(2022, 2, 1), new Date(2023, 8, 18)],
        sections: [
          {
            title: 'Fullstack Developer',
            dateRange: [new Date(2022, 6, 1), new Date(2023, 8, 1)],
            skillIconNames: [
              'logos:postgresql',
              'logos:nodejs-icon-alt',
              'logos:graphql',
              'logos:javascript',
              'logos:firebase-icon',
              'logos:git-icon',
            ],
            points: [
              'I deepened my knowledge in the backend area, implementing new integrations and maintaining projects I had previously worked on as a frontend developer.',
              'I implemented improvements and new features by integrating both the backend and frontend, ensuring effective communication between servers and web applications.',
              'Developed backend solutions using tools like Express, GraphQL, Apollo Server, and databases such as PostgreSQL and MySQL, enhancing my FullStack development expertise.',
            ],
          },
          {
            title: 'Frontend Developer',
            dateRange: [new Date(2022, 2, 1), new Date(2022, 6, 1)],
            skillIconNames: [
              'logos:svelte-icon',
              'logos:typescript-icon',
              'logos:tailwindcss-icon',
              'logos:graphql',
              'logos:git-icon',
            ],
            points: [
              'Contributed to frontend software development using cutting-edge technologies like Svelte Kit, TailwindCSS, and GraphQL, fostering a productive and collaborative workspace for the development team.',
              'Collaborated with over 3 different teams, demonstrating agility and adaptability to address evolving company needs and projects.',
              'Played a key role in creating the multi-enterprise platform Jequi, optimizing human resource management across diverse business contexts.',
              'Contributed to the success of Gridia, an intelligent water irrigation system aimed at eliminating poor management of potable water.',
              'Developed the frontend interface for Yapp, a company rating platform that empowers end-users to voice their opinions effectively.',
            ],
          },
        ],
      },
      {
        title: 'Finanssoreal',
        subtitle: 'Full remote',
        dateRange: [new Date(2021, 2, 1), new Date(2022, 2, 1)],
        skillIconNames: [
          'logos:php',
          'logos:laravel',
          'logos:javascript',
          'logos:mysql',
          'logos:git-icon',
        ],
        sections: [
          {
            title: 'Technical Lead',
            dateRange: [new Date(2021, 5, 1), new Date(2022, 2, 1)],
            points: [
              'Spearheaded technology-driven processes at Finanssoreal, a Fintech, to deliver distinctive experiences to clients and investors, streamlining operations from days to minutes.',
              "Engineered the company's financial system using PHP8, Laravel 8, Livewire, Bootstrap, SCSS, AdminLTE, MySQL, and Webpack.",
              'Assembled, guided, and supervised a high-performing team of 4 software developers, fostering collaboration and achieving project milestones.',
              'Pioneered the creation of intuitive reports for data analysis and decision-making purposes, enhancing operational insights.',
              'Led platform development within an Agile environment using the Scrum methodology, leveraging tools like Trello for task tracking.',
            ],
          },
          {
            title: 'Fullstack Developer',
            dateRange: [new Date(2021, 2, 1), new Date(2021, 5, 1)],
            points: [
              'Collaborate with tech team to define and structure a finance software.',
              'Propose solutions to improve the company processes',
            ],
          },
        ],
      },
      {
        title: 'Freelance',
        subtitle: 'Self Employed',
        dateRange: [new Date(2020, 0, 1), 'present'],
        skillIconNames: [
          'logos:nextjs-icon',
          'logos:react',
          'logos:typescript-icon',
          'logos:javascript',
          'logos:nodejs-icon-alt',
          'logos:tailwindcss-icon',
          'logos:git-icon',
        ],
        points: [
          'Sales system development for a hardware store in Cobán, Alta Verapaz.',
          'CMS development for a scientific research laboratory at Centro Universitario del Norte ITIC.',
          "National voting system development for the Association of Posthumous Aid of the National Teachers' Union of Guatemala.",
          'Development of a vote analysis software using the D’Hondt algorithm for a political party in Alta Verapaz.',
        ],
      },
    ],
  },
] as const satisfies CvSection[];
