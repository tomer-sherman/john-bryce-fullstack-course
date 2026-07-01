import { NavLink } from "react-router-dom";
import "./menu.css";

export function Menu() {
    return (
        <div className="Menu">

			<NavLink to="/home"> Home</NavLink>
            <span>|</span>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}
