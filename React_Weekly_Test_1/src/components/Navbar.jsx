import { NavLink } from 'react-router-dom';
import '../assets/Css/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-text">Suganya_S</NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/GroceryList">Project 1</NavLink></li>
        <li><NavLink to="/LoginToggle">Project 2</NavLink></li>
        <li><NavLink to="/AgeIncreaserCard">Project 3</NavLink></li>
        <li><NavLink to="/LiveCharCounter">Project 4</NavLink></li>
        <li><NavLink to="/FavoriteFruitSelector">Project 5</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
