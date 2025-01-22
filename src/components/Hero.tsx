import React from "react";
import { HeroData } from "../types/HeroData";

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { title, subtitle, bgImage, ctaText, ctaLink } = data;

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    >
      <div className="relative mx-auto max-w-3xl py-24 px-4 text-center">
        <h1 className="text-5xl font-bold text-shadow-xl">{title}</h1> {/* Added text shadow */}
        {subtitle && <p className="mt-4 text-xl text-shadow-lg">{subtitle}</p>} {/* Subtitle with text shadow */}
        {ctaLink && ctaText && (
          <a
            href={ctaLink}
            className="inline-block mt-8 bg-white text-black rounded-full px-6 py-2 hover:bg-gray-200 shadow-lg"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
