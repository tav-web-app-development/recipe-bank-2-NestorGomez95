import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Recipe App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#footer">End of Page</a></li>
          <li><Link to="/add-recipe">Submit a recipe</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
