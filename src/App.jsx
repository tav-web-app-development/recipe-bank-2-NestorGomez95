import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./App.css";
import "./assets/style.css";

function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.sampleapis.com/recipes/recipes");
            const data = await response.json();
            setRecipes(data);
        };
        fetchData();
    }, []);

    const deleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    };

    const updateRecipe = (id, updatedRecipe) => {
        setRecipes(recipes.map(recipe => recipe.id === id ? updatedRecipe : recipe));
    };

    return (
        <>
            <Navbar />
            <div>
                {recipes.map((recipe) => (
                    <RecipeContainer
                        key={recipe.id}
                        recipe={recipe}
                        onDelete={deleteRecipe}
                        onUpdate={updateRecipe}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default App;