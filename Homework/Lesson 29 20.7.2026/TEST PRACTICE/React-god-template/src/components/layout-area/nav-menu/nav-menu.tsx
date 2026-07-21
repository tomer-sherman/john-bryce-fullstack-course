import { NavLink } from "react-router-dom";
import "./nav-menu.css";

export function NavMenu() {
    return (
        <div className="NavMenu">

            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>

        </div>
    );
}
