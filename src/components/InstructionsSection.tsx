import React from "react";
import { RecipeData } from "../types/RecipeData";

interface InstructionsSectionProps {
  recipe: RecipeData;
}

const InstructionsSection: React.FC<InstructionsSectionProps> = ({ recipe }) => {
  const { recipeInstructions } = recipe;

  return (
    <section className="bg-white py-16 px-4 border-t border-gray-200"> {/* Added border and padding for separation */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Instructions</h2> {/* Larger title with darker text */}
        <div className="space-y-12">
          {recipeInstructions
            .filter((instruction) => instruction.stepNumber !== undefined) // Ensure stepNumber exists
            .sort((a, b) => (a.stepNumber! - b.stepNumber!)) // Use non-null assertion
            .map((instruction) => {
              const imageUrl = instruction.image
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${instruction.image}`
                : null;

              return (
                <div
                  key={instruction.id}
                  className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8"
                >
                  {/* Step Image */}
                  {imageUrl && (
                    <div className="flex-shrink-0 w-full md:w-1/3">
                      <img
                        src={imageUrl}
                        alt={`Step ${instruction.stepNumber}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Step {instruction.stepNumber}: {instruction.stepTitle}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {instruction.instruction}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
