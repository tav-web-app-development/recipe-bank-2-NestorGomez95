import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm({ onAddRecipe }) { 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    directions: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(formData);

    onAddRecipe(formData);
    
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            value={formData.ingredients}
            onChange={(e) => handleChange("ingredients", e.target.value)}
          />
        </div>
        <div>
          <label>Directions:</label>
          <textarea
            value={formData.directions}
            onChange={(e) => handleChange("directions", e.target.value)}
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default AddRecipeForm;
