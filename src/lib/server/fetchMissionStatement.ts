import { fetchApi } from "../fetchApi";
import { MissionStatementData } from "../../types/MissionStatementData";
import { z } from "zod";

// Mission Statement Schema
const missionStatementSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z
    .object({
      url: z.string().optional(),
    })
    .nullable()
    .optional(),
});

const responseSchema = z.object({
  data: z.object({
    missionStatement: z.array(missionStatementSchema).nonempty(), // Ensure at least one item
  }),
  meta: z.object({}).optional(), // Ignore meta field
});

export async function fetchMissionStatementData(): Promise<MissionStatementData> {
  // Fetch data
  const json = await fetchApi("/api/homepage?populate=missionStatement.image");

  // Validate with Zod (safeParse for graceful handling)
  const result = responseSchema.safeParse(json);
  if (!result.success) {
    console.error("Validation failed:", result.error.format());
    throw new Error("Invalid mission statement data format");
  }

  // Extract mission statement data
  const missionStatement = result.data.data.missionStatement[0];

  // Map to MissionStatementData
  return {
    title: missionStatement.title || "Default Title",
    description: missionStatement.description || "Default Description",
    imageSrc: missionStatement.image?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${missionStatement.image.url}`
      : undefined,
  };
}
