// IngredientsSection.tsx
import React from "react";
import { RecipeData } from "../types/RecipeData";

interface IngredientsSectionProps {
  recipe: RecipeData;
}

const IngredientsSection: React.FC<IngredientsSectionProps> = ({ recipe }) => {
  const { recipeIngredients } = recipe;

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        Ingredients
      </h2>
      <div className="overflow-auto flex-1">
        <table className="w-full table-auto text-base text-gray-700">
          <tbody>
            {recipeIngredients.map((ingredient) => (
              <tr key={ingredient.id} className="border-b border-gray-200">
                <td className="py-2 pr-4">
                  <span className="font-medium text-gray-800">{ingredient.name}</span>
                </td>
                <td className="py-2 pl-4">
                  <span>{ingredient.quantity}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IngredientsSection;
