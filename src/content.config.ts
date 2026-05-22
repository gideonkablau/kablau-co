import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.union([z.string().url(), z.string().startsWith('/')]).optional(),
    github: z.string().url().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const experiences = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/experiences" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    category: z.enum(["travel", "review"]).default("review"),
    tags: z.array(z.string()).default([]),
  }),
});

const stack = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/stack" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string().url().optional(),
    category: z.enum(["tools", "gear", "links", "reads"]),
    date: z.coerce.date(),
  }),
});

export const collections = { thoughts, projects, experiences, stack };
