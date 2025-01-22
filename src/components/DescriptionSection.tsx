import React from "react";
import ReactMarkdown from "react-markdown";
import { RecipeData } from "../types/RecipeData";

interface DescriptionSectionProps {
  recipe: RecipeData;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ recipe }) => {
  const { description } = recipe;

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-lg text-gray-800">
        <h2 className="text-center">The Story Behind the Recipe</h2> {/* Centered title only */}
        <p>{description}</p>
      </div>
    </section>
  );
};

export default DescriptionSection;
