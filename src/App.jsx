import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AddRecipeForm from "./Components/addrecipeform";
import Home from "./Components/home";
import "./App.css";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home recipes={recipes} />} />
          <Route
            path="/add-recipe"
            element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
          />
          {}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
