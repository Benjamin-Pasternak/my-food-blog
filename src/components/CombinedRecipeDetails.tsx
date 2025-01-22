// CombinedRecipeDetails.tsx
import React from "react";
import { RecipeData } from "../types/RecipeData";
import IngredientsSection from "./IngredientsSection";
import CondensedStepsSection from "./CondensedStepsSection";
import NutritionSection from "./NutritionSection";

interface CombinedRecipeDetailsProps {
  recipe: RecipeData;
}

const CombinedRecipeDetails: React.FC<CombinedRecipeDetailsProps> = ({ recipe }) => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {/* Top part with two columns: Ingredients (left) and Steps (right) */}
        <div className="flex flex-col md:flex-row">
          {/* Ingredients column - thinner */}
          <div className="md:w-1/4 border-r border-gray-200 p-6 bg-gray-50">
            <IngredientsSection recipe={recipe} />
          </div>

          {/* Condensed Steps column - takes remaining space */}
          <div className="md:w-3/4 p-6 bg-white">
            <CondensedStepsSection recipe={recipe} />
          </div>
        </div>

        {/* Nutrition info as a subtle horizontal bar with better spacing */}
        <NutritionSection recipe={recipe} />
      </div>
    </section>
  );
};

export default CombinedRecipeDetails;
