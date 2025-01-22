export interface RecipeInstructionData {
    stepNumber: number; // Order of the step
    stepTitle: string;  // Title of the step
    instruction: string; // Detailed instruction for the step
    image: string | null; // URL of the image (if available)
  }
  