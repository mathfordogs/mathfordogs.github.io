import { z, defineCollection } from 'astro:content';

const projects = defineCollection({ 
    type: 'content',
    schema:  ({ image }) => z.object({
      title: z.string(),
      date: z.coerce.date(),
      cover: image().refine((img) => img.width >= 800, {
        message: "Cover image must be at least 800 pixels wide!",
      }),
      coverAlt: z.string(),
    }),
});

export const collections = {
  'project': projects
};