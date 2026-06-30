import { NavLink } from "react-router-dom";
import "./nav-menu.css";

export function NavMenu() {
    return (
        <div className="NavMenu">

			<NavLink to="/">Home</NavLink>
			<NavLink to="/employees">Employees List</NavLink>
            <NavLink to="/addemployee">Add an employee</NavLink>

        </div>
    );
}
