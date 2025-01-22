export interface RecipeInstruction {
    id: number;
    stepNumber?: number;
    stepTitle?: string;
    instruction?: string;
    image?: string; // Just the URL string
  }