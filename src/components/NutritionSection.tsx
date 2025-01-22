// NutritionSection.tsx
import React from "react";
import { RecipeData } from "../types/RecipeData";

interface NutritionSectionProps {
  recipe: RecipeData;
}

const NutritionSection: React.FC<NutritionSectionProps> = ({ recipe }) => {
  const { nutritionInfo } = recipe;

  if (!nutritionInfo) {
    return null;
  }

  const nutrients = [
    { label: "Calories", value: nutritionInfo.calories },
    { label: "Protein", value: nutritionInfo.proteinContent },
    { label: "Fat", value: nutritionInfo.fatContent },
    { label: "Carbs", value: nutritionInfo.carbohydrateContent },
  ].filter((item) => item.value);

  if (nutrients.length === 0) return null;

  return (
    <div className="border-t border-gray-200 py-4 px-6 text-lg text-gray-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        {/* Nutrition Label */}
        <span className="font-semibold text-gray-900 mb-2 sm:mb-0 sm:mr-6">
          Nutrition:
        </span>

        {/* Nutrient Details */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between w-full">
          {nutrients.map((nutrient, i) => (
            <div key={i} className="flex items-center space-x-1 sm:w-1/4 w-full mb-2 sm:mb-0">
              <span className="font-semibold">{nutrient.label}:</span>
              <span>{nutrient.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionSection;
