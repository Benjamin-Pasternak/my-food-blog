import React from "react";
import Hero from "../components/Hero";
import MissionStatement from "../components/MissionStatement";
import NewsLetter from "../components/NewsLetter";
import RecipeList from "../components/RecipeList";
import { fetchHeroData } from "../lib/server/fetchHero";
import { fetchMissionStatementData } from "../lib/server/fetchMissionStatement";
import { fetchRecipes } from "../lib/client/fetchRecipe"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function HomePage() {
  // Fetch data for the hero section and mission statement
  const heroData = await fetchHeroData();
  const missionStatementData = await fetchMissionStatementData();
  const tileData = await fetchRecipes();

  return (
    <div className="bg-gray-50">
      <Header />
      {/* Hero Section */}
      <Hero data={heroData} />

      <RecipeList />

      {/* Mission Statement */}
      <MissionStatement data={missionStatementData} />

      {/* Newsletter Section */}
      <NewsLetter />

      <Footer />
    </div>
  );
}
