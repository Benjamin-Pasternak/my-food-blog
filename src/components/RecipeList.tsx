"use client";

import React, { useRef, useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../lib/client/fetchRecipe";

interface Recipe {
  id: number;
  title: string;
  image: string | null;
  aggregateRating: {
    ratingValue: number | null;
    ratingCount: number | null;
  };
}

interface PaginationMeta {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}

const RecipeList: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [meta, setMeta] = useState<PaginationMeta>({
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
    itemsPerPage: 5,
  });

  const [loading, setLoading] = useState(false);

  // Fetch recipes with pagination support
  const loadRecipes = async (page: number) => {
    setLoading(true);
    try {
      const data = await fetchRecipes(page, meta.itemsPerPage);
      console.log("Fetched Recipe Data:", data);

      if (!data || !data.data || !data.meta) {
        throw new Error("Invalid data structure returned from API");
      }
      setRecipes(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
      setMeta({ totalItems: 0, totalPages: 1, currentPage: 1, itemsPerPage: 5 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipes(meta.currentPage);
  }, [meta.currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= meta.totalPages) {
      setMeta((prev) => ({ ...prev, currentPage: newPage }));
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-6 py-8">
      {/* Scroll Buttons */}
      <button
        onClick={() => handlePageChange(meta.currentPage - 1)}
        disabled={meta.currentPage === 1}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white shadow-md p-4 rounded-full z-10 ${
          meta.currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
        }`}
      >
        ◀
      </button>

      <div ref={scrollRef} className="flex overflow-x-auto gap-6 py-6 no-scrollbar">
        {loading ? (
          <p>Loading...</p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              ratingValue={recipe.aggregateRating.ratingValue}
              ratingCount={recipe.aggregateRating.ratingCount}
            />
          ))
        )}
      </div>

      <button
        onClick={() => handlePageChange(meta.currentPage + 1)}
        disabled={meta.currentPage === meta.totalPages}
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white shadow-md p-4 rounded-full z-10 ${
          meta.currentPage === meta.totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
        }`}
      >
        ▶
      </button>
    </div>
  );
};

export default RecipeList;
