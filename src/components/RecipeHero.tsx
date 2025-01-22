import { RecipeData } from "../types/RecipeData";

interface RecipeHeroProps {
  recipe: RecipeData;
}

const RecipeHero: React.FC<RecipeHeroProps> = ({ recipe }) => {
  const { title, author, image } = recipe;

  const imageUrl = image
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`
    : null;

  return (
    <section
      className="relative bg-cover bg-center text-white py-32"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg font-medium">By {author}</p>
      </div>
    </section>
  );
};

export default RecipeHero;
