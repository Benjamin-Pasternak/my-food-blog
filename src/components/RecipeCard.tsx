import React from "react";
import Link from "next/link";

interface RecipeCardProps {
  id: number;
  title: string;
  image: string | null;
  ratingValue: number | null;
  ratingCount: number | null;
}

// Function to generate slug from title
const generateSlug = (title: string) => {
  return title
    .toLowerCase() // Lowercase all characters
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with dashes
    .replace(/(^-|-$)/g, ""); // Trim leading and trailing dashes
};

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, image, ratingValue, ratingCount }) => {
  // Generate slug from title
  const slug = generateSlug(title);

  // Construct the full image URL using the environment variable
  const imageUrl = image
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`
    : null;

  // Handle display for ratings
  const displayRating = ratingValue !== null ? ratingValue.toFixed(1) : "No Ratings";

  return (
    <Link href={`/recipes/${slug}`} passHref> {/* Use slug dynamically */}
      <div className="w-72 bg-white shadow-lg rounded-xl overflow-hidden flex-shrink-0 cursor-pointer transition-transform transform hover:scale-102 hover:shadow-xl"> {/* Subtle hover animation */}
        {/* Display Image or Placeholder */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-80 object-cover" /* Taller image */
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 pt-4"> {/* Reduced top padding */}
          <h3 className="text-2xl font-semibold text-center text-red-600">{title}</h3> {/* Signature red, centered */}
          <p className="text-md text-gray-600 mt-2"> {/* Text size unchanged */}
            ⭐ {displayRating} ({ratingCount || 0} ratings)
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
