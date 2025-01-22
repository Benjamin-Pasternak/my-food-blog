export interface RecipeImage {
    url: string | null;
  }
  
  export interface RecipeInstruction {
    id: number;
    stepNumber?: number;
    stepTitle?: string;
    instruction?: string;
    image?: string; // Just the URL string
  }
  
  export interface RecipeIngredient {
    id: number;
    name?: string;
    quantity?: string;
  }
  
  export interface RecipeData {
    id: number;
    title: string;
    description: string;
    author: string;
    prepTime?: string;
    cookTime?: string;
    totalTime?: string;
    recipeYield?: string;
    image: string | null;
    recipeInstructions: RecipeInstruction[];
    keywords: string[];
    recipeIngredients: RecipeIngredient[];
    condensedSteps: CondensedStepData[];
    nutritionInfo?: nutritionInfo;
  }

  export interface CondensedStepData {
    stepNumber: number;
    stepDescription: string;
  }

  export interface nutritionInfo {
    calories: string;
    proteinContent: string;
    fatContent: string;
    carbohydrateContent: string;
  }
  