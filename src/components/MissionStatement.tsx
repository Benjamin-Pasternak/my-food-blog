import React from "react";
import { MissionStatementData } from "../types/MissionStatementData";

interface MissionStatementProps {
  data: MissionStatementData;
}

const MissionStatement: React.FC<MissionStatementProps> = ({ data }) => {
  const { title, description, imageSrc } = data;

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left: Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-red-600 mb-4 text-center">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Right: Image */}
        {imageSrc && (
          <div className="flex-shrink-0">
            <img
              src={imageSrc}
              alt={title}
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MissionStatement;
