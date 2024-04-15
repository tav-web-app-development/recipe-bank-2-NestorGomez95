import { useState } from "react";

function RecipeContainer({ recipe, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState(recipe);

    const handleEdit = () => {
        setIsEditing(true);
        setEditedRecipe(recipe);
    };

    const handleSave = () => {
        onUpdate(recipe.id, editedRecipe);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(recipe.id);
    };

    if (isEditing) {
        return (
            <div className="recipe-container">
                <input
                    type="text"
                    value={editedRecipe.title}
                    onChange={(e) => setEditedRecipe({ ...editedRecipe, title: e.target.value })}
                />
                <textarea
                    value={editedRecipe.description}
                    onChange={(e) => setEditedRecipe({ ...editedRecipe, description: e.target.value })}
                />
                {}
                <button onClick={handleSave}>Save</button>
            </div>
        );
    }

    return (
        <div className="recipe-container">
            <div className="recipe">
                <h2>{recipe.title}</h2>
                <p><strong>Description:</strong> {recipe.description}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Directions:</strong> {recipe.directions}</p>
                <img src={recipe.photoUrl} alt={recipe.title} width={300} height={300} />
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default RecipeContainer;