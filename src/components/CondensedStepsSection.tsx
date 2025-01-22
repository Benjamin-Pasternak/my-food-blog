// CondensedStepsSection.tsx
import React from "react";
import { RecipeData } from "../types/RecipeData";

interface CondensedStepsSectionProps {
  recipe: RecipeData;
}

const CondensedStepsSection: React.FC<CondensedStepsSectionProps> = ({ recipe }) => {
  const { condensedSteps } = recipe;

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        Condensed Steps
      </h2>
      <ul className="space-y-8 flex-1 overflow-auto">
        {condensedSteps
          ?.sort((a, b) => a.stepNumber - b.stepNumber)
          .map((step) => (
            <li key={step.stepNumber} className="flex items-start space-x-4">
              {/* Step Number */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-base">
                {step.stepNumber}
              </div>

              {/* Step Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                {step.stepDescription}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CondensedStepsSection;
