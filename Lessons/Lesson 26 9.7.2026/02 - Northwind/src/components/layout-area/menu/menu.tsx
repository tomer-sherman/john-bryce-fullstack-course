import { NavLink } from "react-router-dom";
import "./menu.css";
import { TotalProducts } from "../../product-area/total-products/total-products";
import { TotalEmployees } from "../../employee-area/total-employees/total-employees";
import { UserModel } from "../../../models/user-model";
import { AppState } from "../../../redux/app-state";
import { useSelector } from "react-redux";
import { Role } from "../../../utils/enums";

export function Menu() {

    

    const user = useSelector<AppState, UserModel>(state => state.user);

    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            <NavLink to="/products" end>Products</NavLink>

            <NavLink to="/top-products">Top products</NavLink>

            <NavLink to="/products/new">Add Product</NavLink>

            <NavLink to="/employees">Employees</NavLink>

            <NavLink to="/about">About</NavLink>

           {user?.role===Role.Admin && <NavLink to="/admin">Admin</NavLink>}

            <TotalProducts />
            <TotalEmployees />

        </div>
    );
}
