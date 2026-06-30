import { NavLink } from "react-router-dom";
import "./menu.css";

export function Menu() {
    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            <NavLink to="/products" end>Products</NavLink>

            <NavLink to= "/products/new">Add Products</NavLink>

            <NavLink to="/employees">Employees</NavLink>


            <NavLink to="/about">About</NavLink>

        </div>
    );
}
