import { HeroData } from "../../types/HeroData";
import { fetchApi } from "../fetchApi";
import { z } from "zod";

// Hero Schema
const heroSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string().optional(),
  heroCtaText: z.string().optional(),
  heroCtaLink: z.string().optional(),
  heroBgImage: z
    .object({
      url: z.string(),
    })
    .nullable()
    .optional(),
});

// Full Response Schema
const responseSchema = z.object({
  data: z.object({
    id: z.number(),
    documentId: z.string(),
    hero: heroSchema,
  }),
  meta: z.object({}).optional(), // Ignore meta field
});

export async function fetchHeroData(): Promise<HeroData> {
  // Fetch data
  const json = await fetchApi("/api/homepage?populate=hero.heroBgImage");

  // Validate with Zod (safeParse for graceful handling)
  const result = responseSchema.safeParse(json);
  if (!result.success) {
    console.error("Validation failed:", result.error.format());
    throw new Error("Invalid hero data format");
  }

  // Extract hero data after validation
  const hero = result.data.data.hero;

  // Map to HeroData
  return {
    title: hero.heroTitle,
    subtitle: hero.heroSubtitle,
    bgImage: hero.heroBgImage
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${hero.heroBgImage.url}`
      : undefined,
    ctaText: hero.heroCtaText,
    ctaLink: hero.heroCtaLink,
  };
}
