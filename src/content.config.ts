import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  date: z.string(),
  updatedDate: z.string().optional(),
  iconName: z.string(),
  slug: z.string(),
});

const blog = defineCollection({
  loader: glob({ base: './src/blog/', pattern: '**/*.md' }),
  schema: blogSchema,
});

export type DefaultBlogContent = z.infer<typeof blogSchema>;

export const collections = { blog };
