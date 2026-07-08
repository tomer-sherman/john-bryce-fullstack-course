import { NavLink } from "react-router-dom";
import "./menu.css";
import { TotalProducts } from "../../product-area/total-products/total-products";
import { TotalEmployees } from "../../employee-area/total-employees/total-employees";

export function Menu() {
    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            <NavLink to="/products" end>Products</NavLink>
            
            <NavLink to="/products/new">Add Product</NavLink>

            <NavLink to="/employees">Employees</NavLink>

            <NavLink to="/about">About</NavLink>

            <TotalProducts/>
            <TotalEmployees/>

        </div>
    );
}
