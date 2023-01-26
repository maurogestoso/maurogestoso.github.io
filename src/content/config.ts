import { z, defineCollection } from "astro:content";

const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.date(),
  }),
});

export const collections = {
  notes: notesCollection,
};
