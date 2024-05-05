import { useState } from "react";
import RecipeContainer from "./RecipeContainer";

function Home({ recipes }) {
  const [updatedRecipes, setUpdatedRecipes] = useState(recipes);

  const onUpdate = (updatedRecipe) => {
    const updatedRecipeList = updatedRecipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setUpdatedRecipes(updatedRecipeList);
  };

  const onDelete = (id) => {
    const updatedRecipeList = updatedRecipes.filter((recipe) => recipe.id !== id);
    setUpdatedRecipes(updatedRecipeList);
  };

  return (
    <div>
      {updatedRecipes.map((data) => (
        <RecipeContainer
          recipe={data}
          key={data.id}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Home;
