import { RecipeData } from "../../types/RecipeData";


export async function fetchRecipe(slug: string): Promise<RecipeData> {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes/${slug}`;
  
    console.log("Fetching recipe with URL:", url);
  
    const res = await fetch(url);
  
    if (!res.ok) {
      console.error("Fetch failed with status:", res.status, res.statusText);
      throw new Error(`Failed to fetch recipe: ${res.status} ${res.statusText}`);
    }
  
    const data: RecipeData = await res.json(); // Ensure it matches the `RecipeData` type
    console.log("Fetched Recipe Data:", data);
  
    return data;
  }


  export async function fetchRecipes(page = 1, limit = 5) {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/recipes?page=${page}&limit=${limit}`;
    console.log("Fetching recipes with URL:", url);

    const response = await fetch(url);
    if (!response.ok) {
      console.error("Fetch failed with status:", response.status, response.statusText);
      throw new Error(`Failed to fetch recipes: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Recipes Data:", data);

    return data;
}