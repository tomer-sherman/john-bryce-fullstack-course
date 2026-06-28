import { NavLink } from "react-router-dom";
import "./nav-menu.css";

export function NavMenu() {
    return (
        <div className="NavMenu">

			<NavLink to="/home">Home</NavLink>
            
			<NavLink to="/products">Products</NavLink>

			<NavLink to="/story">Story</NavLink>

			<NavLink to="/about">About</NavLink>

			<NavLink to="/employees">Employees</NavLink>



        </div>
    );
}
