import { useState, useEffect } from "react";

function RecipeContainer({ recipe, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  useEffect(() => {
    setEditedRecipe({ ...recipe }); 
  }, [recipe]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedRecipe); 
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(recipe.id); 
  };

  const handleChange = (field, value) => {
    setEditedRecipe((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  if (isEditing) {
    return (
      <div className="recipe-container">
        <input
          type="text"
          value={editedRecipe.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <textarea
          value={editedRecipe.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <textarea
          value={editedRecipe.ingredients}
          onChange={(e) => handleChange("ingredients", e.target.value)}
        />
        <textarea
          value={editedRecipe.directions}
          onChange={(e) => handleChange("directions", e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }

  return (
    <div className="recipe-container">
      <div className="recipe">
        <h2>{recipe.title}</h2>
        <p>
          <strong>Description:</strong> {recipe.description}
        </p>
        <p>
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
        <p>
          <strong>Directions:</strong> {recipe.directions}
        </p>
        <img src={recipe.photoUrl} alt={recipe.title} width={300} height={300} />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default RecipeContainer;

