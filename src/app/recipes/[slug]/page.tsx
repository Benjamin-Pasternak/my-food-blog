import { fetchRecipe } from "../../../lib/client/fetchRecipe";
import RecipeHero from "../../../components/RecipeHero";
import DescriptionSection from "../../../components/DescriptionSection";
import InstructionsSection from "../../../components/InstructionsSection";
import IngredientsSection from "../../../components/IngredientsSection";
import CondensedStepsSection from "../../../components/CondensedStepsSection";
import NutritionSection from "@/components/NutritionSection";
import CombinedRecipeDetails from "@/components/CombinedRecipeDetails";

interface RecipePageProps {
  params: { slug: string };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = params;

  if (!slug) {
    console.error("Slug is missing");
    throw new Error("Slug parameter is missing");
  }

  console.log("Rendering RecipePage for slug:", slug);

  const recipeData = await fetchRecipe(slug);

  return (
    <main>
      {/* Hero Section */}
      <RecipeHero recipe={recipeData} />

      {/* Description Section */}
      <DescriptionSection recipe={recipeData} />

      {/* Instructions Section */}
      <InstructionsSection recipe={recipeData} />

      <CombinedRecipeDetails recipe={recipeData} />


      {/* Ingredients Section
      <IngredientsSection recipe={recipeData} />

      <CondensedStepsSection recipe={recipeData} />

      <NutritionSection recipe={recipeData} /> */}

      
    </main>
  );
}